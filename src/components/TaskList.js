import React from "react";
import Task from "./Task";
// import { useState } from "react";


function TaskList({tasks, onDelete}) {

  return (
    <div className="tasks">
      {tasks.map(task => (<Task text={task.text} category={task.category} key={task.text + task.category} onDelete={onDelete}/>))}
    </div>
  );
}

export default TaskList;
