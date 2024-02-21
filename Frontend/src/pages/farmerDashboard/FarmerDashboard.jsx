import React, { useState } from 'react'
import './FarmerDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Navbar from '../../Components/navbar/Navbar1'
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify'
import { AddCrop } from '../../service/crop'

function FarmerDashboard() {
  const{userId} = useAuth();

  const [crops, setCrops] = useState("text");
  //const[counsellor,setCounsellor] = ({"Id":"","Name":"","Email":"","MobileNo":"","State":"","District":"","Village":"","Password":""})
  const [selectedCrop, setSelectedCrop] = useState({
      farmer_id: '', 
      khraifCrop: '', 
      khraifCropQuantity: '', 
      rabiCrop: '', 
      rabiCropQuantity: '', 
      zaidCrop: '', 
      zaidCropQuantity: '',
  });

  const navigate= useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedCrop({ ...selectedCrop, [name]: value });
  }

  const onAddCrop = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Perform form validation
    const { farmer_id, 
      khraifCrop, 
      khraifCropQuantity, 
      rabiCrop, 
      rabiCropQuantity, 
      zaidCrop, 
      zaidCropQuantity, } = selectedCrop;

    if (!farmer_id || farmer_id.length == 0) {
      toast.warn('enter farmer id')
    } else if ( !khraifCrop || khraifCrop.length == 0) {
      toast.warn('enter khraif crop')
    } else if (!khraifCropQuantity || khraifCropQuantity.length == 0) {
      toast.warn('enter khraif crop quantity')
    } else if (!rabiCrop || rabiCrop.length == 0) {
      toast.warn('enter rabi crop')
    } else if (!rabiCropQuantity || rabiCropQuantity.length == 0) {
      toast.warn('enter rabi crop quantity')
    } else if (!zaidCrop || zaidCrop.length == 0) {
      toast.warn('enter zaid crop')
    } else if (!zaidCropQuantity || zaidCropQuantity.length == 0) {
      toast.warn('enter zaid crop quantity')
    } 
    // Make the API call to register the user
    const result = await AddCrop(farmer_id, 
      khraifCrop, 
      khraifCropQuantity, 
      rabiCrop, 
      rabiCropQuantity, 
      zaidCrop, 
      zaidCropQuantity);
    console.log(result);
    if (result.status === 200  || result.status === 201) {
      toast.success('Successfully added the product');
      //navigate('/');
    } else {
      toast.error(result.error);
    }
  }

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
                  Crop Management<span class="sr-only"></span>
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
                  <form onSubmit={onAddCrop}>
                  <table class='table table-bordered'>
                    <tbody>
                      <tr>
                        <td>Farmer Id:</td>
                        <td>
                      <input
                        type="number"
                        id="farmer_id"
                        name="farmer_id"
                      value={selectedCrop.farmer_id}
                      onChange={handleChange}
                      required
                      />
                      </td>
                    </tr>
                      <tr>
                        <td>Kharif Crop:</td>
                        <td>
                      <input
                        type="text"
                        id="khraifCrop"
                        name="khraifCrop"
                      value={selectedCrop.khraifCrop}
                      onChange={handleChange}
                      />
                      </td>
                      </tr>
                      <tr>
                        <td>Kharif Crop Quantity:</td>
                        <td>
                      <input
                        type="number"
                        id="khraifCropQuantity"
                        name="khraifCropQuantity"
                      value={selectedCrop.khraifCropQuantity}
                      onChange={handleChange}
                      // required
                      />
                      </td>
                    </tr>
                    <tr>
                        <td>Rabi Crop:</td>
                        <td>
                      <input
                        type="text"
                        id="rabiCrop"
                        name="rabiCrop"
                      value={selectedCrop.rabiCrop}
                      onChange={handleChange}
                      />
                      </td>
                      </tr>
                      <tr>
                        <td>Rabi Crop Quantity:</td>
                        <td>
                      <input
                        type="number"
                        id="rabiCropQuantity"
                        name="rabiCropQuantity"
                      value={selectedCrop.rabiCropQuantity}
                      onChange={handleChange}
                      // required
                      />
                      </td>
                    </tr>
                    <tr>
                        <td>Zaid Crop:</td>
                        <td>
                      <input
                        type="text"
                        id="zaidCrop"
                        name="zaidCrop"
                      value={selectedCrop.zaidCrop}
                      onChange={handleChange}
                      />
                      </td>
                      </tr>
                      <tr>
                        <td>Zaid Crop Quantity:</td>
                        <td>
                      <input
                        type="number"
                        id="zaidCropQuantity"
                        name="zaidCropQuantity"
                      value={selectedCrop.zaidCropQuantity}
                      onChange={handleChange}
                      // required
                      />
                      </td>
                    </tr>
                      <tr>
                        <td></td>
                        <td>
                        <Button type="submit" id="button" variant="contained" >Add crop</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  </form>
                </div>
              <br></br>       
            </div>
          </main> 

      </div>
    </div>
  </>
  )
}

export default FarmerDashboard
