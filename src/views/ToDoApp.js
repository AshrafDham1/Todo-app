import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
// import ToDoList from "../components/ToDoList";
import ToDoItem from "../components/ToDoItem";

function ToDoApp() {
    const tasks = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    const [todos, setTodos] = useState([tasks]);
    // function print(){
    //      console.log("props")
    // }
    return (
        <>
        <div className="container">
            <ToDoForm todos={todos} setTodos={setTodos} />
            <div>
                {todos.map(todo =>{
                    // console.log(todo);
                return (<ToDoItem todo={todo} setTodos={setTodos} todos={todos}/>)

                })}

            </div>
            </div>
        </>
    );
}

export default ToDoApp;
