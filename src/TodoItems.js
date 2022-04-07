import React from "react";

function TodoItems(props){
    let icon = "❌" ;

    if(props.completed)
    {
        icon = "✔️";
    }

    return (
        <li className="todo-items">
            <span className="mr-5">{icon}</span>
            <p className= {props.completed ? 'line-through italic' : ''}>{props.text}</p>
            <span></span>
        </li>
    );
}

export { TodoItems };