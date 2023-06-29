import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
export default function Contexto(props) {
  const [db, setDb]= useState()
  const [ready, setReady] = useState(0)

  useEffect(() => {
     fetch('./seeder.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(x => {
       return x.json()
     }).then(c => {
      
      setDb(c)
      setReady(1)
     })
   }, [])
   
   const addMovimiento =(month,tipo, cantidad, nombre) => 
   {
      let copia = db
       let  mes = db[month]
        mes['movimientos'].push({
          tipo: tipo,
          cantidad: cantidad,
          nombre: nombre
        })
        if(tipo == 1){
          mes['ingresos'] = mes['ingresos'] + cantidad 
        }else {
          mes['gastos'] = mes['gastos'] - cantidad 
        }
        copia[month] = mes
        setDb(copia)
   }
    return (
    <UserContext.Provider value={{
      database: db,
      listo: ready,
      addMovimiento
    }}>
        {props.children}
    </UserContext.Provider>
  )
}
