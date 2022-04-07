import React from "react";
import './css/tailwind.css';

function TodoCounter({total, completed}){

    return (
        <div className="container mx-auto mb-4 bg-gray-100">
            <h2 className="counter-text" >Has completado {completed} de {total} TODO's</h2>
        </div>
        
    );
}

export { TodoCounter };