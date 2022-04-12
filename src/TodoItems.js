import React from "react";

function TodoItems(props){
     return (
        <li className="todo-items">
            <div className="w-full flex ">
                <div className="w-24">
                    <span className="mr-5" onClick={props.onComplete}>{props.completed ? "✔️" : "❌"}</span>
                </div>
                <div className="w-5/6">
                    <p className= {props.completed ? 'line-through italic text-left' : 'text-left'}>{props.text}</p>    
                </div>
                <div className="w-24">
                <button type="button" class="text-red-700 bg-white shadow-lg shadow-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-white dark:hover:bg-gray-400 dark:focus:ring-blue-800">
                <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </button> 
                </div>
                
                
                
            </div>
           
        </li>
    );
}



export { TodoItems };