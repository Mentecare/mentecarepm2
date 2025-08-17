import React, {useEffect, useState} from "react";
import api from "../services/api";

export default function Dashboard(){
  const [stats,setStats] = useState(null);
  useEffect(()=>{
    api.get("/appointments/stats").then(r=>setStats(r.data)).catch(()=>{});
  },[]);
  return <div style={{padding:20}}><h2>Dashboard</h2><pre>{JSON.stringify(stats,null,2)}</pre></div>
}