import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'
import config from '../../config'
import { addItem } from '../../features/cartSlice'
import { getAllProducts } from '../../service/buy'

function Product({ item }) {
  // get the dispatch object
  const dispatch = useDispatch()

  const getTitle = () => {
    return item.name.length > 13
      ? item.name.substring(0, 12) + '...'
      : item.name
  }

  const addItemToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }))
  }

  return (
    <div className='card' style={{ height: 280 }}>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: 150 }}
          className='card-img-top'
          src={config.server + '/' + item.image}
          alt=''
        />
      </div>
      <div className='card-body'>
        <div style={{ fontWeight: 'bold', fontSize: 19 }}>{getTitle()}</div>
        <div>
          Price:{' '}
          <span style={{ fontWeight: 'bold', fontSize: 17 }}>
            ₹{item.price}
          </span>
        </div>
        <div className='mt-2'>
          <button onClick={addItemToCart} className='btn btn-success btn-sm'>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export function ApmcBuy() {
  const [items, setItems] = useState([])

  const loadAllProducts = async () => {
    const result = await getAllProducts()
    if (result['status'] == 'success') {
      console.log(result)
      setItems(result['data'])
    } else {
      toast.error(result['error'])
    }
  }

  useEffect(() => {
    loadAllProducts()
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='title'>APMC</h1>

        <div className='row'>
          {items.map((item) => {
            return (
              <div key={item['id']} className='col'>
                <Product item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ApmcBuy
