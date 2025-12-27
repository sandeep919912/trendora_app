import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { nav } from "framer-motion/client";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if ((!email, !password)) {
        toast.error("All field are required");
        return;
      }
      let response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("login successfull");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      toast.info("User already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="w-[70vw] h-[80vh] rounded-sm bg-white flex overflow-hidden shadow-lg">
        {/* Left Side - Image */}
        <div className="w-1/2 h-full bg-[url('/login-image.jpg')] bg-center bg-cover"></div>

        {/* Right Side - Content */}
        <div className="w-1/2 h-full p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="px-4 py-2 border rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 focus:border-green-600 
                  transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="px-4 py-2 border rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 focus:border-green-600 
                  transition"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-white py-2 rounded-lg 
                hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            New user ?{" "}
            <Link to="/signup" className="text-red-600 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
