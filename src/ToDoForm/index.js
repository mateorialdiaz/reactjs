import React from "react";
import './ToDoForm.css';
import { TodoContext } from "../ToDoContext";

function ToDoForm(){
  const {addTodo,
    setOpenModal, 
  } = React.useContext(TodoContext);

  const [newTodoValue ,setNewTodoValue] = React.useState('');

  const onCancel = () => {
    setOpenModal(false);};

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};

    const onChange = (event) => { setNewTodoValue(event.target.value);
        };

    return(
        <form onSubmit={ onSubmit}>
            <label>
                Nuevo Item 
            </label>
            <textarea placeholder="nashe.com ! " value={newTodoValue} onChange={onChange}/>
            <div className="ToDoForm-buttonContainer">
             
             <button type="button" className="ToDoForm-button ToDoForm-button--cancel" onClick={onCancel}>  Cancel </button>
             <button type="submit" className="ToDoForm-button ToDoForm-button--add"> Agregar </button>
            </div>
        </form>
    );
}

export {ToDoForm};