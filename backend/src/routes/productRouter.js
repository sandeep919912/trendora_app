const express = require("express");
const Product = require("../models/productModel");

const productRouter = express.Router();

productRouter.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();  // ✅ Fetch all products from DB
    res.status(200).json(products);         // ✅ Send them as JSON response
  } catch (error) {
    console.error("Error while fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error });
  }
});


productRouter.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);

  } catch (error) {
    console.error("Error while fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});


productRouter.post("/products", async (req, res) => {
  try {
    // get data from request body
    const { name, brand } = req.body;

    // basic validation
    if (!name || !brand) {
      return res.status(400).json({ message: "Name and brand are required" });
    }

    // create a new product document
    const newProduct = new Product({ name, brand });

    // save to MongoDB
    await newProduct.save();

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("❌ Error creating product:", error);
    res.status(500).json({ message: "Error creating product", error });
  }
});

module.exports = productRouter;
