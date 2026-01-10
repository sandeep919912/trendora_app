import { Edit, Star } from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../Apis/axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { authContext } from "../ContextApis/CurrUserContext";

function ProductDetail() {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const {currUser} = useContext(authContext);

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/api/products/${id}`);
      setItem(res.data);
    } catch (error) {
      console.log("error in productDetail", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);
  

  // Buy Item function
  const buyItem = () => {
    if(!currUser){
      toast.info("Please login to continue buying")
      navigate("/login")
      return;
    }
    
    const buyNowItem = {
      productId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty,
      size,
    };

    localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
    navigate(`/checkout/${item._id}`);
  };

  const handleClick = (btnName) => {
    if (btnName === "Buy Now") {
      buyItem();
    }
  };

  // quantity state
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="flex container mx-auto p-5 justify-center items-center rounded shadow-md"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: easeInOut }}
    >
      <div className="rounded flex items-center justify-between shadow-xl shadow-black">
        {/* IMAGE */}
        <div className="h-[80vh]">
          <img src={item.image} alt="" className="h-full rounded" />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="max-h-screen w-[50%] rounded px-5 py-2 space-y-5 border-l border-gray-200">
          <h1 className="font-semibold text-2xl font-mono">{item.name}</h1>
          <p>{item.description}</p>

          <p className="flex gap-2 items-center">
            <span>
              <Star size={20} className="fill-yellow-500 text-yellow-500" />
            </span>
            {item.rating}
          </p>

          <p>
            {item.inStock ? (
              <p className="text-green-400 font-semibold">Available</p>
            ) : (
              <p className="text-red-600">Unavailable</p>
            )}
          </p>

          {/* SIZE SECTION (UPDATED) */}
          <p className="flex items-center gap-2">
            Select your size :
            <select
              defaultValue="M"
              className="p-1 w-[60px] text-center rounded"
            >
              {["S", "M", "L", "XL"].map((sz) => (
                <option value={sz} key={sz}>
                  {sz}
                </option>
              ))}
            </select>
            <span>
              <Edit />
            </span>
          </p>

          {/* PRICE */}
          <h1 className="font-mono font-semibold text-3xl">
            Price : {item.price}
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-5">
            {["Add to cart", "Buy Now"].map((btnName) => {
              return (
                <button
                  key={btnName}
                  onClick={() => handleClick(btnName)}
                  className={`p-2 rounded hover:scale-110 transition duration-100 ${
  btnName === "Buy Now"
    ? "bg-black text-white"
    : btnName === "Add to Cart"
    ? "bg-blue-500"
    : "bg-green-500"
}`}
                >
                  {btnName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetail;
