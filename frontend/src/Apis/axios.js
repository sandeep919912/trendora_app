import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

console.log("BACKEND URL 👉", import.meta.env.VITE_BACKEND_URL);

export default API;