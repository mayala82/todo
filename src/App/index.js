import React from 'react';
import { AppUI } from '../AppUI/AppUI';

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

    const completedTodos = todos.filter(todo => !!todo.completed).length;
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

    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      !newTodos[todoIndex].completed ? newTodos[todoIndex].completed = true : newTodos[todoIndex].completed = false;
      setTodos(newTodos);
    };

    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1);
      setTodos(newTodos);
    }

    return (
      
      <AppUI totalTodos = {totalTodos}
            completedTodos = {completedTodos}
            searchedTodos = {searchedTodos}
            searchValue = {searchValue}            
            setSearchValue = {setSearchValue}
            completeTodos = {completeTodos}
            deleteTodo = {deleteTodo} 
      />
    );
}

export default App;
