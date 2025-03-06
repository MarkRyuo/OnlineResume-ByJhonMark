import React from 'react'
import '../../style/NavbarStyle/HomepageNavbar.css'

function HomepageNavbar() {
  return (
    <div className='navbar-container'>
      <div className='animoda-text'>
        <p>A</p>
        <p>N</p>
        <p>I</p>
        <p>M</p>
        <p>O</p>
        <p>D</p>
        <p>A</p>
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