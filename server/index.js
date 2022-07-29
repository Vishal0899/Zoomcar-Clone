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

app.listen(8000, () => {
  console.log("Listening On Port 8000");
});
