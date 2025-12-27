import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionNavLink = motion.create(NavLink);

const AdminDashboard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);

  const linksName = [
    { name: "Home", route: "home" },
    { name: "All Users", route: "users" },
    { name: "All Queries", route: "queries" },
    { name: "All Products", route: "products" },
    { name: "Add Products", route: "add-products" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ remove auth token
    navigate("/admin/login"); // ✅ redirect to login
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-800">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Layout */}
      <div className="flex justify-between p-5 gap-10">
        {/* Sidebar */}
        <section className="w-1/4 rounded border max-h-max dark:border-gray-800 p-2 flex flex-col gap-5">
          {linksName.map((items) => (
            <MotionNavLink
              key={items.route}
              to={items.route}
              initial={{ scale: 1, x: 0 }}
              whileHover={{
                scale: [1, 0.85, 1],
                x: [0, 10, 0],
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "center" }}
              className="bg-gray-800 p-2 text-center cursor-pointer rounded hover:bg-gray-300 hover:text-black"
            >
              {items.name}
            </MotionNavLink>
          ))}
        </section>

        {/* Main Content */}
        <section className="flex w-3/4 max-h-screen overflow-auto no-scrollbar scroll-auto rounded border dark:border-gray-800">
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
