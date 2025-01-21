import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
  const[form,setForm]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate();
  function capValue(){
    // console.log(form)
    axios.post('http://localhost:5000/user/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token);
        navigate('/blog');
      }
      else{
        navigate('/');
      }

    }).catch((error)=>{
      alert('invalid login');
    })
  }
  return (
    <div style={{marginLeft:'40%', marginTop:'10%',borderRadius:'8px',backgroundColor:'white',boxShadow:'0 4px 4px black',width:'300px',padding:'20px'}}>
        <h3>Blog App</h3>
        <TextField label='email' name='email' onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}></TextField><br /><br />
        <TextField label='password' name='password' onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}></TextField>
        <br /> <br />
        <Button color='blue' variant='contained' onClick={capValue}>LOGIN</Button>
        <div>
        <Link to={'/signup'}>New user? Please Register</Link>
        </div>
    </div>
  )
}

export default Login