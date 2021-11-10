import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  function textChange(e){
    setFormData({...formData, text: e.target.value})
  }

  function catChange(e){
    setFormData({...formData, category: e.target.value})
  }

  const namedCategories = categories.map(categoryName => categoryName === "All" ? null : <option key= {categoryName} value={categoryName}>{categoryName}</option>)

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text:'',
      category: 'Code'
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={textChange} type="text" name="text" value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={catChange} value={formData.category}>
          {namedCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
