import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios';

export function api() {
  const client: Axios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  async function postData<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      const response = await client.post<AxiosResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  }

  return {
    postData,
  };
}
