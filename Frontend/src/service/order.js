import axios from 'axios'
import { createError, createUrl } from './utils'

export async function placeOrder(items, total,farmer_id) {
  try {
    const url = createUrl('orders/add')
    const headers = {
      headers: {
        token: sessionStorage['token'],
      },
    }
    const quantity = items.map((item) => {
      return {
        quantity:item['quantity'],
      }
    })

    const totalQuantity = items.reduce((acc, quantity) => {
      return acc + quantity.quantity;
    }, 0);

    console.log(totalQuantity);

    const todayDate = new Date();

    // Format the date as yyyy-mm-dd
    const date = todayDate.toISOString().split('T')[0];

    const body = {
      farmer_id,
      total,
      totalQuantity,
      date
    }
    console.log(body);
    const response = await axios.post(url, body, headers)
    return response;
  } catch (ex) {
    return createError(ex)
  }
}

export async function getAllOrders() {
  try {
    const url = createUrl('order/')
    const headers = {
      headers: {
        token: sessionStorage['token'],
      },
    }

    const response = await axios.get(url, headers)
    return response.data
  } catch (ex) {
    return createError(ex)
  }
}
