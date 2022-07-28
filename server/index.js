const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vishal123:vishal123@cluster0.vnv82sf.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected");
  }
);

app.post("/login", async (req, res) => {
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
      return res.status(500).send({ message: "data not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", async (req, res) => {
  const { Name, Email, Number, Password } = req.body;

  try {
    const user = await User.findOne({ Name: Name });
    if (!user) {
      const newUser = new User({ Name, Email, Number, Password });
      await newUser.save();
      return res.status(201).send({ message: "register succesfull" });
    } else {
      return res.status(500).send({ message: "user not exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Number: Number,
  Password: String,
});

const User = new mongoose.model("user", userSchema);

app.listen(8000, () => {
  console.log("Listening On Port 8000");
});
