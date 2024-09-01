import React from 'react';
import { TodoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <h1 className="ToDoCounter">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export { ToDoCounter };
