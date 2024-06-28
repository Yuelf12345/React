import service from "../utils/request.ts";
export const apiLogin = (data: { username: string; password: string }) => {
  return service.request({
    url: "/login",
    method: "POST",
    data,
  });
};
export const apiTableDate = () => {
  return service.request({
    url: "/tableDate",
    method: "GET",
  });
};
