import React, {useEffect, useState} from "react";
import api from "../services/api";
export default function Professionals(){
  const [list,setList] = useState([]);
  useEffect(()=>{
    api.get("/professionals/").then(r=>setList(r.data)).catch(err=>{ console.error(err); });
  },[]);
  return <div style={{padding:20}}><h2>Professionals</h2><ul>{list.map(p=>(<li key={p.id}>{p.name} - {p.specialty}</li>))}</ul></div>
}