import axios from "axios";
import { useEffect } from "react";



const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL2, 
  
  withCredentials: true,
});


  console.log("BACKEND URL 👉", import.meta.env.VITE_BACKEND_URL);

export default API;