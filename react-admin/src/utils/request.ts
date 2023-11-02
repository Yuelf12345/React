import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:7070',
    timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        console.log('!请求接口错误', error);
        return Promise.reject()
    }
)

//响应拦截
service.interceptors.request.use(
    (response: InternalAxiosRequestConfig) => {
        // if(response.status === 200){
        //     return response;
        // }else{
        //     Promise.reject()
        // }
        return response;
    },
    (error: AxiosError) => {
        console.log('!响应接口错误', error);
        return Promise.reject()
    }
)


// 封装 GET 请求
export function get<T>(url: string, params?: any, config?: AxiosRequestConfig): any {
    return service.get<T>(url, { params, ...config });
}

// 封装 POST 请求
export function post<T>(url: string, data?: any, config?: AxiosRequestConfig):any {
    return service.post<T>(url, data, config);
}
