require('dotenv').config();
const express = require("express");
const router = express.Router();
const { User } = require("../db/db");
const bcrypt = require("bcrypt");
const zod = require("zod");
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken")


const inputSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const loginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

router.post("/signup", async function (req, res) {
  const { username, password, firstName, lastName } = req.body;
  try {
    const inputValidation = inputSchema.safeParse({
      username,
      password,
      firstName,
      lastName,
    });

    if (!inputValidation.success) {
      return res.status(400).json({
        message: "Invalid Input Credentials",
      });
    }
    const existingUser = await User.findOne({
      username,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      firstName,
      lastName,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "user created",
      user: newUser,
    });
  } catch (error) {
    console.log("Error Occurred", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin" , async function (req,res) {
    const {username,password} = req.body;

    try{
        const inputValidation = loginSchema.safeParse({
            username,
            password
        });
    
        if(!inputValidation.success){
            return res.status(401).json({
                message:"Invalid Inputs"
            });
        }
    
        const user = await User.findOne({
            username
        });
    
        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }

        const isMatch =  bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Credentials"
            });
        }

        const token =  jwt.sign({userId:user._id,},JWT_SECRET);

        res.json({
            message:"User logged in Succesfully",
            token,
        });

    }catch(error){
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
    
})

module.exports = router;
