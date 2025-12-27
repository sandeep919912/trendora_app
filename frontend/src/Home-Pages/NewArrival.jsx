import React from "react";
import  Products from "../Data/Product.js"; // ✅ named import
import { ShoppingCart, Star } from "lucide-react";
import ProductCard from "../Re-Usable-Components/ProductCard.jsx";

const NewArrivals = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center py-10 container mx-auto card">
      <h1 className="text-4xl font-semibold text-green-800 mb-6">
        New Arrivals
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {Products.filter((item) => item.newArrival == true).map((items) => (
            <ProductCard item={items}/>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;