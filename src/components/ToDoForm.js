import React, { useState } from "react";


function ToDoForm(props) {
    // const allTodo = JSON.parse(localStorage.getItem("todo")) || [];

    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [priority, setPriority] = useState("low")

    function handleSubmit(e) {
        e.preventDefault();

        // props.print()
        // setTask(e.target.text.value)
        // setDate(e.target.date.value)
        // setPriority(e.target.Priority.value)
        let todo = {
            id: Date.now(),
            text: task,
            date: date,
            priority: priority
        }
        // allTodo.push(todo);

        const newTodos = [...props.todos, todo];
        props.setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    return (
        <form onSubmit={handleSubmit} className="todoForm">
            <div className="formGroup">
                <input type="text" placeholder="What do you want to do next?" className="textInput" name="text" onChange={(e) => { setTask(e.target.value) }} />
            </div>
            <div className="formGroup">
                <label htmlFor="date">Due on:</label>
                <input type="date" placeholder="Select Date" className="dateInput" name="date" onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div className="formGroup">
                <label htmlFor="Priority">Priority:</label>
                <select name="Priority" id="Priority" className="prioritySelect" onChange={(e) => { setPriority(e.target.value) }}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <input type="submit" value="Submit" className="submitBtn" />
        </form>
    )
}

export default ToDoForm;