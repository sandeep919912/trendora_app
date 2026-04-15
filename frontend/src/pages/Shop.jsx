import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../Redux/AllProducts/productSlice";
import ProductCard from "../Re-Usable-Components/ProductCard";
import { easeIn, motion } from "framer-motion";

const Shop = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);
  
  if (error) return <h2>{error.message}</h2>;
  return (
    <motion.div
      className="
    grid
    grid-cols-1
    min-[434px]:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5
    p-5
  "
     
    >
      {loading ? 
        Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl p-4 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            )
      ) : (
        products.map((item) => {
          return <ProductCard item={item} />;
        })
      )}
    </motion.div>
  );
};

export default Shop;
