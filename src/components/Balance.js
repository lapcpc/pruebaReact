import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../contexto/UserContext'

export default function Balance({mes}) {


  const {database, listo} = useContext(UserContext)
  const [db, setDb] = useState(null)
  
 useEffect(() => {
   if(listo == 0){

   }else{
    setDb(database)
   }

 }, [listo])

 const getBalance= ()=>{
 console.log(typeof database[mes]['ingresos'])
 let total =  database[mes]['ingresos'] + database[mes]['gastos']
 return total

 }
  return (
    <div className="card m-3 shadow-sm ">
        <div className="card-body">
        <div className="container text-center">
            <div className="row">
            <div className="col"><b>Balance del Mes</b></div>
            </div>
            <div className="row">
            <div className="col">{db != null? (<> <p className="text-primary h2">{getBalance()}</p>
          </>) : (<><p>loading</p></>) }</div>
            </div>
        </div>
            <div className="container text-center">
                    <div className="row">
                        <div className="col">
                        <div className='col'>
                                  Ingresos
                        </div>
                        <div className='col'>
                        {db != null? (<> <p className="text-success h2">+{database[mes]['ingresos']}</p>
          </>) : (<><p>loading</p></>) }
                        </div>
                        </div>
                        <div className="col">
                        <div className='col'>
                                  Gastos
                        </div>
                        <div className='col'>
                        {db != null? (<> <p className="text-danger h2">{database[mes]['gastos']}</p>
          </>) : (<><p>loading</p></>) }
                        </div>
                        </div>
                       
                    </div>
            </div>
        </div>
    </div>
  )
}
