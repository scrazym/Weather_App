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

export interface WetherFromApi {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export interface FormatWeatherToday {
  location: string;
  icon: string;
  current_t_C: number;
  condition: string;
  humidity: number;
  wind_kmH: number;
  wind_dir: string;
  pressure: number;
  loading: boolean;
  error: null;
}
export const transformDataToday = (data: WetherFromApi): FormatWeatherToday => {
  return {
    location: data.location.tz_id,
    icon: data.current.condition.icon,
    current_t_C: data.current.temp_c,
    condition: data.current.condition.text,
    humidity: data.current.humidity,
    wind_kmH: data.current.wind_kph,
    wind_dir: data.current.wind_dir,
    pressure: data.current.pressure_mb,
    loading: false,
    error: null,
  };
};
