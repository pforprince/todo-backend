const {
  getAllTodos,
  saveTodo,
  getTodoById,
  deleteTodo,
  updateTodo,
} = require("../controllers/TodoController");

const router = require("express").Router();

router.route("/").post(saveTodo);
router.route("/all").get(getAllTodos);
router.route("/:id").get(getTodoById).delete(deleteTodo).put(updateTodo);

module.exports = router;
