import React from "react";
// import { TASKS } from "../data";

function Task({category,text,deletedItem}) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() =>{deletedItem(text)}}>X</button>
    </div>
  );
}

export default Task;
