import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItems } from '../TodoItems';
import {CreateTodoButton} from '../CreateTodoButton';

function AppUI({
  totalTodos,
    completedTodos,
    searchedTodos,
    searchValue,
    setSearchValue,
    completeTodos,
    deleteTodo
  }){
    return (
        <React.Fragment>
          <TodoCounter
              total={totalTodos}
              completed = {completedTodos}
          />
          <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
          {  <TodoList>
              {
                searchedTodos.map(todo => (
                  <TodoItems key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=>completeTodos(todo.text)} onDelete={()=>{deleteTodo(todo.text)}} />
                ))
              }            
            </TodoList> 
          } 
          <CreateTodoButton /> 
      </React.Fragment>
    );
}

export {AppUI};
