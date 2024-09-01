import React from 'react';
import { TodoContext } from '../ToDoContext';
import './ToDoSearch.css';

function ToDoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
    

    return (
      <input placeholder="react boy"  className="ToDoSearch"
        value={searchValue}
        onChange={ (event) => {
          setSearchValue(event.target.value);
          
        }}
      />
  
    );
  }

  export { ToDoSearch };