import React, { useEffect, useState } from "react";
import axios from "axios";

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const [error, setError] = useState(null);

    const API_BASE_URL = "http://127.0.0.1:8000/api/tasks";

    // Fetch completed tasks from API
    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/`);
                const completed = response.data.filter((task) => task.completed); // Filter completed tasks
                setCompletedTasks(completed);
            } catch (error) {
                console.error("Error fetching completed tasks:", error);
                setError("Failed to load completed tasks.");
            }
        };

        fetchCompletedTasks();
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Completed Tasks</h1>

            {error && <p style={styles.error}>{error}</p>}

            <ul style={styles.taskList}>
                {completedTasks.length > 0 ? (
                    completedTasks.map((task) => (
                        <li key={task.id} style={styles.completedTaskItem}>
                            {task.text}
                        </li>
                    ))
                ) : (
                    <p style={styles.noTasksMessage}>No completed tasks.</p>
                )}
            </ul>
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
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "20px",
    },
    error: {
        color: "red",
        textAlign: "center",
    },
    taskList: {
        listStyleType: "none",
        padding: 0,
    },
    completedTaskItem: {
        padding: "10px",
        backgroundColor: "#e8f5e9",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "10px",
        textDecoration: "line-through",
    },
    noTasksMessage: {
        textAlign: "center",
        color: "#757575",
        fontSize: "1rem",
        fontStyle: "italic",
    },
};

export default CompletedTasks;
