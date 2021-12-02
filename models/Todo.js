const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
