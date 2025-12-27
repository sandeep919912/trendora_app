const express = require("express");
const Order = require("../models/orderCheckout.model.js");

const Orderrouter = express.Router();

/**
 * @route   POST /api/orders
 * @desc    Place order (Buy Now / Checkout)
 */
Orderrouter.post("/api/orders", async (req, res) => {
  try {
    const { items, totalAmount, address, paymentMode } = req.body;

    
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    if (!address) {
      return res.status(400).json({ message: "Address is required" });
    }

    const order = await Order.create({
      items,
      totalAmount,
      address,
      paymentMode,
      paymentStatus: paymentMode === "COD" ? "PENDING" : "PAID",
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Order Error:", error);
    return res.status(500).json({
      success: false,
      message: "Order placement failed",
    });
  }
});

// GET all orders
Orderrouter.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = Orderrouter;
