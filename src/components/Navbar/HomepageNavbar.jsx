import React from 'react'
import '../../style/NavbarStyle/HomepageNavbar.css'

function HomepageNavbar() {
  return (
    <div className='navbar-container wrapper'>
      <h1>Animoda Studio</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <button>Get Started</button>
        </ul>
    </div>
  )
}

export default HomepageNavbar ;
