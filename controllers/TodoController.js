const e = require("express");
const Todo = require("../models/Todo");

const saveTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    const savedTodo = await todo.save();
    if (savedTodo) {
      return res.status(201).json({ message: "Success", data: [savedTodo] });
    } else
      res.status(400).json({
        message: "Todo not saved, try again after sometime",
        data: [],
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", data: [], error: error });
  }
};
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(400).json({
      message: "Success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", data: [], error: error });
  }
};
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo)
      return res.status(200).json({
        message: "Success",
        data: [todo],
      });
    else
      res.status(404).json({
        message: "Todo not found",
        data: [],
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", data: [], error: error });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      const deletedTodo = await Todo.deleteOne(todo);
      return res.status(200).json({
        message: "Success",
        data: [deletedTodo],
      });
    } else
      res.status(404).json({
        message: "Todo not found",
        data: [],
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", data: [], error: error });
  }
};
const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      if (title && description) {
        todo.title = title;
        todo.description = description;
        const updatedTodo = await todo.save();
        return res.status(200).json({
          message: "Success",
          data: [updatedTodo],
        });
      } else {
        res.status(404).json({
          message: "Title and Description both are required",
          data: [],
        });
      }
    } else
      res.status(404).json({
        message: "Todo not found",
        data: [],
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong", data: [], error: error });
  }
};

module.exports = { saveTodo, deleteTodo, getAllTodos, getTodoById, updateTodo };
