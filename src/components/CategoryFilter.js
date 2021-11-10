import React from "react";
import { useState } from "react";

function CategoryFilter({categories, filterCategory}) {

  const [isSelected, setIsSelected] = useState('All')

  function handleCategory(e){
    setIsSelected(e.target.value)
    filterCategory(e)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button onClick={handleCategory} className={category === isSelected ? "selected" : null} value={category} key={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
