import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"
import API from "../Apis/axios"

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loginLoading , setLoginLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error , setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoginLoading(true)
      const alreadyLogedIn = localStorage.getItem("adminToken") || false

      if(alreadyLogedIn){
        alert("Admin already LoggedIn")
        return
      }
      
      const res = await API.post(
        "/admin/login",
        formData
      );

      localStorage.setItem("adminToken", res.data.token);
      setLoginLoading(false)
      setFormData({ email: "", password: "" });

      navigate("/admin/dashboard");
      toast.success("Admin Logged In Successfully")

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
      setError(error.message)
      setLoginLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-gray-800 p-6 rounded-xl shadow-lg border dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login Register
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition`}
        >
          {loginLoading? "Verifying.." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
