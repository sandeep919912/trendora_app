import React from "react";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../ContextApis/CurrUserContext";
import { useEffect } from "react";

const Profile = () => {
  const links = [
    { name: "Personal Info", path: "personal_info" },
    { name: "Orders", path: "orders" },
    { name: "Settings", path: "settings" },
  ];

  const {currUser , loading } = useContext(authContext);


  if(loading){
    return <h1>Loading ....</h1>
  }

  return (
    <div className="w-full h-auto flex justify-between p-8 container mx-auto card">
      {/* Left Sidebar */}
      <div className="w-[25%] space-y-5">
        {/* User Info Card */}
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Start off-screen (right side)
          animate={{ x: 0, opacity: 1 }} // Slide into view
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="h-auto p-5 shadow-lg bg-gray-200 flex items-center gap-3 rounded card"
        >
          <img
            src="/Images/logo.png"
            alt="profile"
            className="w-[20%] rounded-full"
          />
          <div className="flex flex-col text-sm justify-center">
            <p>{currUser.name}</p>
            <p>{currUser.email}</p>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Start off-screen (right side)
          animate={{ x: 0, opacity: 1 }} // Slide into view
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="h-auto p-5 shadow-lg bg-gray-200 flex items-center gap-3 rounded card"
        >
          <ul className="flex flex-col gap-2 w-full ">
            {links.map((item, index) => (
              <NavLink
                key={index}
                to={item.path} // ✅ relative path — automatically becomes /profile/...
                className={({ isActive }) =>
                  `p-2 rounded transition  ${
                    isActive
                      ? "bg-blue-500 text-white "
                      : "hover:bg-white hover text-gray-800"
                  }`
                }
                end
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right Outlet Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-[70%] max-h-[80vh] overflow-y-scroll no-scrollbar p-5 shadow-lg bg-gray-200 rounded card"
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default Profile;
