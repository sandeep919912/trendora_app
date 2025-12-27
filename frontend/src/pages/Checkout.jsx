import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentMode , setPaymentMode] = useState("COD")
  const [orderPlaced , setOrderPlaced] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem("buyNowItem");
    if (!data) {
      navigate("/");
      return;
    }
    setItem(JSON.parse(data));
  }, [navigate]);

  if (!item) {
    return <h1 className="text-center mt-20">Loading checkout...</h1>;
  }

  const totalPrice = item.price * item.qty;

  const placeOrder = async () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    try {
      setLoading(true);

      // 🔹 MOCK API (replace later)
      await axios.post("http://localhost:5000/api/orders", {
        items: [item],
        totalAmount: totalPrice,
        address,
        paymentMode: "COD",
      });

      localStorage.removeItem("buyNowItem");
      // alert("Order placed successfully 🎉");
      setOrderPlaced(true)
      // navigate("/");
    } catch (error) {
      console.error("Order failed", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 if (orderPlaced) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        
        <div className="text-green-500 text-5xl mb-4">✓</div>

        <h1 className="text-2xl font-bold mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be
          delivered soon.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/orders")}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            View My Orders
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full border py-3 rounded-lg hover:bg-gray-100"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

  
  return (
    <div className="min-h-screen container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="border rounded p-4 space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Size: {item.size}</p>
                <p>Qty: {item.qty}</p>
                <p className="font-semibold mt-2">₹ {item.price}</p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹ {totalPrice}</span>
            </div>
          </div>

          {/* Address */}
          <div className="border rounded p-4 space-y-4">
            <h2 className="text-xl font-semibold">Delivery Address</h2>

            <textarea
              rows="5"
              className="w-full border p-2 rounded"
              placeholder="Enter full delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT SIDE - PAYMENT */}
        <div className="border rounded p-4 space-y-6">
          <h2 className="text-xl font-semibold">Payment Methods</h2>

          {/* COD */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={paymentMode === "COD"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Cash on Delivery
          </label>

          {/* UPI */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={paymentMode === "UPI"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            UPI (Google Pay / PhonePe)
          </label>

          {/* Card */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="CARD"
              checked={paymentMode === "CARD"}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            Debit / Credit Card
          </label>

          <button
            onClick={placeOrder}
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded hover:opacity-90"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
