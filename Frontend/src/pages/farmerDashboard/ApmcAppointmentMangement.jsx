import React, { useState } from 'react'
import './FarmerDashboard.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'

function ApmcAppointmentManagement() {
    const [apmcAppointments, setApmcAppointments] = useState([]);
    const [selectedApmcAppointment, setSelectedApmcAppointment] = useState(null);
  
    useEffect(() => {
      fetchApmcAppointment();
    }, []);
  
   
    const [Id, setId] = useState('default')
    // const [name, setName] = useState('')
    const [farmer_id, setFarmer_id] = useState('')
    const [date, setDate] = useState('')
    const [quantity, setQuantity] = useState('')
    const [crop, setCrop] = useState('')

  
  
    const navigate = useNavigate()
  
    // const OnAddCounsellor = async () => {
    //   if (!name || name.length === 0) {
    //     toast.warn('Please enter a name');
    //   } else if (!email || email.length === 0) {
    //     toast.warn('Please enter an email');
    //   } else if (!mobileNo || mobileNo.length === 0) {
    //     toast.warn('Please enter a mobile number');
    //   } else if (!stateName || stateName.length === 0) {
    //     toast.warn('Please enter a state');
    //   } else if (!districtName || districtName.length === 0) {
    //     toast.warn('Please enter a district');
    //   } else if (!village || village.length === 0) {
    //     toast.warn('Please enter a village');
    //   } else if (!password || password.length === 0) {
    //     toast.warn('Please enter a password');
    //   } else {
    //     const result = await AddCounsellor(name, email, mobileNo, stateName, districtName, village, password);
    //     if (result['status'] === 'success') {
    //       toast.success('Successfully registered the Counsellor');
    //       navigate('/');
    //     } else {
    //       toast.error(result['error']);
    //     }
    //   }
    // };
  
  
    // here farmer_id to get how ?  
    const fetchApmcAppointment = async () => {
      try {
        const appoinUrl= 'http://localhost:8080/farmer/getAppointment/1'; // + farmer_id;
        const response = await fetch(appoinUrl);
        const data = await response.json();
        setApmcAppointments(data);
        console.log(apmcAppointments);
      } catch (error) {
        console.error('Error fetching counsellors:', error);
        toast.error('Failed to fetch counsellors. Please try again later.');
      }
    };
  
  
    const editApmcAppointment = (appointment) => {
      setSelectedApmcAppointment(appointment);
      setDate(appointment.date);
      setQuantity(appointment.quantity);
      setCrop(appointment.crop);
    };
  
    // Reset input fields and selected counsellor state
    const resetEdit = () => {
      setSelectedApmcAppointment(null);
      setDate('');
      setQuantity('');
      setCrop('');
    };
  
  
    const RemoveRecord = (Id) => {
      var removeUrl = 'http://localhost:8080//farmer/deleteAppointment/' + Id;
      axios.delete(removeUrl).then((response) => {
        if (response.data.affectedRows !== undefined &&
          response.data.affectedRows > 0) {
          fetchApmcAppointment(); // here farmer_id
        }
        else {
          alert("Something went wrong!")
        }
      });
    }
  
    const updateApmcAppointment = async () => {
      if (!selectedApmcAppointment) {
        toast.error('No appointment selected for update');
        return;
      }
      if ( date === '' || quantity === '' || crop === '' ) {
        toast.warn('All fields are required');
        return;
      }
      try {
        const updatedApmcAppointment = {
          id: selectedApmcAppointment.id,
          date,
          quantity,
          crop
        };
        console.log(selectedApmcAppointment.id);
        const response = await axios.put(`http://localhost:8080/farmer/updateAppointment/${selectedApmcAppointment.id}`, updateApmcAppointment);
  
        if (response.status === 200) {
          toast.success('Your Appointment updated successfully');
          resetEdit();
        } else {
          toast.error('Failed to update appointment');
        }
      } catch (error) {
        console.error('Error updating your appointment:', error);
        toast.error('An error occurred while updating your appointment');
      }
    };
  
  
    const deleteApmcAppointment = async (appointmentId) => {
      try {
        console.log(appointmentId)
        const response = await axios.delete(`http://localhost:8080/farmer/deleteAppointment/${appointmentId}`);
  
        if (response.status === 200) {
          toast.success('You have deleted your appointment successfully');
            } else {
          toast.error('Failed to delete appointment');
        }
      } catch (error) {
        console.error('Error deleting appointment:', error);
        toast.error('An error occurred while deleting appointment');
      }
    };
  
  
    return (
      <>
        <Navbar />
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
                                        APMC Appointment
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
                  <table class='table table-bordered'>
                    <tbody>
                      <tr>
                        <td>Date</td>
                        <input type='date'
                          value={date}
                          name="Date"
                          onChange={(event) => setDate(event.target.value)} />
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <input type='number'
                          value={quantity}
                          name="Quantity"
                          onChange={(event) => setQuantity(event.target.value)} />
                    </tr>
                    <tr>
                        <td>Crop</td>
                        <input type='text'
                          value={crop}
                          name="Crop"
                          onChange={(event) => setCrop(event.target.value)} />
                     </tr>
                      <tr>
                        <td></td>
                        <td>
                          <button className='btn btn-info' onClick={resetEdit}>Reset</button>
                          {" "}
                          <button className='btn btn-success' onClick={updateApmcAppointment}>Update</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr></hr>
  
                <div class='table-responsive'>
                  <table class='table table-bordered'>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Crop</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {apmcAppointments.map(appointment => (
                        <tr key={appointment.id}>
                          <td>{appointment.id}</td>
                          <td>{appointment.date}</td>
                          <td>{appointment.quantity}</td>
                          <td>{appointment.crop}</td>
                          <td>
                            <button className='btn btn-warning'
                              onClick={() => { editApmcAppointment(appointment) }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button className='btn btn-danger'
                              onClick={() => { deleteApmcAppointment(appointment.id) }}
                            >
                              Delete
                            </button>
                          </td>
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
  
  export default ApmcAppointmentManagement