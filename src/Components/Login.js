import React, { useEffect, useState} from 'react'
import logo from "./../images/Hello-Transparent.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { style } from 'framer-motion/client';


function Register(){
  const [data,setData]=useState({name:"",email:"",password:""});
  const [response,setResponse]=useState('');

  const nav=useNavigate();

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
        console.log("RESPONSE",response)
        const token = response.data.user.token;
        if(token){
          localStorage.setItem('data',response.data.user);
          nav('/app/welcome')
        }
       
        setResponse=(`success: ${response.data.message}`)
      }
      catch(e){
        setResponse("Error")
      }
  }
  return (
    <div className='resister-container'>
        <div className='image-container'>
          <img src={logo} alt='login' className='login-logo'/>
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
  const [login,setLogin]=useState({mobile:"",password:""});
  const [isCorrect,setIscorrect]=useState(false)
  const nav=useNavigate();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setLogin((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
   
      const response=await axios.post('http://localhost:5000/user/login',login);
     
      if(response.data.token){
        const token = response.data.token;
        console.log("user data with token",response.data)
        let userData={
          _id:response.data._id,
          "email": response.data.email,
          "name":  response.data.name,
          "token": response.data.token
        }
        localStorage.setItem('data',JSON.stringify(response.data));
       nav('/app/welcome')
      }
      if(response.data.message=="Incorrect password"){
        console.log("*********************************")
        setIscorrect(true);
      }
    
   
  }
  return (
    <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt='logi' className='login-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="email" 
                name="email"
                value={login.email}
                onChange={handleChange} 
                label="Enter user email" 
                variant="standard" />

                <TextField 
                  id="password"
                  name="password"
                  value={login.password} 
                  label="Enter Password" 
                  onChange={handleChange}
                  variant="standard" 
                  type='password' 
                />

                <Button variant="outlined" type='submit'>Login</Button>
                {isCorrect && <p style={{color:'red'}}>Incorrect Password</p>}
            </form>
            <p>Dont  have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export  {Login,Register}