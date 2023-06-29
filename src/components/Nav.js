import React, { useState } from 'react'
import '../Nav.css'
export default function Nav({cmes}) {
    const [light, setlight] =useState(1)
    
    const goNav = (x)=>{
        document.getElementById('nav').scrollLeft = x;
      }
    
  return (
   
<div id="nav" className="menu">
  
    <a  onClick={()=>{ goNav(0); setlight(1); cmes(1) }} className={`p-4 ${light == 1 ? "h4" : "h6"}`} aria-current="page" href="#">Enero</a>
  
  
    <a onClick={()=>{ goNav(0); setlight(2); cmes(2) }} className={`p-4 ${light == 2 ? "h4" : "h6"}`}  href="#">Febrero</a>
  
  
    <a onClick={()=>{ goNav(100); setlight(3); cmes(3)}} className={`p-4 ${light == 3 ? "h4" : "h6"}`} href="#">Marzo</a>
  
  
    <a onClick={()=>{ goNav(200); setlight(4); cmes(4)}} className={`p-4 ${light == 4 ? "h4" : "h6"}`}>Abril</a>
  
    <a onClick={()=>{ goNav(300); setlight(5); cmes(5)}} className={`p-4 ${light == 5 ? "h4" : "h6"}`}>Mayo</a>
  
  
    <a onClick={()=>{ goNav(400); setlight(6); cmes(6)}} className={`p-4 ${light == 6 ? "h4" : "h6"}`}>Junio</a>
  
    <a onClick={()=>{ goNav(500); setlight(7); cmes(7)}} className={`p-4 ${light == 7 ? "h4" : "h6"}`}>Julio</a>
    
    <a onClick={()=>{ goNav(600); setlight(8); cmes(8)}} className={`p-4 ${light == 8 ? "h4" : "h6"}`}>Agosto</a>
  
    <a onClick={()=>{ goNav(700); setlight(9); cmes(9)}} className={`p-4 ${light == 9 ? "h4" : "h6"}`}>Septiembre</a>
  
    <a onClick={()=>{ goNav(800); setlight(10); cmes(10)}} className={`p-4 ${light == 10 ? "h4" : "h6"}`}>Octubre</a>

    <a onClick={()=>{ goNav(900); setlight(11); cmes(11)}} className={`p-4 ${light == 11 ? "h4" : "h6"}`}>Noviembre</a>
  
    <a onClick={()=>{ goNav(900); setlight(12); cmes(12)}} className={`p-4 ${light == 12 ? "h4" : "h6"}`}>Diciembre</a>
  
</div>
   
  )
}
