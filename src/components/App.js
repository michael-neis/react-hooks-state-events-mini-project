import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [taskListArray, setTaskListArray] = useState(TASKS)
  const [arrayToShow, setArrayToShow] = useState(taskListArray)
  const [currentCategory, setCurrentCategory] = useState('All')
  


  function onDelete(task){
    const newShowArray = arrayToShow.filter(taskObj => taskObj.text !== task)
    const newTaskListArray = taskListArray.filter(taskObj => taskObj.text !== task)
    setArrayToShow(newShowArray)
    setTaskListArray(newTaskListArray)
  }


  function filterCategory(e){
    const selectedCategory = e.target.value
    setCurrentCategory(selectedCategory)
    const updatedtaskListArray = taskListArray.filter(task => {
      if(selectedCategory === "All") return true;
      return task.category === selectedCategory
    })
    setArrayToShow(updatedtaskListArray)
  }

  function onTaskFormSubmit(dataObj){
    const newListArray = [dataObj, ...taskListArray]
    const newArrayToShow = [dataObj, ...arrayToShow]
    setTaskListArray(newListArray)
    if (currentCategory === 'All') {
      setArrayToShow(newArrayToShow)
    } else if (dataObj.category === currentCategory){
      setArrayToShow(newArrayToShow)
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterCategory={filterCategory} categories = {CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit = {onTaskFormSubmit} categories = {CATEGORIES}/>
      <TaskList onDelete={onDelete} tasks={arrayToShow}/>
    </div>
  );
}

export default App;
