require('dotenv').config();
const express = require("express");
const router = express.Router();
const { User } = require("../db/db");
const bcrypt = require("bcrypt");
const zod = require("zod");
const JWT_SEC = process.env.JWT_SECRET


const inputSchema = zod.object({
  username: zod.string().max(50),
  firstName: zod.string().max(12),
  lastName: zod.string().max(12),
  password: zod.string().max(12),
});

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

router.post("/signin")

module.exports = router;
