// apiService.ts
import axiosInstance from './httpRequest2';
import axios from 'axios'
// GET request with or without query parameters
export const getData = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// POST request with a body
export const postData = async <T, R>(endpoint: string, body: T): Promise<R> => {
  try {
    const response = await axiosInstance.post<R>(endpoint, body);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// PUT (update) request with a body
export const putData = async <T, R>(endpoint: string, body: T): Promise<R> => {
  try {
    const response = await axiosInstance.put<R>(endpoint, body);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// DELETE request with or without parameters
export const deleteData = async <R>(endpoint: string, params?: Record<string, any>): Promise<R> => {
  try {
    const response = await axiosInstance.delete<R>(endpoint, { params });
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// PATCH request with a body (partial update)
export const patchData = async <T, R>(endpoint: string, body: T): Promise<R> => {
  try {
    const response = await axiosInstance.patch<R>(endpoint, body);
    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

// Common error handler

const handleError = (error: any) => {
  if (axiosInstance.isAxiosError(error)) {
    console.error('API Error:', error.response?.data || error.message);
  } else {
    console.error('Unexpected Error:', error);
  }
};
