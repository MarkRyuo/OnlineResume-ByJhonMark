import React from 'react'
import '../../style/NavbarStyle/HomepageNavbar.css'

function HomepageNavbar() {
  return (
    <div className='navbar-container'>
      <h1>Animoda Studio</h1>
      <div className='hamburger-menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='buttons-container'>
        <button>
          <span>👌</span>
          Get Started
        </button>
        
      </div>
    </div>
  )
}

export default HomepageNavbar;