import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar2 from '../../Components/navbar/Navbar2'

function AdminDashboard() {


  return (
    <>
        <Navbar2/>
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

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          
        </main> 
      </div>
    </div>
  </>
  )
}

export default AdminDashboard