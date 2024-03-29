import './LoginForm.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signinUser } from '../../service/user'
import { useAuth } from "../../contexts/AuthContext";

export function Signin() {
  const { setRole } = useAuth();
  const { setUserId } = useAuth();

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
      const result = await signinUser(email, password)
      console.log(result);
      if (result.status == 200 || result.status == 201) {
        // cache the token
        const token = result.data.jwt
        console.log(token);
        sessionStorage['token'] = token
        setUserId(result.data.id)
        setRole("farmer");

        toast.success('Welcome to FarmEasy')
        navigate('/')
      } else {
        toast.error("Invalid Credentials")
      }
    }
  }

  return (
    <>
    <div className='loginForm'>
      <div className='header-text'>Login Form</div>
            <div className='mb-3'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='abc@test.com'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='xxxxxxxx'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                <br />
                <span>Don't have an account? <Link to='/register'>Register here</Link></span>
                <br />
                <span><Link to="/adminLogin">Admin Login</Link></span>
                <br />
                <span><Link to="/counsellorLogin">Counsellor Login</Link></span>
              </div>
              
              <button onClick={onSignin} className='btn btn-primary mt-2'>
                Login
              </button>
            </div>
          </div>
    </>
  )
}

export default Signin
