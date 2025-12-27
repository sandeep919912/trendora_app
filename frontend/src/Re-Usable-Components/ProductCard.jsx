import React, { useEffect } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {toast} from "react-toastify"

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleViewItem = (item) => {
    navigate(`/${item._id}`);
  };

  const AddToCart = async ({requireFields , userId}) => {
    try {
      const AddedItem = await axios.post("http://localhost:5000/cart/add" , {requireFields , userId});
      toast.success("Item Added Successfully")
    } catch (error) {
      console.log("error while add to cart" , error)
      toast.error(error)
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id

  const requireFields = {
    name : item.name,
    price:item.price,
    productId : item._id,
    quantity : 1,
    image : item.image
  }

  const handleAddToCart = (item) => {
    if (!userId) {
      navigate("/login");
      return;
    }
    console.log(requireFields)
    AddToCart({requireFields , userId})
  };


  return (
    <div
      key={item.id}
      onClick={() => {
        handleViewItem(item);
      }}
      className="group  bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 card cursor-pointer"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold truncate">{item.name}</h3>

        {/* Price */}
        <p className="text-gray-700 font-bold text-xl">₹{item.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.round(item.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-500">({item.rating})</span>
        </div>

        {/* Add to cart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(item);
          }}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition-all"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
