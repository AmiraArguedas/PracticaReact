import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div>
        <div className='divContenedor'>
            <a>Home</a>
            <a>Register</a>
            <a>Login</a>
            <a>About us</a>
            <a>Contact</a>
        </div>
        <hr />
    </div>
  )
}

export default Header