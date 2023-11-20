import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/Home" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;