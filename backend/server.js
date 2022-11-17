require("dotenv").config();

const express = require("express");

//app
const app = express();

//route
app.get("/", (req, res) => {
  res.json({
    user: "John Doe",
    age: 16,
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening to port", process.env.PORT);
});
