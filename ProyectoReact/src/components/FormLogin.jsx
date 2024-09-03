import React from 'react'
import '../styles/FormLogin.css'

function FormLogin() {
  return (
    <div className='divFormLogin'>
        <h1>Estás en el formulario de login</h1>

        <p>Ingresa tu número de identificación</p>
        <input className='inputLogin' placeholder='Identificación' type="text" />

        <p>Ingresa tu contraseña</p>
        <input className='inputLogin' placeholder='Contraseña' type="password" name="" id="" />

<br />
<br />
            <button className='botonLogin' type="button">INICIAR SESIÓN</button>
    </div>
  )
}

export default FormLogin