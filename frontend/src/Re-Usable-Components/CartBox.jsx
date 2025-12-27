import React from "react";

const CartBox = ({ item }) => {
  return (
    <div
      className="
        card
        rounded
        p-4
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
      "
    >
      {/* Left: Image + Name */}
      <div className="flex items-center gap-4 flex-1">
        <img
          src={item.image}
          alt="cartImage"
          className="w-16 h-16 object-cover rounded"
        />

        <h1 className="font-medium text-sm sm:text-base line-clamp-2">
          {item.name}
        </h1>
      </div>

      {/* Price */}
      <p className="font-semibold text-lg sm:text-base">
        ₹ {item.price}
      </p>

      {/* Actions */}
      <div className="flex gap-3 sm:gap-2">
        <button
          className="
            px-4
            py-2
            sm:px-3
            sm:py-1
            button
            rounded
            text-sm
          "
        >
          Buy
        </button>

        <button
          className="
            px-4
            py-2
            sm:px-3
            sm:py-1
            button
            rounded
            text-sm
          "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartBox;
