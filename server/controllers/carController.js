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

// router.get("/:id", async (req, res) => {
//   try {
//       const cart = await Cart.findById(req.params.id).lean().exec();
//       return res.status(200).send(cart);
//   } catch (err) {
//       return res.status(500).send({ message: err.message });
//   }
// });

module.exports = router;

