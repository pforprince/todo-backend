const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/db");
db();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/todo", require("./routes/TodoRoutes"));

app.listen(PORT, () => console.log("App Running"));
