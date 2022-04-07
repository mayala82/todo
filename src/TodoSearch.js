import React from "react";
import './css/tailwind.css';

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className="container mx-auto mt-4">
            <input className="todo-search" type="text" placeholder="Buscar TODOs" value={searchValue} onChange={onSearchValueChange} />            
        </div>
        
    );
}

export { TodoSearch };