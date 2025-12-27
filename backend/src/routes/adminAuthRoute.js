const express = require("express");
const adminModel = require("../models/adminAuthModel");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const adminAuthRouter = express.Router();

adminAuthRouter.post("/admin/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send("invalid required field");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const existingAdmin = await adminModel.findOne({ email });

    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exist" });
    }

    const registeredAdmin = new adminModel({
      email,
      password: hashPassword,
    });

    await registeredAdmin.save();

    return res.status(201).json({
      message: "Admin Register Successfully",
      registeredAdmin: registeredAdmin,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

adminAuthRouter.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if ((!email || !password)) {
      return res.send("All Field Required");
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);


    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials"});
    }

    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET, // ✅ now works
      { expiresIn: "1d" }
    );

    

    return res.status(200).json({ message: "Admin login successfully" , token: token} );

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
});

module.exports = adminAuthRouter;
