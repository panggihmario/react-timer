// axiosInstance.ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Create an Axios instance with custom configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your base URL
  timeout: 10000, // Timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
    // Authorization headers or other default headers can be added here
  },
});

export default axiosInstance;
