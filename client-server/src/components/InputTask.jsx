import React, { useState } from "react";

const InputTask = () => {

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

  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const SubmitForm = async e => {
    e.preventDefault();
    try {
     const enter = { description, priority };
      await fetch("http://localhost:5043/todos", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(enter),
     });
     window.location = "/";
    } catch (err) {
     console.error(err.message);
    }
  }

  return (
    <>
     <div className="tas-input">
      <h1 className="text-center mt-5">Task Manager-App</h1>
      <form className="d-flex mt-5" onSubmit={SubmitForm}>
       <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
       <select value={ priority } onChange={e => setPriority(e.target.value)} required>
        <option value="" disabled hidden >choose the priority</option>
         {priorities.map((items) => (
          <option key={items.id} value={items.name}>{items.name}</option>
         ))}
       </select>
       <button className="btn btn-success">Add</button>
      </form>
     </div>
    </>
  );
}

export default InputTask;