import React, { useEffect } from "react";
import onePerCategory from "../Tests/problemSolving";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Categories = () => {
  const toSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, "").replace("-", "");

  return (
    <motion.div
      className="
        grid
        grid-cols-1
        min-[434px]:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        p-6
        container
        mx-auto
      "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      {onePerCategory.map((items) => {
        const slug = toSlug(items.category);

        return (
          <Link
            key={items.category}
            to={`/categories/${slug}`}
            className="
              p-3
              rounded
              shadow-md
              shadow-black
              flex
              flex-col
              gap-2
              cursor-pointer
              transition
              duration-200
              hover:scale-105
            "
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full aspect-[4/5] object-cover rounded"
            />
            <h2 className="font-semibold text-center">{items.category}</h2>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Categories;
