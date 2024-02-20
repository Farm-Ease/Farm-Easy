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

      </div>
    </div>
  </>
  )
}

export default FarmerDashboard
