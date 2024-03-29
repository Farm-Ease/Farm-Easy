import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'
import config from '../../config'
import { clear, updateQuantity } from '../../features/cartSlice'
import { placeOrder } from '../../service/order'
import img from '../../assets/flax.jpg'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const [total, setTotal] = useState(0)
  const{userId} = useAuth();
  console.log(userId);
  const navigate = useNavigate();
  // use it for updating the cart slice
  const dispatch = useDispatch()

  // reading the current state
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
    let totalAmount = 0
    for (const item of cart.items) {
      totalAmount += item['rate'] * item['quantity']
    }
    setTotal(totalAmount)
  }, [cart.items])
  
  const onQuantityUpdate = (itemId, quantity) => {
    dispatch(updateQuantity({ itemId, quantity }))
  }

  const onPlaceOrder = async () => {
    const result = await placeOrder(cart.items, total,userId);
    console.log(result.data);
    if (result['status'] === 201) {
      dispatch(clear())
      toast.success('successfully placed an order');
    } else {
      toast.error(result['error'])
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='title'>Cart</h1>

        {/* conditional rendering */}
        {cart.items.length == 0 && (
          <>
            <h3 style={{ textAlign: 'center' }}>
            There are no products in your cart.
          </h3>
          <br/>
          <h4 style={{ textAlign: 'center' }}>
            <a href="/">Home</a>
          </h4>
          </>
        )}
        {cart.items.length > 0 && (
          <div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>rate</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item['productName']}</td>
                      <td>{item['rate']}</td>
                      <td>{item['quantity']}</td>
                      <td>{item['rate'] * item['quantity']}</td>
                      <td>
                        <button
                          onClick={() => {
                            onQuantityUpdate(item['id'], item['quantity'] + 1)
                          }}
                          className='btn btn-success btn-sm'
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            onQuantityUpdate(item['id'], item['quantity'] - 1)
                          }}
                          className='btn btn-success btn-sm ms-1'
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan='5' style={{ textAlign: 'right' }}>
                    Total Amount
                  </td>
                  <td>{total}</td>
                </tr>
              </tfoot>
            </table>

            <button onClick={onPlaceOrder} className='btn btn-primary'>
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
