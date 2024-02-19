import React, { useState } from 'react'
import './AdminDashboard.css'
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1';
import { useEffect } from 'react';
function FarmerManagement() {

    const [farmers, setFarmers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from the server
        fetchFarmers();
    }, []);

    const fetchFarmers = async () => {
        try {
            const response = await fetch('http://localhost:8080/admin/getFarmers');
            const data = await response.json();
            setFarmers(data);
            console.log(farmers);
        } catch (error) {
            console.error('Error fetching farmers:', error);
            // Handle error
            toast.error('Failed to fetch farmers. Please try again later.');
        }
    };

    return (
        <>
        
        <Navbar/>
        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="/adminDashboard">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngfarmer">
                      <span data-feather="file"></span>
                      Farmers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngcounsellor">
                      <span data-feather="shopping-cart"></span>
                      Counsellor
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngappointment">
                      <span data-feather="users"></span>
                      APMC Appointments
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngproduct">
                      <span data-feather="bar-chart-2"></span>
                      Products
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className='container'>
              <center><h1>Welcome to dashboard!</h1></center>
              <hr></hr>
              <div class='table-responsive'>
                <table class='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>MobileNo</th>
                      <th>State</th>
                      <th>District</th>
                      <th>Village</th>
                      <th>Password</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                      {farmers.map(farmer => (
                            <tr key={farmer.id}>
                            <td>{farmer.id}</td>
                            <td>{farmer.name}</td>
                            <td>{farmer.email}</td>
                            <td>{farmer.number}</td>
                            <td>{farmer.state}</td>
                            <td>{farmer.district}</td>
                            <td>{farmer.village}</td>
                            <td>{farmer.password}</td>
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
export default FarmerManagement;
