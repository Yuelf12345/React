import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  CancelTokenSource,
} from "axios";

const baseURL = "http://localhost:3000";

//创建axios实例
const service = axios.create({
  baseURL,
  timeout: 3000,
});

//添加请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string | null = sessionStorage.getItem("token") || null;

    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error: AxiosError) => {
    //对请求错误做些什么
    console.log(error, "request-error");
    return Promise.reject(error);
  }
);

//添加响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    //2XX范围内的状态码都会触发该函数
    //对响应数据做点什么
    return response.data;
  },
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    }
    //超出2xx范围的状态码都会触发该方法
    //对响应错误做点什么
    console.log(error, "response-error");
    const { response } = error;
    let message = "";
    const status = response?.status;
    switch (status) {
      case 401:
        message = "token失效,请重新登陆";
        break;
      case 403:
        message = "拒绝访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器故障";
        break;
      default:
        message = "网络连接故障";
    }

    console.log(message, "response-error-mag");
    return Promise.reject(error);
  }
);

export default service;

// 取消重复的上一次请求
const cancelTokens: { [key: string]: CancelTokenSource } = {};
export const createRequestWithCancelToken = (
  config: InternalAxiosRequestConfig,
  key = "default"
) => {
  if (cancelTokens[key]) {
    cancelTokens[key].cancel("Request canceled");
  }
  cancelTokens[key] = axios.CancelToken.source();
  return service({
    ...config,
    cancelToken: cancelTokens[key].token,
  });
};
