import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { div, nav } from "framer-motion/client";
import API from "../Apis/axios";
import { useContext } from "react";
import { authContext } from "../ContextApis/CurrUserContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {setCurrUser} = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if ((!email, !password)) {
        toast.error("All field are required");
        return;
      }

      let response = await API.post("/login", {
        email,
        password,
      });


      if (response.status === 200) {
        toast.success("Login successful");
        setCurrUser(response.data.user);
        localStorage.setItem("userId", response.data.user.id);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      setError(error.response?.data?.message || "Login failed" );
    }
    finally {
      setLoading(false);
    }
  };

  const {currUser} = useContext(authContext);

  useEffect(() => {
    if (currUser) {
      navigate("/");
    }   
  }, [currUser]);

  return (
   <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
  <div className="w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex">

    {/* LEFT IMAGE */}
    <div className="hidden md:flex w-1/2 relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0BWuHgxw4SK8_8IPduATr0KXh4mgQjxIDA&s"
        alt="login"
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* branding */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl font-bold tracking-wide">Trendora</h1>
        <p className="mt-2 text-sm text-gray-200 max-w-xs">
          Manage products, orders & customers with ease.
        </p>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Login to continue to Trendora
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-orange-500 
              transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-orange-500 
              transition"
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 
            text-white py-2.5 rounded-lg font-semibold 
            hover:opacity-90 transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-gray-600 text-center mt-6">
          New user?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
