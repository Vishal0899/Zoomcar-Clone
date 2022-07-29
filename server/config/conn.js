const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vishal123:vishal123@cluster0.vnv82sf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
// () => {
//   console.log("DB Connected");
// }
