const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cars = require("./controllers/carController");

const app = express();

require("./config/conn.js");

app.use(express.json());
app.use(cors());

app.use("/cars", Cars);
app.use(require("./controllers/userController.js"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Listening On Port 8000");
});
