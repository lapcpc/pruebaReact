import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../contexto/UserContext'
import Movimiento from './Movimiento'

export default function Movimientos({mes}) {
    const {database, listo} = useContext(UserContext)
    const [db, setDb] = useState(null)
   useEffect(() => {
     if(listo == 0){

     }else{
      setDb(database)
     }
  
   }, [listo])
   
    
  const consolear = () =>{
  console.log(db)
  }
  return (
    <div>
        {db != null? (<>
          {database[mes]['movimientos'].map((t) => {
   return (
    <Movimiento tipo={t['tipo']} nombre={t['nombre']} cantidad={t['cantidad']} />
   )
})}
        </>):(<></>)}
        {/* <button type='button' onClick={()=> {consolear()}}>Pre</button> */}
        
    </div>
  )
}
