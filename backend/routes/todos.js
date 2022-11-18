const express = require("express");
const Todo = require("../models/todoModel");
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");
const router = express.Router();

//GET all todos
router.get("/", getTodos);

//GET one todo
router.get("/:id", getTodo);

//POST one todo
router.post("/", createTodo);

//DELETE one todo
router.delete("/:id", deleteTodo);

//PATCH one todo
router.patch("/:id", updateTodo);

module.exports = router;
