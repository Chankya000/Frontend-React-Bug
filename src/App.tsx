import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import Admin from "./pages/Admin";
import Form from "./pages/Form";
function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
