import React from "react";
import './css/tailwind.css';

function TodoSearch(){
    return (
        <div className="container mx-auto mt-4">
            <input className="todo-search" type="text" placeholder="Buscar TODOs" />
        </div>
        
    );
}

export { TodoSearch };