import React from "react";
import InputTask from "./components/InputTask";
import ListAllTask from "./components/ListAllTask";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
    <div className="">
     <SideBar/>
      <div id="task-container" className="container">
        <InputTask />
        <ListAllTask/>
      </div>
    </div>
    </>
  );
}

export default App;
