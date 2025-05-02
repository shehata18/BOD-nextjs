import axios, { AxiosHeaders } from "axios";

// Create an Axios instance
const backendServer = axios.create({
  baseURL: "https://safezone-co.top/api/v1/dashboard/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Example of a GET request
export const getData = async (
  endpoint: string,
  params?: unknown,
  headers?: AxiosHeaders
) => {
  try {
    const response = await backendServer.get(endpoint, { params, headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example of a POST request
export const postData = async (
  endpoint: string,
  data: unknown,
  headers?: AxiosHeaders
) => {
  try {
    const response = await backendServer.post(endpoint, data, {
      headers: { ...headers },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export default backendServer;
