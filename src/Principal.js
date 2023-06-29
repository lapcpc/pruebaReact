import React, { useState } from 'react'
import Balance from './components/Balance'
import Nav from './components/Nav'
import Movimientos from './components/Movimientos'
import './Nav.css'
import Modal from './components/Modal'
export default function () {
    const [mes, setMes] = useState(1)
    const [mest, setMest] = useState('enero')
    const [modal, setModal] =  useState(0)

    const cambiarMes = (x) => {
        setMes(x)
        setMest(mesToText(x))

    }
    const mesToText = (x) => {
        if(x == 1){
            return 'enero'
        }
        if(x == 2){
            return 'febrero'
        }
        if(x == 3){
            return 'marzo'
        }
        if(x == 4){
            return 'abril'
        }
        if(x == 5){
            return 'mayo'
        }
        if(x == 6){
            return 'junio'
        }
        if(x == 7){
            return 'julio'
        }
        if(x == 8){
            return 'agosto'
        }
        if(x == 9){
            return 'sept'
        }
        if(x == 10){
            return 'octubre'
        }
        if(x == 11){
            return 'noviembre'
        }
        if(x == 12){
            return 'diciembre'
        }
    }
  return (
    <div>

        <Nav cmes={cambiarMes} />
        <Balance mes={mest}/>
        <Movimientos mes={mest}/>
        <Modal activo={modal} accion={setModal} />
        
        
    </div>
  )
}
