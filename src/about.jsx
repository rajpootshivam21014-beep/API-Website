
import React, { useState } from "react";
import "./Home.css";

const About = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() === "") return;

        setTodos([...todos, task]);
        setTask("");
    };

    const dlt = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <div className="todo-page">

                <div className="todo-box">

                    <div className="todo-header">
                        <span className="badge">MY TASKS</span>
                        <h1>Todo <span>List</span></h1>
                        <p>Manage your daily tasks with style.</p>
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter your task..."
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    addTodo();
                                }
                            }}
                        />

                        <button onClick={addTodo} className="add-btn">
                            + Add Task
                        </button>
                    </div>

                    <div className="task-count">
                        <span>YOUR TASKS</span>
                        <strong>{todos.length}</strong>
                    </div>

                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li key={index} className="todo-item">

                                <div className="task-content">
                                    <span className="task-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="task-text">
                                        {todo}
                                    </span>
                                </div>

                                <button
                                    onClick={() => dlt(index)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>

                            </li>
                        ))}
                    </ul>

                    {todos.length === 0 && (
                        <div className="empty">
                            <div className="empty-icon">✓</div>
                            <h3>No tasks yet</h3>
                            <p>Add your first task above.</p>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

export default About;
