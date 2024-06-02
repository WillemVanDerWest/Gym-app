import React from 'react'
import img from '../kettlebel.png'
import '../index.css'
export default function Navbar(){
    return(
        <div className="navbar-container">
        <navbar>
        <img className='img-size' src={img} />
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </navbar>
      </div>
    )
}