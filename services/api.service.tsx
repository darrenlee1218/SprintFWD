import axios from "axios";

export const API_URL = process.env.FAKE_API_HOST;

export const getApi = async (url: string) => {
  const apiUrl = `${API_URL}/${url}`;
  return axios
    .get(apiUrl)
    .then((response) => {
      return response.data;
    })
};

export const postApi = async (url: string, data: any) => {
  const apiUrl = `${API_URL}/${url}`;
  const payload = data;
  return axios
    .post(apiUrl, payload, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    });
};

export const patchApi = async (url: string, data: any) => {
  const apiUrl = `${API_URL}/${url}`;
  const payload = data;
  return axios
    .patch(apiUrl, payload, {
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
