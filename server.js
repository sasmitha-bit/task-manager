const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
  res.send("Task Manager API Running 🚀");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "Task added" });
});

app.delete("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json({ message: "Deleted" });
});

app.put("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks[index].completed = !tasks[index].completed;
  res.json({ message: "Updated" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});