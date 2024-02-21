import React, { useEffect, useState } from 'react'
import './CounsellorDashboard.css'
import axios from 'axios';
import Navbar2 from '../../Components/navbar/Navbar2'
import { toast } from 'react-toastify';
import CounsellorProfile from './CounsellorProfile';


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

  // const [counsellor, setCounsellor] = useState(null);
  // const[clicked,setClicked]=useState(false);

  //   const fetchCounsellor = async () => {
  //     setClicked(true);
  //       try {
  //           // setId(3);
  //           const response = await axios.get(`http://localhost:8080/counsellor/3`);
  //           console.log(response);
  //           const counsellorData = response.data;
  //           console.log(counsellorData);
  //           console.log(response.status);
  //           if (response.status === 200)  {
  //               setCounsellor(counsellorData);
  //               console.log(counsellor);
  //           }
  //       } catch (error) {
  //           console.error('Error fetching counsellors:', error);
  //           toast.error('Failed to fetch counsellors. Please try again later.');
        
  //       }
  //   };

  return (
    <>
    <Navbar2/>
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
              {/* {
                clicked ? (<CounsellorProfile data={counsellor}/>):(
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
              </div>)
              } */}
              <hr></hr>
              {isPresent &&
                <div class='table-responsive'>
                  <table class='table table-striped'>
                    <thead>

                      <tr>
                        <th>Name</th>
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
