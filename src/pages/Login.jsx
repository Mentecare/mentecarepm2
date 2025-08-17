import React, {useState} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email,setEmail] = useState("admin@mentecare.test");
  const [password,setPassword] = useState("ChangeMe123");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    }catch(err){
      alert("Login failed");
    }
  };

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><input value={password} type="password" onChange={e=>setPassword(e.target.value)} /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}