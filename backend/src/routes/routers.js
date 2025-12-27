const express = require("express");
const router = express.Router();
const User = require("../models/model")
const { registerUser , loginUser } = require("../controllers/userCntrs");

router.post("/register", registerUser);
router.get("/register" , async (req, res) =>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
})

router.get("/register/:id" , async(req , res)=>{
  try {
    const {id} = req.params;

    if(!id){
      return res.json(404).json({message:"id missing"})
    }

    const currUser = await User.findById(id)

    if(!currUser){
      return res.status(404).json({message:"User not found"})
    }

    return res.status(200).json({message:"User fetched successfuly" , currUser : currUser})
  } catch (error) {
    return res.status(500).json({message:"internal server error"})
  }
})


router.patch("/user/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {number ,  address } = req.body;

    // Validate required fields (optional)
    if ( !number && !address) {
      return res.status(400).json({ message: "No data to update" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { number ,  address },
      { new: true } // ➜ returns updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);

  } catch (error) {
    res.status(500).json({
      message: "Unable to update profile",
      error: error.message,
    });
  }
});


router.post("/login" , loginUser)

// router.get("/api/users" , (req , res)=>{

// })

module.exports = router;
