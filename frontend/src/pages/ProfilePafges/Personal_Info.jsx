import React, { useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import API from "../../Apis/axios";
import { useContext } from "react";
import { authContext } from "../../ContextApis/CurrUserContext";


const Personal_Info = () => {

  const {currUser} = useContext(authContext);

  const [number , setNumber] = useState("")
  const [address , setAddress] = useState("")

  const handleUserProfile = async (e)=>{
    e.preventDefault()
    try {
      const res =await API.patch(`/user/update/${currUser._id}`  , 
        {
          number,
          address
        }
      )
      toast.success("profile update successfully")
    } catch (error) {
      toast.error(error.response?.data?.message || "Profile update failed");
    }
  }

  if(!currUser){
    return <h1>Loading Data ....</h1>
  }
  

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3 mb-5">
        Personal Information
      </h2>

      <form className="space-y-4" onSubmit={handleUserProfile}>
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            defaultValue={currUser.name}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            defaultValue={currUser.email}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-1">Phone Number</label>
          <input
            onChange={(e)=>{setNumber(e.target.value)}}
            defaultValue={currUser? currUser.number : "+91 **********"}
            type="text"
            placeholder="Enter your phone number"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Address */}    
        <div className="flex flex-col">
          <label className="text-gray-600 font-medium mb-1">Address</label>
          <textarea
            onChange={(e)=>{setAddress(e.target.value)}}
            placeholder="Enter your address"
            defaultValue="ex : Bengaluru, Karnataka"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Personal_Info;
