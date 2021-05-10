import axios from "axios";

const api = axios.create({
  baseURL: "https://dcoderbackend.herokuapp.com/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default api;
