import React, { useState } from 'react'
import './AdminLoginForm.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';

function AdminLoginForm() {
  const [email,setEmail]=useState(undefined);
  const [password,setPassword]=useState(undefined);
  const navigate=useNavigate();
  const[cookies,setCookies]=useCookies(["user"]);
  const handleSubmit=(event)=>{
    if(email!=="" && email!==undefined && password!=="" && password!==undefined){
     
 }
  }
  return (
    <div className="adminLoginForm">
		<div className="header-text">
			Admin Login Form
		</div>
    <form method='POST'>
            <input onChange={(event)=>{
              setEmail(event.target.value);
            }} placeholder="Your Email Address" type="email" required /> 
            <input onChange={(event)=>{
              setPassword(event.target.value);
            }} placeholder="Your Password" type="password" required /> 
             <Button onClick={(event)=>{handleSubmit(event)}} type="submit" id="button" variant="contained">Login</Button>
            <span><a href="/login">Farmer Login</a></span> 
            <br/>
            <span><a href="/counsellorlogin">Counsellor Login</a></span>
            </form>
	</div>
  )
}

export default AdminLoginForm