import React from "react";
import './css/tailwind.css';

function TodoCounter(){
    return (
        <div className="container mx-auto mb-4 bg-gray-100">
            <h2 className="counter-text" >Has completado 2 de 3 TODOs</h2>
        </div>
        
    );
}

export { TodoCounter };