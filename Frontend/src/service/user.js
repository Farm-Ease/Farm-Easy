import axios from 'axios'
import { createError, createUrl } from './utils'

export async function RegisterUser(name, email, number, aadhaar, dob, state, district, village, password) {
  try {
    const url = createUrl('farmers/signup')
    const body = {
      name, 
      email, 
      number, 
      aadhaar, 
      dob, 
      state, 
      district, 
      village, 
      password,
    }
    const response = await axios.post(url, body)
    return response
  } catch (ex) {
    return createError(ex)
  }
}

export async function signinUser(email, password) {
  try {
    const url = createUrl('farmers/signin')
    const body = {
      email,
      password,
    }
    const response = await axios.post(url, body)
    return response
  } catch (ex) {
    return createError(ex)
  }
}
