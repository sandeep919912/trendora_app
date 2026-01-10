import React, { use, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Re-Usable-Components/ProductCard.jsx";
import API from "../Apis/axios.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../Redux/AllProducts/productSlice.js";

const BestProducts = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);


  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center py-10 card">
      <h1 className="text-4xl font-semibold text-blue-800 mb-6">
        Best Products
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 🔄 Loading skeleton shimmer */}
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl p-4 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))
          : products
              .filter((item) => item.rating >= 4.7 || item.rating === undefined)
              .map((item) => <ProductCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default BestProducts;
