import React from 'react'

export default function Movimiento({tipo, cantidad, nombre}) {
  return (
    <div className='m-2'>
        { tipo == 1  ? (<>
            <div class="card">
  <div class="card-body">
  <div className='d-flex flex-row justify-content-between'>
  <div>
  <i class="bi bi-circle"></i><b> {nombre}</b>
  </div>
   <div><p className='text-success'><i class="bi bi-plus"></i>{cantidad}</p></div>
  </div>
  </div>
</div>
        </>) : (<>
          <div class="card shadow-sm ">
  <div class="card-body">
  <div className='d-flex flex-row justify-content-between'>
  <div>
  <i class="bi bi-circle"></i><b> {nombre}</b>
  </div>
   <div><p className='text-danger'>- {cantidad}</p></div>
  </div>
  </div>
</div>
        </>)}
    </div>
  )
}
