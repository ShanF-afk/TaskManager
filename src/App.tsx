import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import TaskManager from "./TaskManager"; // Renamed original App to TaskManager

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/tasks" />} />
        <Route path="/tasks" element={isAuthenticated ? <TaskManager /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
