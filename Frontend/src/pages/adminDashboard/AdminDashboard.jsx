import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar2 from '../../Components/navbar/Navbar2'

function AdminDashboard() {


  return (
    <>
        <Navbar2/>
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
          
        </main> 
      </div>
    </div>
  </>
  )
}

export default AdminDashboard