const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name : {
            type:"string",
            required:true
        },
        email:{
            type:"string",
            required:true
        },
        password:{
            type:"string",
            required:true
        },
        number:{
            type:"string"
        },
        address:{
            type:"string"
        }
    }
)

const newUser = mongoose.model("users" , userSchema)
module.exports = newUser