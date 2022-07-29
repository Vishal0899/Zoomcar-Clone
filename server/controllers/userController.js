const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
require("../config/conn")

router.post("/login", async (req, res) => {
  const { Number, Password } = req.body;
  try {
    const user = await User.findOne({ Number: Number });
    // console.log(user);
    if (user) {
      if (Number == user.Number) {
        if (Password == user.Password) {
          return res
            .status(201)
            .send({ message: "Login successful", user: user });
        } else {
          return res.status(500).send({ message: "Password not matched" });
        }
      } else {
        return res
          .status(500)
          .send({ message: "User doen't Exist with this number" });
      }
    } else {
      return res.status(500).send({ message: "Data not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  const { Name, Email, Number, Password } = req.body;

  try {
    const user = await User.findOne({ Number: Number, Email: Email });
    if (!user) {
      const newUser = new User({ Name, Email, Number, Password });
      await newUser.save();
      return res.status(201).send({ message: "Register succesfull" });
    } else {
      return res.status(500).send({ message: "User already exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
