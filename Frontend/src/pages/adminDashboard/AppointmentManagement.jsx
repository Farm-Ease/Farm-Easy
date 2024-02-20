import React, { useState } from 'react'
import './AdminDashboard.css'
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1';
import { useEffect } from 'react';
function AppointmentManagement() {

    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch data from the server
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:8080/admin/getAppointments');
            const data = await response.json();
            setAppointments(data);
            console.log(appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            // Handle error
            toast.error('Failed to fetch appointments. Please try again later.');
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
                <table class='table table-striped'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Farmer Id</th>
                      <th>Date</th>
                      <th>Crop</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                      {appointments.map(appointments => (
                            <tr key={appointments.id}>
                            <td>{appointments.id}</td>
                            <td>{appointments.farmer_id}</td>
                            <td>{appointments.date}</td>
                            <td>{appointments.crop}</td>
                            <td>{appointments.quantity}</td>
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
export default AppointmentManagement;
