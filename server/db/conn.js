const mongoose = require("mongoose");

// dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})