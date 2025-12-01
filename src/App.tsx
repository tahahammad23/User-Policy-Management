import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import './styles/main.css';
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function App() {
  const allUsers = useSelector((state: RootState) => state.users.allUsers);
  const allPolicies = useSelector((state: RootState) => state.policies.allPolicies);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users allUsers={allUsers} />} />
        <Route path="/policies" element={<Policies allPolicies={allPolicies} />} />
      </Routes>
    </Router>
  );
}

export default App;
