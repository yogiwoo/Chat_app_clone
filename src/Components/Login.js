import React from 'react'
import logo from "./../images/Hello-Transparent.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Register(){
  return (
    <div className='resister-container'>
        <div className='image-container'>
          <img src={logo} alt='logi' className='login-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <TextField id="standard-basic" label="Enter user name" variant="standard" />
            <TextField id="standard-basic" label="Enter user email" variant="standard" />
            <TextField id="standard-basic" label="create a" variant="standard" type='password' />
            <Button variant="outlined">Outlined</Button>
            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    </div>
  )
}
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
            <p>Dont  have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export  {Login,Register}