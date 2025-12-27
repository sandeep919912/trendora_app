const express = require("express");
const Query = require("../models/queriesModel.js");

const queryrouter = express.Router();

queryrouter.post("/api/query", async (req, res) => {
  try {
    const { name, email, query } = req.body;
    if (!name || !email || !query) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const queryItem = new Query({
      name,
      email,
      query,
    });

    await queryItem.save();

    return res.status(201).json({ message: "Query posted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


queryrouter.get("/api/query", async (req, res) => {
  try {
    const queries = await Query.find();

    return res.status(200).json({ queries }); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
})


module.exports = queryrouter;
