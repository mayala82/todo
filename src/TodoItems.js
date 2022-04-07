import React from "react";

function TodoItems(props){
     return (
        <li className="todo-items">
            <span className="mr-5">{props.completed ? "✔️" : "❌"}</span>
            <p className= {props.completed ? 'line-through italic' : ''}>{props.text}</p>
            <span></span>
        </li>
    );
}

export { TodoItems };