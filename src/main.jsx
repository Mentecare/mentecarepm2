import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Professionals from "./pages/Professionals";
import api from "./services/api";
import "./styles.css";

function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:16, borderBottom:"1px solid #eee"}}>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/professionals">Professionals</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/professionals" element={<Professionals/>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App/>);