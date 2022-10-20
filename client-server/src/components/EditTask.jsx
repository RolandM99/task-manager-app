import React, { useState } from "react";

const EditTask = ({ task }) => {

 const priorities = [
  {
   id: 1,
   name: 'Low',
  },
  {
   id: 2,
   name: 'Medium',
  },
  {
   id: 3,
   name: 'High',
  },
 ];

 // Function to update a task
  const updateTask = async (e) => {
    e.preventDefault();
    try {
      const edit = { description, priority };
       await fetch(`http://localhost:5043/todos/${task.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(edit),
      })

      window.location = "/";
    } catch (err) {
     console.error(err.message);
    }
  }

  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
 
 return (
 <>
    <div>
      <i className="fa-regular fa-pen-to-square text-blue-one" data-toggle="modal" data-target={`#id${task.todo_id}`}></i>
      <div className="modal" onClick={() => setDescription(task.description)} id={`id${task.todo_id}`} >
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h4 className="modal-title">Update Task</h4>
             <button type="button" className="close" data-dismiss="modal" 
             onClick={() => setDescription(task.description)}>&times;
             </button>
           </div>
           <div className="modal-body">
             <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control"/>
              <select value={ priority } onChange={e => setPriority(e.target.value)} required>
            <option value="" disabled hidden >choose the priority</option>
             {priorities.map((items) => (
              <option key={items.id} value={items.name}>{items.name}</option>
             ))}
           </select>
          </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-warning" 
              data-dismiss="modal"
              onClick={e => updateTask(e)}
              >
              Update
             </button>
             <button type="button"
             className="btn btn-danger"
             onClick={() => setDescription(task.description)}
             data-dismiss="modal">Close</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </>
 )
};

export default EditTask;