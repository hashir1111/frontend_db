import React from 'react';

//Routing Pages
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

//Router Modules Router for routing, Switch for switching components related to routes, Link for routes linking
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;