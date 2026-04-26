
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage
let tasks = [];

// Home route
app.get("/", (req, res) => {
  res.send("Task Manager API Running 🚀");
});

// CREATE TASK
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.send("Task added successfully");
});

// VIEW TASKS
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// DELETE TASK
app.delete("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.send("Task deleted");
});

// UPDATE TASK (Toggle completed)
app.put("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks[index].completed = !tasks[index].completed;
  res.json({ message: "Task updated" });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});