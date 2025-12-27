import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


const Signup = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [name , setName] = useState("")
  const [number , setNumber] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      if(name || email || password){
        console.log("user already exist")
      }
      
      const user = await axios.post("http://localhost:5000/register" , {name , email , password})

      console.log("user registered successfully" , user)

    } catch (error) {
      console.log("error" , error)
    }
  }

  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center bg-gray-100">
      <div className="w-[70vw] max-w-5xl h-[80vh] bg-white rounded-md shadow-lg flex overflow-hidden">

        {/* Left Side - Image */}
        <div className="w-1/2 h-full bg-[url('/login-image.jpg')] bg-center bg-cover" />

        {/* Right Side - Form */}
        <div className="w-1/2 h-full flex flex-col justify-center px-10 py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                type="text"
                placeholder="Enter Your Name"
                className="px-4 py-2 border rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 focus:border-green-600 
                  transition"
              />
            </div>

            {/* Number */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Number
              </label>
              <input
                onChange={(e)=>{setNumber(e.target.value)}}
                value={number}
                type="text"
                placeholder="Enter Phone Number"
                className="px-4 py-2 border rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 focus:border-green-600 
                  transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
                type="email"
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
              onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                type="password"
                placeholder="Set Password"
                className="px-4 py-2 border rounded-lg outline-none 
                  focus:ring-2 focus:ring-green-600 focus:border-green-600 
                  transition"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="w-4 h-4 accent-green-600" />
              <p className="text-gray-600">
                I agree to the{" "}
                <span className="text-green-600 underline cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 bg-orange-500 text-white py-2 rounded-lg 
                hover:bg-green-700 transition duration-300"
            >
              Signup
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600 cursor-pointer hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
