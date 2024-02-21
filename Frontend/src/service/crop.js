import axios from 'axios'
import { createError, createUrl } from './utils'

export async function AddCrop(farmer_id, khraifCrop, khraifCropQuantity, rabiCrop, rabiCropQuantity, zaidCrop, zaidCropQuantity) {
  try {
    const url = createUrl('farmer/addCrops')
    const body = {
      farmer_id, 
      khraifCrop, 
      khraifCropQuantity, 
      rabiCrop, 
      rabiCropQuantity, 
      zaidCrop, 
      zaidCropQuantity, 
    }
    const response = await axios.post(url, body)
    return response
  } catch (ex) {
    return createError(ex)
  }
}