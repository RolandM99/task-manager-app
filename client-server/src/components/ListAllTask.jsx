import React, { useEffect, useState } from "react";
import EditTask from "./EditTask";

const ListAllTask = () => {
  const [tasks, setTask] = useState([]);

  // function to delete a task
  const deleteTask = async (id) => {
    try {
       await fetch(`http://localhost:5043/todos/${id}`, {
        method: "DELETE"
      });
      setTask(tasks.filter(task => task.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  // get the list of all task created
  const getTasks = async () => {
    try {
      const response = fetch("http://localhost:5043/todos");
      const data = await (await response).json();

      setTask(data);
    } catch (err) {
      console.error(err.message);
    }
  }
// sending a fetch request to the API every time this component is rendering
  useEffect(() => {
    getTasks();
  }, []);
  // console.log(tasks);
  return (
   <>
    <div className="container">
    <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Priority</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {/*  <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>*/}
    {tasks.map(task => (
      <tr key={task.todo_id}>
        <td>{task.description}</td>
        <td>{task.priority}</td>
        <td><EditTask task = {task}/></td>
        <td><i className="fa-regular fa-trash-can text-red-one" onClick={() => deleteTask(task.todo_id)}></i></td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
   </>
  )
};

export default ListAllTask;