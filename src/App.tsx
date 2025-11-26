import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Users from "./pages/Users";
import Policies from "./pages/Policies";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppContext";
import './styles/main.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
