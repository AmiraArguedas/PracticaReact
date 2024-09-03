import React from 'react'
import '../styles/FormRegister.css'

function FormRegister() {
  return (
        <div className='divFormRegistro'>
            <h1>Estás en el formulario de registro</h1>
            <p>Tu nombre</p>
            <input className='inputRegistro' placeholder='Ingresa información' type="text" />

            <p>Número de identificación</p>
            <input className='inputRegistro' placeholder='Identificación' type="text" />

            <p>Correo electrónico</p>
            <input className='inputRegistro' placeholder='Correo electrónico' type="text" />

            <p>Número de teléfono</p>
            <input className='inputRegistro' placeholder='Número de teléfono' type="number" />

            <p>Contraseña</p>
            <input className='inputRegistro' placeholder='Contraseña' type="password" name="" id="" />
<br />
<br />
            <button className='botonRegistro' type="button">ENVIAR FORMULARIO</button>
        </div>
  )
}

export default FormRegister

