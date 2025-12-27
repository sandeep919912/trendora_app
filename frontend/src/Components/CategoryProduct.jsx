import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/Product";
import ProductCard from "../Re-Usable-Components/ProductCard";

const normalize = (str) =>
  str.toLowerCase().replace(/\s+/g, "").replace("-", "");

const CategoryProduct = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (item) => normalize(item.category) === normalize(category)
  );

  return (
    <div
      className="
        container
        mx-auto
        p-6
        grid
        grid-cols-1
        min-[434px]:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      {/* Heading */}
      <h1 className="col-span-full text-2xl font-bold uppercase">
        {category}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="col-span-full text-center">
          No products found
        </p>
      ) : (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default CategoryProduct;
