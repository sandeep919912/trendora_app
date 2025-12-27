const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/productModel") // adjust path if needed
const productData = require("./productData");

// ✅ Seed function
const seedProducts = async () => {
  try {
    // connect to DB
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is undefined. Check your .env file.");

    await mongoose.connect(uri);
    console.log("✅ Connected to Product DB");

    await Product.deleteMany();
    console.log("🗑️  Cleared old products");

    await Product.insertMany(productData);
    console.log("🌱 Sample products inserted successfully!");

    mongoose.connection.close();
    console.log("🔌 Connection closed");
  } catch (error) {
    console.error("❌ Error seeding products:", error.message);
    process.exit(1);
  }
};

seedProducts();
