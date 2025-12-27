import React, { useEffect, useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"


const Personal_Info = () => {

  const currUser = JSON.parse(localStorage.getItem("user"))

  const [currUserData , setCurrUserData] = useState(null)

  const [number , setNumber] = useState("")
  const [address , setAddress] = useState("")


  const fetchCurrUserData = async ()=>{
    try {
      const res = await axios.get(`http://localhost:5000/register/${currUser.id}`)
      setCurrUserData(res.data.currUser)
      console.log(res.data.currUser)
    } catch (error) {
      console.log("error in fetching currentUer and address" , error)
    }
  }

  useEffect(()=>{
    fetchCurrUserData()
  } , [])

  useEffect(()=>{
    console.log("currUserData :" , currUserData)
  })

  const handleUserProfile = async (e)=>{
    e.preventDefault()
    try {
      const res =await axios.patch(`http://localhost:5000/user/update/${currUser.id}`  , 
        {
          number,
          address
        }
      )

      toast.success("profile update successfully")
    } catch (error) {
      console.log("error in updating currentUer and address" , error)
      toast.error("error while updating")
    }
  }

  if(!currUserData){
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
            defaultValue={currUserData.name}
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
            defaultValue={currUserData? currUserData.number : "+91 **********"}
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
