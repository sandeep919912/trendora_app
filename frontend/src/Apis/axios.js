import axios from "axios";

const API = axios.create({
  baseURL: "https://trendora-app.onrender.com",
  // baseURL:"http://localhost:5000",
  withCredentials: true,
});

console.log("BACKEND URL 👉", import.meta.env.VITE_BACKEND_URL);

export default API;