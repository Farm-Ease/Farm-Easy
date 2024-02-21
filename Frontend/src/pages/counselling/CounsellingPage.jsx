import React, { useState } from 'react'
import './CounsellingPage.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material';
import Select from "react-select";
import Navbar from '../../Components/navbar/Navbar1'
import { toast } from 'react-toastify'
import CounsellorData from '../counselling/CounsellorData';

function CounsellingPage() {
  const [counsellors, setCounsellors] = useState([]);

  const [district, setDistrict] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const fetchCounsellor = async () => {
    setIsClicked(true);
    try {
      console.log(district);
      const response = await axios.get(`http://localhost:8080/farmer/getCounsellor/${district}`);
      console.log(response);
      const data = response.data;
      setCounsellors([data]);
      console.log(counsellors);
    } catch (error) {
      console.error('Error fetching counsellors:', error);
      toast.error('Failed to fetch counsellors. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="counsellingForm">

      {
        (isClicked) ? (<CounsellorData counsellors={counsellors} />) : (
            <><div className="header-text">
            Get counsellor
          </div>
          <input type='text' placeholder='Enter District' onChange={(event) => setDistrict(event.target.value)} value={district}></input>
          <input type="select" placeholder="Enter Crop" />
          <button className='btn btn-primary' type='submit' onClick={fetchCounsellor}>Search</button></>
          )
      }
      </div>
    </>
  )
}

export default CounsellingPage