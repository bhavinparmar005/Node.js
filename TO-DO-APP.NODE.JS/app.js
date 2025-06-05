const PORT = 3632;
const path = require("path");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "/Assets")));
app.use(express.urlencoded({ extended: true }));

let todo = [];

app.get("/", (req, res) => {
  const todolength = todo.length;
  res.render("home", { todo: todo, todolength });
});

app.post("/addTodo", (req, res) => {
  const { task } = req.body;
  const newTodo = {
    task: task,
    id: Date.now(),
  };
  todo.push(newTodo);
  res.redirect("/");
});

app.get("/editTodo/:id", (req, res) => {
  const id = req.params.id;
  const todolength = todo.length;
  let oldData = todo.find((val) => val.id == id);

  res.render("home", { todo: todo, todolength, oldData: oldData });
});

app.post("/editTodo/:id", (req, res) => {
  const editid = req.params.id;
  const { task } = req.body;

  let updateTodo = todo.find((val) => val.id == editid);

  updateTodo.task = task;

  res.redirect("/");
});

app.get("/deleteTodo/:id", (req, res) => {
  const id = req.params.id;

  const deleteTodo = todo.filter((val) => val.id != id);

  todo = deleteTodo;

  res.redirect("/");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(`server star in PORT ${PORT}`);
});
