import React from 'react'
import '../../style/NavbarStyle/HomepageNavbar.css'

function HomepageNavbar() {
  return (
    <div className='navbar-container'>
      <div className='left-container'>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Animoda Studio</h1>
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