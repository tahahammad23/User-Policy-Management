import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </Router>
  );
}

export default App;
