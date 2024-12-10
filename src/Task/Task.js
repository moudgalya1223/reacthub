import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);// here tasks is varaible , settasks function which updates the one.
  const [task, setTask] = useState("");// also usestate is the hook which helps to create a function
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [counter, setCounter] = useState(0); 
  //how to write a method or a function 
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id:counter, text: task }]);
      setTask("");
      console.log(setCounter)
    }
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingTaskId(null);
    setEditingText("");
  };

  return (
    <div style={styles.container}>
      <h2>Tasks</h2>
      <div style={styles.form}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>
          Add Task
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => saveEdit(task.id)} style={styles.button}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setEditingText(task.text);
                  }}
                  style={styles.button}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
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
};

export default Task;
