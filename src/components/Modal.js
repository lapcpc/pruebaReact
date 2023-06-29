import React, { useContext, useState } from 'react'
import '../Nav.css'
import UserContext from '../contexto/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Modal({activo, accion}) {
    const {addMovimiento} = useContext(UserContext)
    
    const [datos, setDatos] = useState({
        tipo: 1,
        cantidad: 0,
        mes:1,
        nombre: ""
    })
    const handleInputChange  =(event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = () => {
            
          
            let mes = mesToText(datos['mes'])
          
            addMovimiento(mes, datos['tipo'], parseInt(datos['cantidad']), datos['nombre'])
            accion(!activo)
            
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
        <div className='boton w-100 d-flex justify-content-center' >
            <button onClick={()=> {accion(!activo)}} type="button" className="m-6 p-6 w-75 btn btn-primary btn-lg btn-block">Agregar movimiento</button>
        </div>
        <div onClick={()=>{ accion(!activo)}} className={`${ activo == 1 ? "modi":"modno"}`}>
             <div onClick={(event) => {   event.stopPropagation();}} className='modi2 '>
                 <p className="h4 text-center">Añadir nuevo movimiento</p>
                    <div className="card m-2">
                        <div className="card-body">
                        <form>
                        
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Tipo de movimiento</label>
                            <select className="form-control" name="tipo" id="exampleFormControlSelect1" onChange={handleInputChange}>
                            <option value={1}>Ingreso</option>
                            <option value={2}>Gasto</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Mes</label>
                            <select className="form-control" name="mes" id="exampleFormControlSelect1" onChange={handleInputChange}>
                            <option value={1}>Enero</option>
                            <option value={2}>Febrero</option>
                            <option value={3}>Marzo</option>
                            <option value={4}>Abril</option>
                            <option value={5}>Mayo</option>
                            <option value={6}>Junio</option>
                            <option value={7}>Julio</option>
                            <option value={8}>Agosto</option>
                            <option value={9}>Septiembre</option>
                            <option value={10}>Octubre</option>
                            <option value={11}>Noviembre</option>
                            <option value={12}>Diciembre</option>


                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Nombre</label>
                            <input type="text" name="nombre" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Cantidad</label>
                            <input type="number" name="cantidad" className="form-control" id="exampleFormControlInput1" placeholder="Cantidad" onChange={handleInputChange} />
                        </div>

                </form>
                

                </div>
                
                </div>
                <button onClick={()=>{ handleSubmit()}} type="button" className="btn btn-primary btn-lg w-100">Add</button>
             </div>
        
        </div>
       
</div>
  )
}
