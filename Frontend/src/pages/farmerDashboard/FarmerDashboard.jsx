import React, { useState } from 'react'
import './FarmerDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Navbar from '../../Components/navbar/Navbar1'

function FarmerDashboard() {


  return (
    <>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="farmerDashboard/manageFarmerApmcAppointment">
                  <span data-feather="file"></span>
                  APMC Appointment
                </a>
              </li>
            </ul>
          </div>
        </nav>

           <main role="main" class="col-md-auto col-lg-10 ml-sm-auto pt-3 px-4">

            <div></div>

            <div className="add-products-form">
              <center>
              <h2>Add Crops</h2>
              </center>  


              <hr></hr>
  
                <div class='table-responsive'>
                  <table class='table table-bordered'>
                    <tbody>
                      <tr>
                        <td>Farmer Id:</td>
                      <input
                        type="number"
                        id="farmer_id"
                        name="farmer_id"
                      // value={productData.khraif_crop_quantity}
                      // onChange={handleChange}
                      // required
                      />
                    </tr>
                      <tr>
                        <td>Kharif Crop:</td>
                      <input
                        type="text"
                        id="khraif_crop"
                        name="khraif_crop"
                      // value={productData.khraif_crop}
                      // onChange={handleChange}
                      />
                      </tr>
                      <tr>
                        <td>Kharif Crop Quantity:</td>
                      <input
                        type="number"
                        id="khraif_crop_quantity"
                        name="khraif_crop_quantity"
                      // value={productData.khraif_crop_quantity}
                      // onChange={handleChange}
                      // required
                      />
                    </tr>
                    <tr>
                        <td>Rabi Crop:</td>
                      <input
                        type="text"
                        id="rabi_crop"
                        name="rabi_crop"
                      // value={productData.khraif_crop}
                      // onChange={handleChange}
                      />
                      </tr>
                      <tr>
                        <td>Rabi Crop Quantity:</td>
                      <input
                        type="number"
                        id="rabi_crop_quantity"
                        name="rabi_crop_quantity"
                      // value={productData.khraif_crop_quantity}
                      // onChange={handleChange}
                      // required
                      />
                    </tr>
                    <tr>
                        <td>Zaid Crop:</td>
                      <input
                        type="text"
                        id="zaid_crop"
                        name="zaid_crop"
                      // value={productData.khraif_crop}
                      // onChange={handleChange}
                      />
                      </tr>
                      <tr>
                        <td>Zaid Crop Quantity:</td>
                      <input
                        type="number"
                        id="zaid_crop_quantity"
                        name="zaid_crop_quantity"
                      // value={productData.khraif_crop_quantity}
                      // onChange={handleChange}
                      // required
                      />
                    </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button className='btn btn-success' /*onClick={}*/>Add Crop</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr></hr>
              <br></br>       
            </div>
          </main> 

      </div>
    </div>
  </>
  )
}

export default FarmerDashboard
