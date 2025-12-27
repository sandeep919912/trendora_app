const express = require("express");
const Cart = require("../models/cart.model");

const cartRouter = express.Router();
cartRouter.post("/cart/add", async (req, res) => {
  try {
    const { userId, requireFields } = req.body;
    // const requireFields = req.body

    // console.log(requireFields.productId)

    // Edge Case 1: Missing userId
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    // console.log(productId , name , price)

    // Edge Case 2: Missing required fields
    if (!requireFields) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Edge Case 3: Invalid quantity
    if (requireFields.quantity !== undefined && requireFields.quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    const {productId, name , price , quantity , image} = requireFields
    // console.log(productId , name , price , quantity , image)

    // Check if product already exists in cart
    const existingItem = await Cart.findOne({ userId, productId });

    if (existingItem) {
      // Edge Case 4: If quantity is missing/corrupted in DB
      if (!existingItem.quantity || existingItem.quantity < 1) {
        existingItem.quantity = 1;
      }

      existingItem.quantity += 1;

      await existingItem.save();

      return res.status(200).json({
        message: "Product quantity updated",
        item: existingItem,
      });
    }

    // Create new item (Edge Case 5: Force safe quantity)
    const newItem = new Cart({
      userId,
      productId,
      name,
      price: Number(price), // Edge Case 6: Convert price string → number
      image: image || "",
      quantity: quantity || 1,
    });

    await newItem.save();

    return res.status(201).json({
      message: "Item added to cart",
      item: newItem,
    });
  } catch (error) {
    console.error("Cart error:", error);

    // Edge Case 7: Database or unknown error
    res.status(500).json({
      error: "Internal server error. Could not add item to cart.",
    });
  }
});

cartRouter.get("/cart/get/:userId", async (req, res) => {
  try {
    const {userId} = req.params;

    if(!userId){
      res.status(401).send("unauthorised user")
    }
    const userCart = await Cart.find({ userId });

    res.status(200).json(userCart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

cartRouter.delete("/cart/:id/:userId", async (req, res) => {
  try {
    const { id , userId } = req.params;

    const item = await Cart.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await Cart.deleteOne({ _id: id , userId:userId});

    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error while deleting:", error);
    return res.status(500).json({ message: "Error deleting item" });
  }
});

module.exports = cartRouter;
