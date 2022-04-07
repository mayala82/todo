import React from "react";

function TodoItems(props){
    return (
        <li>
            <span>✔️</span>
            <p>{props.text}</p>
            <span>❌</span>
        </li>
    );
}

export { TodoItems };