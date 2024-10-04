import React, { useEffect, useState } from 'react'
import logo from "./../images/Hello-Transparent.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register(){
  const [data,setData]=useState({name:"",email:"",password:""});
  const [response,setResponse]=useState('');
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((previousData)=>({
      ...previousData,
      [name]:value,
    }))
  }
  const handleSubmit=async (e)=>{
      e.preventDefault();
      setResponse('')
      try{
        const response=await axios.post('http://localhost:5000/user/register',data)
        const token = response.data.token;
        localStorage.setItem('token', token);
        setResponse=(`success: ${response.data.message}`)
      }
      catch(e){
        setResponse("Error")
      }
  }
  return (
    <div className='resister-container'>
        <div className='image-container'>
          <img src={logo} alt='logi' className='login-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit}>
            
            <TextField 
            id="name" 
            name="name"
            value={data.name} 
            onChange={handleChange} 
            label="Enter user name" 
            variant="standard" 
            />
            
            <TextField 
            id="email" 
            name="email"
            value={data.email} 
            onChange={handleChange}
            label="Enter user email" 
            variant="standard" 
            />

            <TextField 
            id="password"
            name='password' 
            value={data.password} 
            onChange={handleChange}
            label="create password" 
            variant="standard" 
            type='password' />
            
            <Button variant="outlined" type='submit'>Register</Button>
            </form>
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