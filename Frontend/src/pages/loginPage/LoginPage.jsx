// import React, { useState } from 'react'
// import './LoginForm.css'
// import {Link,useNavigate} from "react-router-dom"
// import { Button } from '@mui/material';
// import { toast } from 'react-toastify'
// import { signinUser } from '../../service/user'
// import { createUrl } from '../../service/utils';

// function LoginForm() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const navigate = useNavigate()

//   // const onSignin = async () => {
//   //   if (email.length == 0) {
//   //     toast.warn('enter email')
//   //   } else if (password.length == 0) {
//   //     toast.warn('enter password')
//   //   } 
//   //     // make the api call
//   //     const result = await signinUser(email, password)
//   //     console.log(result['status']);
//   //     if (result['status'] == 'success') {
//   //       // cache the token
//   //       console.log('successfully logged In')
//   //       const token = result['data']['token']
//   //       sessionStorage['token'] = token
//   //       console.log(token);
//   //       toast.success('Welcome to the "Farm-Easy"')

//   //       navigate('/')
//   //     } else {
//   //       toast.error(result['error'])
//   //     }
    
//   // }
//   const onSignin = async () => {
//     if (email.length === 0) {
//       toast.warn('Please enter email');
//       return;
//     } else if (password.length === 0) {
//       toast.warn('Please enter password');
//       return;
//     }
  
//     // Make the API call
//     try {
//       const result = await signinUser(email, password);
//       console.log(result.status);
//       if (result.status === 200 ) {
//         // If status is 200 (OK) or 304 (Not Modified)=> success
//         console.log('successfully logged In');
//         const token = result.data.token;
//         sessionStorage.token = token;
//         console.log(token);
//         toast.success('Welcome to "Farm-Easy"');
//         navigate('/');
//       } else {
//         // Handle other status codes
//         console.log('Error logging In');
//         toast.error(result.error || 'Failed to log in. Please try again later.');
//       }
//     } catch (error) {
//       toast.error('Failed to log in. Please try again later.');
//       console.error('Error logging in:', error);
//     }
//   }
//   return (
//     <div className="loginForm">
// 		<div className="header-text">
// 			Login Form
// 		</div>
//     <form >
//             <input onChange={(event)=>{
//               setEmail(event.target.value);
//             }} placeholder="Your Email Address" type="email" required /> 
//             <input onChange={(event)=>{
//               setPassword(event.target.value);
//             }} placeholder="Your Password" type="password" required /> 
//              <Button onClick={onSignin} type="submit" id="button" variant="contained">Login</Button>
//             <span>Or Click here to <Link to='/register'>register</Link></span> 
//             <br />
//             <span><a href="/adminLogin">Admin Login</a></span>
//             <br />
//             <span><a href="/counsellorLogin">Counsellor Login</a></span>
//             </form>
// 	</div>
//   )
// }

// export default LoginForm

import './LoginForm.css'
import React, { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext';

// const Signin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignin = async () => {
//     try {
//       if (email.length == 0) {
//         toast.warn('enter email')
//       } else if (password.length == 0) {
//         toast.warn('enter password')
//       } 
//       // const response = await axios.post('http://localhost:8080/farmers/signin', {
//       //   email,
//       //   password,
//       // });
//       const response = await axios.post('http://localhost:8080/farmers/signin', {
//         email: email.trim(),
//         password: password.trim(),
//       });

//       const {token} = response.data.token
//       sessionStorage.setItem('token',token);
//       //console.log(token);
//       toast.success('Welcome to the "Farm-Easy"')
//       navigate('/adminDashboard');
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         toast.error('Invalid email or password. Please try again.');
//       } else {
//         toast.error('An error occurred. Please try again later.');
//       }
//       console.error('Signin error:', error);
//       navigate("/signin")
//     }
//   };

function Signin() {
  const navigate = useNavigate();
  const { setRole } = useAuth();
  const { setUserId } = useAuth();

  const handleSignin = () => {

    const response = axios.post('http://localhost:8080/farmers/signin', { email: email,password: password,})
      .then((response) => {
        sessionStorage.setItem("jwt", response.data.jwt)
        console.log(response);
        toast.success(response.data.mesg);
        setUserId(response.data.userId)
        setRole("farmer");
        setRole("user");
        navigate("/farmerDashboard");
      }).catch((err) => {
        setRole("");
        console.log(err)
        toast.error("Invalid Credentials");
        navigate("/login");
      })
        //sessionStorage.setItem("jwt", response.data.jwt)
        console.log(response);
        toast.success("Welcome to FarmEasy");
        setUserId(response.data.userId)
        setRole("farmer");
        setRole("user");
        navigate("/farmerDashboard");

  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="loginForm">
 		<div className="header-text">
 			Login Form
 		</div>
    <form >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignin} type="submit" id="button" variant="contained">Login</Button>
        <span>Or Click here to <Link to='/register'>register</Link></span> 
        <br />
        <span><a href="/adminLogin">Admin Login</a></span>
        <br />
        <span><a href="/counsellorLogin">Counsellor Login</a></span>
        </form>
	</div>
  )
}

export default Signin;
