import React from 'react'
import '../styles/BodyContact.css'

function BodyContact() {
  return (
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

                <tr>
                    <td>Para más info</td>
                    <td> Visita nuestra página About Us</td>
                </tr>   
        </table>

        <h4>Horario de atención</h4>
        <p>Lunes a sábado: de 7:00 a.m. a 7:00 p.m.
            <br />
        Domingos: de 11:00 a.m. a 6:00 p.m.
        </p>
    </div>
  )
}

export default BodyContact