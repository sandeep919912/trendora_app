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

  if (loading)
    return <h2 className="flex justify-center items-center">Loading...</h2>;
  if (error) return <h2>{error}</h2>;
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
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: easeIn }}
    >
      {products.map((item) => {
        return <ProductCard item={item} />;
      })}
    </motion.div>
  );
};

export default Shop;
