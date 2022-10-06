import React from "react";
import './App.css';
import InputTask from "./components/InputTask";
import ListAllTask from "./components/ListAllTask";

function App() {
  return (
    <>
      <div className="container">
        <InputTask />
        <ListAllTask/>
      </div>
    </>
  );
}

export default App;
