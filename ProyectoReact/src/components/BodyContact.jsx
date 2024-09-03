import React from 'react'
import '../styles/BodyContact.css'

function BodyContact() {
  return (
    <div className='divPrincipal'>


        <div>
        <h1>Bienvenido a la página de "Contacto"</h1>
        <h3>Puedes contactarnos a través de los siguientes medios:</h3>

        <table>
                <tr>
                    <th>Medio</th>
                    <th>Información</th>
                </tr>
                
                <tr>
                    <td>Teléfonos</td>
                    <td>Central telefónica: 1234-5678</td>
                </tr>
                
                <tr>
                    <td>Oficinas Centrales</td>
                    <td>Nosara, Nicoya, Guanacaste</td>
                </tr>  
        </table>
        </div>

        <div>
<br />
<br />
<br />
            <h2>Para más información</h2>
            <p>Visita nuestra página About Us</p>

<br />

        <h3>Horario de atención</h3>
        <p>Lunes a sábado: de 7:00 a.m. a 7:00 p.m.
            <br />
        Domingos: de 11:00 a.m. a 6:00 p.m.
        </p>
        </div>

    </div>
  )
}

export default BodyContact