import { useEffect, useState } from "react";
import axios from "axios";
import CartBox from "../Re-Usable-Components/CartBox";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("user"))?.id;
      if (!userId) return;

      const res = await axios.get(
        `http://localhost:5000/cart/get/${userId}`
      );
      setData(res.data || []);
    } catch (error) {
      console.log("Frontend error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 card shadow-md rounded p-5">
          <h1 className="font-semibold text-2xl mb-4">
            Cart Store
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : data.length === 0 ? (
            <div className="flex flex-col items-center py-10">
              <img
                className="h-32 mb-4"
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png"
                alt="Empty cart"
              />
              <p className="text-gray-500">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {data.map((item) => (
                <CartBox key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* SUMMARY */}
        <div className="card shadow-md rounded p-5 h-fit">
          <h1 className="font-semibold text-2xl mb-3">
            Order Summary
          </h1>

          <p className="text-gray-600 mb-2">
            Number of Items: {data.length}
          </p>

          <hr className="my-3" />

          <div className="flex justify-between items-center mb-5">
            <span className="font-semibold text-lg">
              Total
            </span>
            <span className="text-2xl font-bold">
              ₹ {totalPrice}
            </span>
          </div>

          <button
            disabled={data.length === 0}
            className="
              w-full
              py-3
              rounded
              bg-black
              text-white
              font-semibold
              hover:opacity-90
              disabled:opacity-50
            "
          >
            Buy All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
