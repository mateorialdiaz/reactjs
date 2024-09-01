
import { TodoProvider } from '../ToDoContext';
import { AppUI } from './AppUI';
import React from 'react';

//import { jsxDEV } from 'react/jsx-dev-runtime';



//const defaultTodos = [
 // {text: 'Cortar cebo', completed: true},
 // {text: 'Reacting . . . ', completed:false},
 // {text:'laugh', completed:false},
 // {text:'nunca pares de aprender', completed:true},
 // {text:'nunca pares ', completed:true},
//]; 


//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');




function App() {

  

return (
  <TodoProvider>
    <AppUI  />


  </TodoProvider>
   //  <AppUI
   // loading={loading}
     //error={error}
 //    completedTodos={completedTodos}
   //  totalTodos={totalTodos}
   //  searchValue={searchValue}
   //  setSearchValue={setSearchValue}
   //  searchedTodos={searchedTodos}
   //  completeTodo={completeTodo}
    // deleteTodo={deleteTodo}
     // />
);


 
}




export default App;   
