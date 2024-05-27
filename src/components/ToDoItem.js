import React from 'react'

function ToDoItem(props) {
    function handleDelete() {
        props.setTodos(props.todos.filter(item => item.id !== props.todo.id))
        localStorage.setItem("todo", JSON.stringify(props.todos))
    }
    // console.log(props)
    return (

        <div className="todoItem">
            <p className="task">{props.task}</p>
            <p className="dueDate">{props.todo.date}</p>
            <p className="priority">{props.todo.priority}</p>
            <button onClick={handleDelete} className="deleteBtn">X</button>
        </div>
    )
}

export default ToDoItem