import React from 'react'
import logo from "./../images/Hello-Transparent.png"
function Welcome() {
  return (
    <div className='welcome-container'>
        <img src={logo} alt="LOGO" className='welcome-logo'/>
        <p>View and text directly to peroples present</p>
    </div>
  )
}

export default Welcome