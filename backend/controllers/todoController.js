const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

//GET all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

//GET one todo
const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Does not exist" });
  }
  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({
      error: "Does not exist",
    });
  }
  res.status(200).json(todo);
};

//POST one todo
const createTodo = async (req, res) => {
  const { title, status } = req.body;
  try {
    const todo = await Todo.create({ title, status });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//DELETE one todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Does not exist" });
  }

  const todo = await Todo.findByIdAndDelete({ _id: id });

  if (!todo) {
    return res.status(404).json({
      error: "Does not exist",
    });
  }

  res.status(200).json(todo);
};

//PATCH one todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Does not exist" });
  }

  const todo = await Todo.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(todo);
};
module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
