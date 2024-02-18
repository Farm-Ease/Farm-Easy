import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar from '../../Components/navbar/Navbar1'

function CounsellorManagement() {
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
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Farmers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Counsellor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  APMC Appointments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Products
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-12 pt-3 px-4">
          <div className='container'>
                <center><h1>Welcome to dashboard!</h1></center>
                <hr></hr>

                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <tbody>
                          <tr>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>Name</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
                <hr></hr>

                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
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

export default CounsellorManagement