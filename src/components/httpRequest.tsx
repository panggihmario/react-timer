// axiosInstance.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://your-api-url.com", // Replace with your API's base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Request timeout in milliseconds
});

// Axios request types
type ApiResponse<T> = Promise<AxiosResponse<T>>;

// Utility functions
const makeRequest = async <T,>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.request({
      method,
      url,
      data,
      ...config,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// GET request
export const getRequest = <T,>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return makeRequest<T>("GET", url, undefined, config);
};

// POST request
export const postRequest = <T,>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return makeRequest<T>("POST", url, data, config);
};

// PUT (update) request
export const putRequest = <T,>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return makeRequest<T>("PUT", url, data, config);
};

// PATCH request (partial update)
export const patchRequest = <T,>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return makeRequest<T>("PATCH", url, data, config);
};

// DELETE request
export const deleteRequest = <T,>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  return makeRequest<T>("DELETE", url, undefined, config);
};

export default axiosInstance;
