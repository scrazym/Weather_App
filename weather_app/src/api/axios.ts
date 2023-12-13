import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosApiInstance = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

class Api {
  async getData(url: string, params?: AxiosRequestConfig<string>) {
    return await axiosApiInstance
      .get(url, params)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
  async post(url: string, params?: AxiosRequestConfig<string>) {
    return await axiosApiInstance.post(url, params);
  }
  async patch(url: string, params?: AxiosRequestConfig<string>) {
    return await axiosApiInstance.patch(url, params);
  }
  async put(url: string, params?: AxiosRequestConfig<string>) {
    return await axiosApiInstance.put(url, params);
  }
  private handleResponse(response: AxiosResponse) {
    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  }
  private handleError(err: AxiosError) {
    return {
      status: err.response?.status,
      data: err.message,
    };
  }
}
export default new Api();
