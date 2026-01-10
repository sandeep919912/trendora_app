import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import API from "../../Apis/axios"

const AllUsers = () => {
  const [Users, setUsers] = useState(null);

  useEffect(() => {
    const fetchAllusers = async () => {
      try {
        const res = await API.get("/register");
        setUsers(res.data);
      } catch (error) {
        console.log("error while fetch users", error);
      }
    };
    fetchAllusers();
  }, []);

  useEffect(() => {
    console.log(Users);
  }, [Users]);

  if (!Users) {
    return (
      <div className="flex justify-center items-center w-full">
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full scroll-auto bg-slate-900 p-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">All Users</h1>

      <div className="overflow-x-auto rounded-lg border border-slate-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {Users.map((user, index) => (
              <tr key={user._id} className="hover:bg-slate-800 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-slate-300">{user.email}</td>

                <td className="px-6 py-4 text-center space-x-3">
                  <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded-md text-xs font-semibold">
                    View
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
