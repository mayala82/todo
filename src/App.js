import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';

import {CreateTodoButton} from './CreateTodoButton';

const todos = [
  { text: 'Estudiar Teologia', completed: false},
  { text: 'Estudiar React', completed: false},
  { text: 'Estudiar Tailwind', completed: false},
  { text: 'Estudiar AWS', completed: false},
  { text: 'Estudiar Azure', completed: false}
];

function App() {
    return (
      <React.Fragment>
          <TodoCounter />
          <TodoSearch />
          {  <TodoList>
              {
                todos.map(todo => (
                  <TodoItems key={todo.text} text={todo.text} />
                ))
              }            
            </TodoList> 
          } 
          <CreateTodoButton /> 
      </React.Fragment>
      
    );
}

export default App;
