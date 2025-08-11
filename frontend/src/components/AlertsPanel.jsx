import React from "react";

export default function AlertsPanel({ alerts = [] }){
  if(!alerts.length) return <div style={{color:'var(--muted)'}}>No alerts yet.</div>;
  return (
    <>
      {alerts.map((a,i)=>(
        <div className="alert-item" key={i}>
          <div style={{fontWeight:700, color:'#fff'}}>{a.text}</div>
          <div style={{fontSize:12, color:'var(--muted)'}}>{new Date(a.ts).toLocaleString()}</div>
        </div>
      ))}
    </>
  );
}
