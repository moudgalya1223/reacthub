import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task from "./Task/Task";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tasks" element={<Task />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
