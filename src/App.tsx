import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import './styles/main.css';
import users from "./data/user";
import policies from "./data/policy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users usersData={users}/>} />
        <Route path="/policies" element={<Policies policyData={policies}/>} />
      </Routes>
    </Router>
  );
}

export default App;
