
const dotenv = require('dotenv');
// const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn")

const User = require("./model/useSchema")

// const DB = process.env.DATABASE;
const PORT = process.env.PORT;


//Middelware
const middleware = (req, res, next) => {
    console.log("hello middelware");
    next();
}
// middleware();


app.get("/", (req, res) => {
    res.send("hello world from server");
});

app.get("/about", middleware, (req, res) => {
    console.log("hello mid");
    res.send("hello world about");
});

app.get("/contact", (req, res) => {
    res.send("hello world contact");
});

app.get("/register", (req, res) => {
    res.send("register");
});
app.get("/login", (req, res) => {
    res.send("login");
});



app.listen(5000, () => {
    console.log(`server is running at ${PORT}`);
})