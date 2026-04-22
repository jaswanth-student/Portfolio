import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <nav className="navbar">

        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Home
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Projects
        </NavLink>

      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </Router>
  );
}

export default App;