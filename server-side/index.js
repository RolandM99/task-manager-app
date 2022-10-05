const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

/* create task */

app.post("/todos", async(req,res) => {
  try {
    const { description, priority } = req.body;
    const newTodo = await pool.query(
     "INSERT INTO todo (description, priority) VALUES($1, $2) RETURNING *", [description, priority]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

/* get all tasks */
app.get("/todos", async(req,res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM todo");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* get a task */
app.get("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
/* update a task */
app.put("/todos/:id", async(req, res) => {
 try {
   const { id } = req.params;
   const { description, priority } = req.body;
   const updateTask = await pool.query("UPDATE todo SET description = $1, priority = $2 WHERE todo_id = $3", 
   [description, priority, id]);
   res.json("task was updated");
 } catch (err) {
   console.error(err.message);
 }
})
/* delete a task */
app.delete("/todos/:id", async(req, res) => {
  try {
   const { id } = req.params;
   const deleteTask = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
   res.json("task was deleted!");
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5043, (err) => {
  if (err) console.log("Error in server setup")
  console.log("server has started on port 5043")
});