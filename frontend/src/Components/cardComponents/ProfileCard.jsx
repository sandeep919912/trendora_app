import React, { useState } from "react";
import { Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../ContextApis/ThemeContext";
import {toast} from "react-toastify"
import { useEffect } from "react";
import API from "../../Apis/axios";



const ProfileCard = ({ user, setProfile }) => {

  const handleRemove = () => {
    setProfile(false);
  };

  const handleLogout = async() => {
    await API.post("/logout" , {} , {withCredentials:true})
    .then((res)=>{
      toast.success(res.data.message)
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((err)=>{
      toast.error(err.response?.data?.message || "Logout failed")
    })
  };

  const {theme , toggleTheme} = useContext(ThemeContext)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 0 }} // Start off-screen (right side)
        animate={{ x: 0, opacity: 1 }} // Slide into view
        exit={{ x: 200, opacity: 0 }} // Slide out when closed
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute right-5 top-20 bg-white shadow-xl p-5 rounded-xl 
                   flex flex-col gap-3 w-64 border border-gray-200 dark:bg-gray-950 "
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Profile
          </h3>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
               bg-white dark:bg-gray-800 transition"
          >
            {theme == "dark" ? (
              <Moon size={18} className="text-yellow-400" />
            ) : (
              <Sun size={18} className="text-gray-600" />
            )}
          </button>

          <button
            onClick={handleRemove}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* User info */}
        <p className="text-sm text-gray-600 mt-1">
          Logged in as:{" "}
          <span className="font-medium">
            {user.email}
          </span>
        </p>

        {/* Links */}
        <div className="flex flex-col gap-2 mt-3">
          <Link
            to="/profile"
            onClick={() => setProfile(false)}
            className="hover:text-blue-600 transition text-gray-700"
          >
            Personal Info
          </Link>
          <Link
            onClick={() => setProfile(false)}
            to="/orders-activity"
            className="hover:text-blue-600 transition text-gray-700"
          >
            Orders & Activity
          </Link>
          <Link
            onClick={() => setProfile(false)}
            to="/settings"
            className="hover:text-blue-600 transition text-gray-700"
          >
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="text-left text-red-600 hover:text-red-800 transition"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileCard;
