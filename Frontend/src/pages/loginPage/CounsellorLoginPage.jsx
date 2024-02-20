import './LoginForm.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signinUser } from '../../service/user'

export function Signin() {
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

        toast.success('Welcome to FarmEasy')
        navigate('/counsellorDashboard')
      } else {
        toast.error("Invalid Credentials")
      }
    }
  }

  return (
    <>
    <div className='loginForm'>
      <div className='header-text'>Counsellor Login</div>
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
                <span><Link to="/login">Farmer Login</Link></span>
                <br />
                <span><Link to="/adminLogin">Admin Login</Link></span>
              </div>
              <br />
              <button onClick={onSignin} className='btn btn-primary mt-2'>
                Login
              </button>
            </div>
          </div>
    </>
  )
}

export default Signin
