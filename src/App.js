import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Task from "./Task";
import CompletedTasks from "./CompletedTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Pass tasks and handlers to Task */}
        <Route
          path="/tasks"
          element={
            <Task
              tasks={tasks}
              setTasks={setTasks}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          }
        />
        {/* Pass completedTasks to CompletedTasks */}
        <Route
          path="/completed-tasks"
          element={<CompletedTasks completedTasks={completedTasks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
