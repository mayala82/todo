import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';

import {CreateTodoButton} from './CreateTodoButton';

const defaulTodos = [
  { text: 'Estudiar Teologia', completed: false},
  { text: 'Estudiar React', completed: false},
  { text: 'Estudiar Tailwind', completed: true},
  { text: 'Estudiar AWS', completed: false},
  { text: 'Estudiar Azure', completed: true}
];

function App() {
    const [todos, setTodos] = React.useState(defaulTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const comnpletedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1){
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText =  searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }

    return (
      <React.Fragment>
          <TodoCounter
              total={totalTodos}
              completed = {comnpletedTodos}
          />
          <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
          {  <TodoList>
              {
                searchedTodos.map(todo => (
                  <TodoItems key={todo.text} text={todo.text} completed={todo.completed} />
                ))
              }            
            </TodoList> 
          } 
          <CreateTodoButton /> 
      </React.Fragment>
      
    );
}

export default App;
