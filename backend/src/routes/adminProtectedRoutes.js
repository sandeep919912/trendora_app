const express = require("express");
const { adminAuth } = require("../middleware/adminAuth");

const adminProtectedRouter = express.Router();

const Users = require("../models/model")
const Queries = require('../models/queriesModel')
const Products = require("../models/productModel")

adminProtectedRouter.get("/admin/dashboard", adminAuth, async (req, res) => {
 try {
   const totalUsers = await Users.countDocuments()
   const totalQueries = await Queries.countDocuments()
   const totalProducts = await Products.countDocuments()
  
  res.status(200).json(
    {
      totalUsers:totalUsers,
      totalQueries:totalQueries,
      totalProducts:totalProducts
    }
  )
 } catch (error) {
  return res.send("error " , error)
 }
});

module.exports = adminProtectedRouter;
