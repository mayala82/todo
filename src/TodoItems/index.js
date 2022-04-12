import React from "react";

function TodoItems(props){
     return (
        <li className="todo-items">
            <div className="w-full flex ">
                <div className="w-24">
                    <span className="mr-5" onClick={props.onComplete}>{props.completed ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>}
                    </span>
                </div>
                <div className="w-5/6">
                    <p className= {props.completed ? 'line-through italic text-left' : 'text-left'}>{props.text}</p>    
                </div>
                <div className="w-24">
                    <button type="button" onClick={props.onDelete} className="text-red-700 bg-white shadow-lg shadow-slate-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-white dark:hover:bg-gray-400 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    </button> 
                </div>
            </div>
        </li>
    );
}



export { TodoItems };