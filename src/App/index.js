import React from 'react';
import { AppUI } from '../AppUI/AppUI';

// const defaulTodos = [
//   { text: 'Estudiar Teologia', completed: false},
//   { text: 'Estudiar React', completed: false},
//   { text: 'Estudiar Tailwind', completed: true},
//   { text: 'Estudiar AWS', completed: false},
//   { text: 'Estudiar Azure', completed: true}
// ];

function useLocalStorage(itemName, initialValue){ //Custom Hook
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
      const localStorageItem = localStorage.getItem(itemName); 
      let parsedItem;
      
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);

    }, 1000 );
  });
  

  

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

    return [
      item,
      saveItem
    ]
}

function App() {
   
    const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);  
    
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
      //setTodos(newTodos);
      saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex,1);
      //setTodos(newTodos);
      saveTodos(newTodos);
    }

    // React.useEffect( () => {
    //   console.log('use effect - Codigo de prueba');
    // }, [totalTodos]);

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
