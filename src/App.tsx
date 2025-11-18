import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import './styles/main.css';
import users from "./data/user";
import policies from "./data/policy";
import { useState } from "react";
import type User from "./types/user";
import type Policy from "./types/policy";

function App() {
  const [allUsers, setAllUsers] = useState<User[]>(users);
  const [allPolicies, setAllPolicies] = useState<Policy[]>(policies);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard allUsers={allUsers} allPolicies={allPolicies}/>} />
        <Route path="/users" element={<Users allUsers={allUsers} setAllUsers={setAllUsers}/>} />
        <Route path="/policies" element={<Policies allPolicies={allPolicies} setPolicies={setAllPolicies}/>} />
      </Routes>
    </Router>
  );
}

export default App;
