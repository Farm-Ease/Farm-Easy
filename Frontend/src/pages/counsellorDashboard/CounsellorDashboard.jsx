import React, { useEffect, useState } from 'react'
import './CounsellorDashboard.css'
import axios from 'axios';
import Navbar from '../../Components/navbar/Navbar1'
import { toast } from 'react-toastify';
import CounsellorProfile from './CounsellorProfile';
import { Sync } from '@mui/icons-material';

function CounsellorDashboard() {
  const [farmerName, setFarmerName] = useState('');
  const [farmers, setFarmers] = useState([]);
  const [isPresent, setIsPresent] = useState(false);

  const fetchFarmer = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/counsellor/getFarmer/${farmerName}`);
      if (response.status === 200) {
        const farmerList = response.data;
        setFarmers(farmerList);
        setIsPresent(true);
        console.log(farmerList);
      }
      if (response.status === 500) {
        console.log('No farmer exists with this firstName');
        toast.error('Please check the data you inserted');
      }
    }
    catch (error) {
      console.error('Error fetching farmers', error);
      toast.error('Failed to fetch farmers');
    }
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" >
                    <span data-feather="file" ></span>
                    Farmers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    <span data-feather="bar-chart-2"></span>
                    Products
                  </a>
                </li>
                <a class="nav-link" href="/counsellorDashboard/profile">
                  <span data-feather="bar-chart-2"></span>
                  Update Profile
                </a>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-auto col-lg-10 ml-sm-auto pt-3 px-4">
            <div className='container'>
              <center><h1>Welcome to dashboard!</h1></center>
              <hr></hr>

              <div class='table-responsive'>
                <table class="custom-table ">
                  <tbody>
                    <tr>
                      <td class='name'>Name</td>
                      <td class='inputBox'>
                        <input type='text'
                          class='form-control'
                          placeholder="Enter Name here"
                          value={farmerName}
                          name='Name'
                          onChange={(event) => setFarmerName(event.target.value)} />
                      </td>
                      <td class='button'>
                        <button className='btn btn-primary' onClick={fetchFarmer}>Search</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr></hr>
              {isPresent &&
                <div class='table-responsive'>
                  <table class='table table-striped'>
                    <thead>

                      <tr>
                        <th>Name</th>
                        <th>Crop Sowed</th>
                        <th>Email</th>
                        <th>MobileNo</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Village</th>
                      </tr>
                    </thead>
                    <tbody>
                      {farmers.map(farmer => (
                        <tr key={farmer.id}>
                          <td>{farmer.name}</td>
                          <td>TBD</td>
                          <td>{farmer.email}</td>
                          <td>{farmer.number}</td>
                          <td>{farmer.state}</td>
                          <td>{farmer.district}</td>
                          <td>{farmer.village}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default CounsellorDashboard
