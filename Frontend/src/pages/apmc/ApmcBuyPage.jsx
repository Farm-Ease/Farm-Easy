import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'
import config from '../../config'
import { addItem } from '../../features/cartSlice'
import { getAllProducts } from '../../service/buy'
import flax from '../../assets/flax.jpg'
import wheat from '../../assets/wheat.jpg'
import urea from '../../assets/urea.jpg'
import npk from '../../assets/npk.jpg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap'

function Product({ item }) {
  const[source,setSource]=useState();
  useEffect(()=>{    if(item.image =="wheat.jpg"){
    setSource(wheat)
  }
  if(item.image =="flax.jpg"){
    setSource(flax)
  }
  if(item.image =="urea.jpg"){
    setSource(urea)
  }
  if(item.image =="npk.jpg"){
    setSource(npk)
  }},[])
  console.log(item.productName);
  // get the dispatch object
  const dispatch = useDispatch()
  const getTitle = () => {
  if (item && item.productName) {
    return item.productName.length > 13
      ? item.productName.substring(0, 12) + '...'
      : item.productName;
  } else {
    return '';
  }
};

  const addItemToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }))
  }

  return (
    <>
    <div className='card' style={{ height: 280 }}>
      <div style={{ textAlign: 'center' }}>
      
          <img
          style={{ width: 150 }}
          className='card-img-top'
          src={source}
          alt=''
        />
        
      </div>
      <div className='card-body'>
        <div style={{ fontWeight: 'bold', fontSize: 19 }}>{getTitle()}</div>
        <div>
          Price:{' '}
          <span style={{ fontWeight: 'bold', fontSize: 17 }}>
            ₹{item.rate}
          </span>
        </div>
        <div className='mt-2'>
          <button onClick={addItemToCart} className='btn btn-success btn-sm'>
            Add
          </button>
        </div>
      </div>
    </div>
    </> 
  )
}

export function ApmcBuy() {
  const [items, setItems] = useState([])

  const loadAllProducts = async () => {
    // const result = await getAllProducts()
    // console.log(result)
    // if (result['status'] == 'success') {
    //   console.log(result)
    //   setItems(result['data'])
    // } else {
    //   toast.error(result['error'])
    // }
    try {
            const response = await fetch('http://localhost:8080/admin/getProducts');
            const data = await response.json();
            setItems(data);
            console.log(items);
        } catch (error) {
            console.error('Error fetching products:', error);
            // Handle error
            toast.error('Failed to fetch products. Please try again later.');
        }
  }

  useEffect(() => {
    loadAllProducts()
  }, [])

  const navigate=useNavigate();

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
