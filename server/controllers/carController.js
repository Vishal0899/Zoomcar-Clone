const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Cars = require("../models/carsSchema");

router.get("", async (req, res) => {
  try {
    const data = await Cars.find();
    return res.status(201).send({ data: data });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});


module.exports = router;

