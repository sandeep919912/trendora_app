const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
  size: [String],
  image: String,
  description: String,
  inStock: Boolean,
  rating:Number,
  newarrival:Boolean
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
