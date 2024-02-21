import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar from '../../Components/navbar/Navbar1'
import { toast } from 'react-toastify'
import { AddProduct } from '../../service/admin';
import { useEffect } from 'react';
function ProductManagement() {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setselectedProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
      }, []);
    

    const [Id, setId] = useState('default')
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [rate, setRate] = useState('')
    //const [image, setStateName] = useState('')
  
    const navigate = useNavigate()

    const OnAddProduct = async () => {
        if (!productName || productName.length === 0) {
          toast.warn('Please enter a Produnct Name');
        } else if (!quantity || quantity.length === 0) {
          toast.warn('Please enter an quantity');
        } else if (!rate || rate.length === 0) {
          toast.warn('Please enter a rate');
        } else {
          try {
            const result = await AddProduct(productName, quantity, rate);
            console.log(result);
            if (result['status'] === 'success') {
                toast.success('Product added successfully');
                navigate('/');
            } else {
                toast.error(result['error']);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Failed to add product. Please try again later.');
        }
        }
    };

    const fetchProduct = async () => {
        try {
          const response = await fetch('http://localhost:8080/admin/getProducts');
          const data = await response.json();
          setProducts(data);
          console.log(products);
        } catch (error) {
          console.error('Error fetching products:', error);
          toast.error('Failed to fetch products. Please try again later.');
        }
    };




    const editProduct = (product) => {
        setselectedProduct(product);
        setProductName(product.productName);
        setRate(product.rate);
        setQuantity(product.quantity);
    };

    const resetForm = ()=>{
        setselectedProduct(null);
        setProductName('');
        setRate('');
        setQuantity('');
    }

    // const RemoveRecord = ()=>{
    //     var removeUrl = 'http://localhost:8080/admin/deleteProduct'+"/"+Id;
    //     axios.delete(removeUrl).then((response) => {
    //         if (response.data.affectedRows !== undefined &&
    //           response.data.affectedRows > 0) {
    //           fetchProduct();
    //         }
    //         else {
    //           alert("Something went wrong!")
    //         }
    //       });
    //     }

    const deleteProduct = async (productId) => {
            try {
            console.log(productId)
            const response = await axios.delete(`http://localhost:8080/admin/deleteProduct/${productId}`);
            if (response.status === 200) {
            toast.success('Product deleted successfully');
                } else {
            toast.error('Failed to delete product');
            }
        }catch (error) {
            console.error('Error deleting product:', error);
            toast.error('An error occurred while deleting product');
        }
    };    

    const updateProduct = async () => {
        if (!selectedProducts) {
          toast.error('No Product selected for update');
          return;
        }
        if (productName === '' || rate === '' || quantity === '' ) {
          toast.warn('All fields are required');
          return;
        }
        try {
          const updatedProduct = {
            id: selectedProducts.id,
            productName,
            rate,
            quantity,
          };
          const response = await axios.put(`http://localhost:8080/admin/updateProducts/${selectedProducts.id}`, updatedProduct);
          if (response.status === 200) {
            toast.success('Product updated successfully');
            resetForm();
          } else {
            toast.error('Failed to update product');
          }
        } catch (error) {
          console.error('Error updating product:', error);
          toast.error('An error occurred while updating product');
        }
      };

  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 col-12 d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/adminDashboard">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminDashboard/mngfarmer">
                    <span data-feather="file"></span>
                    Farmers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminDashboard/mngcounsellor">
                    <span data-feather="shopping-cart"></span>
                    Counsellor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminDashboard/mngappointment">
                    <span data-feather="users"></span>
                    APMC Appointments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adminDashboard/mngproduct">
                    <span data-feather="bar-chart-2"></span>
                    Products
                  </a>
                </li>
              </ul>
            </div>
          </nav> 


          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
  <div className='container'>
    <center><h1>Product Management</h1></center>
    <hr />

    <div className='table-responsive'>
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>
              <input type='text'
                className="form-control"
                value={productName}
                name="Name"
                onChange={(event) => setProductName(event.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>
              <input type='number'
                className="form-control"
                value={rate}
                name="Rate"
                onChange={(event) => setRate(event.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>
              <input type='number'
                className="form-control"
                value={quantity}
                name="Quantity"
                onChange={(event) => setQuantity(event.target.value)} />                          
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className='btn btn-primary' onClick={OnAddProduct}>Add Record</button>
              {" "}
              <button className='btn btn-info' onClick={resetForm}>Reset</button>
              {" "}
              <button className='btn btn-success' onClick={updateProduct}>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />

    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.rate}</td>
              <td>{product.quantity}</td>
              <td>
                <button className='btn btn-warning'
                  onClick={() => { editProduct(product) }}>
                  Edit
                </button>
              </td>
              <td>
                <button className='btn btn-danger'
                  onClick={() => { deleteProduct(product.id) }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</main>
 
      </div>
    </div>
  </>
  )
}

export default ProductManagement;