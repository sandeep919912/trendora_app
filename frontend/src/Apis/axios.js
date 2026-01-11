import axios from "axios";

const API = axios.create({
  baseURL: "https://trendora-app.onrender.com",
  withCredentials: true,
});

console.log("BACKEND URL 👉", import.meta.env.VITE_BACKEND_URL);

export default API;