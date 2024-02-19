import axios from 'axios'
import { createError, createUrl } from './utils'

export async function signinAdmin(email, password) {
  try {
    const url = createUrl('admin/login')
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

export async function  AddCounsellor(name, email, mobileNo, stateName, districtName, village, password){
  try {
    const url = createUrl('admin/AddCounsellor')
    const body = {
      name,
      email,
      mobileNo, 
      stateName, 
      districtName, 
      village, 
      password,
    }
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}


export async function  deleteCounsellor(Id){
  try {
    const url = createUrl('admin/DeleteCounsellor'+"/"+Id)
    const response = await axios.delete(url, Id)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}

export async function getAllCounsellor(){
try{
  const url =createUrl('/admin/AllCounsellor')
  const response = await axios.get(url)
  return response.data
}
catch(ex){
  return createError(ex)
}
}