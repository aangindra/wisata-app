import axios from "axios";

import { API_DEV_URL, API_URL } from "@/constants";

const api = () => {
  const defaultOptions = {
    baseURL: process.env.NODE_ENV === "production" ? API_URL : API_DEV_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return Promise.resolve(response);
    },
    async function (error) {
      const status = error.response ? error.response.status : null;
      if (status == 401) {
        localStorage.clear();
      }

      return Promise.reject(error.response);
    }
  );

  return instance;
};

export default api();
