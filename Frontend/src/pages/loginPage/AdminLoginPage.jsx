import React, { useState } from 'react'
import './AdminLoginForm.css'
import { toast } from 'react-toastify'
import {Link, useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import { signinAdmin } from '../../service/admin'

function AdminLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onSignin = async () => {
    if (email.length == 0) {
      toast.warn('enter email')
    } else if (password.length == 0) {
      toast.warn('enter password')
    } else {
      // make the api call
      const result = await signinAdmin(email, password)
      if (result['status'] == 'success') {
        // cache the token
        const token = result['data']['token']
        sessionStorage['token'] = token

        toast.success('Welcome to the "Farm-Easy"')
        navigate('/')
      } else {
        toast.error(result['error'])
      }
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
             <Button onClick={onSignin} type="submit" id="button" variant="contained">Login</Button>
            <span><Link to='/login'>Farmer Login</Link></span> 
            
            <br/>
            <span><a href="/counsellorLogin">Counsellor Login</a></span>
            </form>
	</div>
  )
}

export default AdminLoginForm