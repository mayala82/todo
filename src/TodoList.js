import React from "react";

function TodoList(props){
    return (
        <section className="todo-list container mx-auto mt-4">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };