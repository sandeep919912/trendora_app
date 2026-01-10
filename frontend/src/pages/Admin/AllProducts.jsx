import React, { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch  , useSelector} from "react-redux"
import { fetchAllProduct } from "../../Redux/AllProducts/productSlice";


const AllProducts = () => {
  const dispatch = useDispatch()
  const {products , loading , error} = useSelector((state)=>state.products)

  useEffect(() => {
    dispatch(fetchAllProduct())
  }, []);


  if (loading) {
    return (
      <div className="p-6 text-white text-center">Loading products...</div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6 text-white w-full">
      <h1 className="text-2xl font-semibold mb-6">All Products</h1>

      <div className="overflow-x-auto rounded-lg border border-slate-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">InStock</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {products.map((product, index) => (
              <tr key={product._id} className="hover:bg-slate-800 transition">
                <td className="px-6 py-4">{index + 1}</td>

                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="px-6 py-4 font-medium">{product.name}</td>

                <td className="px-6 py-4 text-slate-300">{product.category}</td>

                <td className="px-6 py-4 font-semibold">₹{product.price}</td>

                <td className="px-6 py-4">{product.inStock ? "Yes" : "No"}</td>

                <td className="px-6 py-4 text-center space-x-3">
                  <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded-md text-xs font-semibold">
                    Edit
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

      {/* Empty State */}
      {products.length === 0 && (
        <p className="text-center text-slate-400 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default AllProducts;
