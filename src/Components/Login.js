import React from 'react'
import logo from "./../images/Hello-Transparent.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt='logi' className='login-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <TextField id="standard-basic" label="Enter user name" variant="standard" />
            <TextField id="standard-basic" label="Enter user name" variant="standard" type='password' />
            <Button variant="outlined">Outlined</Button>
        </div>
    </div>
  )
}

export default Login