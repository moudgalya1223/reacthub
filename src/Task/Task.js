import React, { useState, useEffect } from "react";
import axios from "axios";
import CompletedTasks from "../CompletedTasks/CompletedTasks";

const Task = () => {
    const [tasks, setTasks] = useState([]); 
    const [task, setTask] = useState(""); 
    const [completedTasks, setCompletedTasks] = useState([]); 

    const API_BASE_URL = "http://127.0.0.1:8000/api/tasks"; 

    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/`);
                const activeTasks = response.data.filter((task) => !task.completed);
                const completed = response.data.filter((task) => task.completed);

                setTasks(activeTasks);
                setCompletedTasks(completed);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    // Function to add a new task
    const handleAddTask = async () => {
        if (task.trim()) {
            try {
                const response = await axios.post(`${API_BASE_URL}/create/`, { text: task });
                setTasks((prev) => [...prev, response.data]);
                setTask(""); // Clear input
            } catch (error) {
                console.error("Error adding task:", error);
            }
        }
    };
    // const handleupdatetask=async()=>{
    //     if(task.trim()){
    //         try{
    //             const
    //         }
    //     }
    // }

    // Function to mark a task as completed
    const handleCompleteTask = async (id) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}/complete/`);
            const updatedTask = response.data;

            // Update state based on backend response
            setTasks((prev) => prev.filter((task) => task.id !== id));
            setCompletedTasks((prev) => [...prev, updatedTask]);
        } catch (error) {
            console.error("Error completing task:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Tasks</h2>

            {/* Input for adding new tasks */}
            <div style={styles.form}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                    style={styles.input}
                />
                <button onClick={handleAddTask} style={styles.addButton}>
                    Add Task
                </button>
            </div>

            {/* Active tasks list */}
            <h3 style={styles.subHeader}>Active Tasks</h3>
            <ul style={styles.taskList}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <li key={task.id} style={styles.taskItem}>
                            <span>{task.text}</span>
                            <button
                                onClick={() => handleCompleteTask(task.id)}
                                style={styles.completeButton}
                            >
                                Complete
                            </button>
                        </li>
                    ))
                ) : (
                    <p style={styles.noTasksMessage}>No active tasks.</p>
                )}
            </ul>

            {/* Completed tasks component */}
            {/* <CompletedTasks completedTasks={completedTasks} /> */}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
        fontSize: "1.8rem",
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    subHeader: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "10px",
    },
    form: {
        display: "flex",
        marginBottom: "20px",
        alignItems: "center",
    },
    input: {
        flex: "1",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginRight: "10px",
        fontSize: "1rem",
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "1rem",
    },
    taskList: {
        listStyleType: "none",
        padding: 0,
    },
    taskItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "10px",
    },
    completeButton: {
        padding: "8px 16px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "0.9rem",
    },
    noTasksMessage: {
        textAlign: "center",
        color: "#757575",
        fontSize: "1rem",
        fontStyle: "italic",
    },
};

export default Task;
