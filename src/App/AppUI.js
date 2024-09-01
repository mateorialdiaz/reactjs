import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDoLoading} from '../ToDoLoading';
import { ToDoError} from '../ToDoError';
import { EmptyToDo} from '../EmptyToDo';
import { CreateToDoButton } from '../CreateToDoButton';
import { TodoContext } from '../ToDoContext';
import {ToDoForm } from '../ToDoForm';
import { Modal } from '../Modal';
import React from 'react';





function AppUI(){
   const {loading, error, completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, } = React.useContext(TodoContext);


    
return (
    <>
      <ToDoCounter />
      <ToDoSearch/>

    
            <ToDoList>
         {loading && (
            <> 
             <ToDoLoading/> 
             <ToDoLoading/>  
             <ToDoLoading/>  
            </> 
        )}
        {error && <ToDoError/>}
        {(!loading && searchedTodos.length ===0 ) && < EmptyToDo /> }

        {searchedTodos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete = {() => deleteTodo(todo.text)} />
        ))}

      </ToDoList>     
         
      <CreateToDoButton setOpenModal={setOpenModal} />


      {openModal && (
        <Modal>
            <ToDoForm />

      </Modal>

      )}
    </>
  );
}

export {AppUI};