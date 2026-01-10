import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import API from "../Apis/axios";
import { toast } from "react-toastify";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await API.post("/register", { name, email, password });
      if(res.status === 201){
        toast.success("Signup successful! Please log in.");
        Navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
    finally {
      setLoading(false);
    }
  };

  return (
   <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
  <div className="w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex">

    {/* LEFT IMAGE */}
    <div className="hidden md:flex w-1/2 relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0BWuHgxw4SK8_8IPduATr0KXh4mgQjxIDA&s"
        alt="signup"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Branding */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl font-bold tracking-wide">Trendora</h1>
        <p className="mt-2 text-sm text-gray-200 max-w-xs">
          Create your account and start shopping smarter.
        </p>
      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Create Account 🚀
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Sign up to get started with Trendora
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

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
              focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
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
              placeholder="Minimum 6 characters"
              className="w-full px-4 py-2.5 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1 accent-orange-500" />
            <p className="text-gray-600">
              I agree to the{" "}
              <span className="text-orange-600 underline cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 
            text-white py-2.5 rounded-lg font-semibold 
            hover:opacity-90 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Log in
          </Link>
        </p>

      </div>
    </div>
  </div>
</div>

  );
};

export default Signup;
