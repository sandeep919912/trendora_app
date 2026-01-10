import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../Apis/axios"

const AdminHome = () => {
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        const res = await API.get("/admin/dashboard", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        setDashboard(res.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDashboardData();
  },[]);

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.reload();
  };

  if (error) {
    return (
      <div className="min-h-auto flex items-center justify-center bg-gray-900 text-red-500">
        {error}
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-auto w-full flex justify-center items-center bg-gray-900 text-white">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-auto p-6 text-white">
      {/* ✅ METRIC CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-5 rounded-xl text-center">
          <p className="text-gray-400">Total Users</p>
          <h2 className="text-3xl font-bold">{dashboard.totalUsers}</h2>
        </div>

        <div className="card p-5 rounded-xl text-center">
          <p className="text-gray-400">Total Orders</p>
          <h2 className="text-3xl font-bold">{dashboard.totalOrders}</h2>
        </div>

        <div className="card p-5 rounded-xl text-center">
          <p className="text-gray-400">Total Products</p>
          <h2 className="text-3xl font-bold">{dashboard.totalProducts}</h2>
        </div>

        <div className="card p-5 rounded-xl text-center">
          <p className="text-gray-400">Revenue</p>
          <h2 className="text-3xl font-bold">₹ {dashboard.revenue}</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
