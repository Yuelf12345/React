import service from "../utils/request.ts";
export const apiTableDate = () => {
  return service.request({
    url: "/tableDate",
    method: "GET"
  });
};
