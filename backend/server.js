require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");
const usersRoutes = require("./routes/users");

//app
const app = express();

//middleware
app.use(express.json());

//route
app.use("/todos", todosRoutes);
app.use("/users", usersRoutes);

//db
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
