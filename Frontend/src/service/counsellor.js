import axios from 'axios'
import { createError, createUrl } from './utils'

export async function signinCounsellor(email, password) {
  try {
    const url = createUrl('counsellor/login')
    const body = {
      email,
      password,
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}