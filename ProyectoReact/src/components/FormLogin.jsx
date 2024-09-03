import React from 'react'
import '../styles/FormLogin.css'

function FormLogin() {
  return (

<div className='div1'>

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

    <div>
      <h2>Nota Importante</h2>
      <p>Para poder ingresar debes llenar la información solicitada
        <br />
        En caso que no tengas una cuenta, debes registrarte primero 
        </p>
    </div>

</div>
  )
}

export default FormLogin