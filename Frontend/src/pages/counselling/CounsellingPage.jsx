import React, { useState } from 'react'
import './CounsellingPage.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material';
import Select from "react-select";
import Navbar from '../../Components/navbar/Navbar1'
import { toast } from 'react-toastify'
import CounsellorData from '../counsellorData/CounsellorData';

function CounsellingPage() {
  const [counsellors, setCounsellors] = useState([]);
  // // const [email,setEmail]=useState(undefined);
  // // const [password,setPassword]=useState(undefined);
  // // const[stateName,setStateName]=React.useState();
  // // const[districtName,setDistrictName]=useState();
  // // const [districts, setDistricts] = useState([
  // //   { value: 'no district selected', label: 'no district selected' }
  // // ]);
  // // const handleStateChange = (selectedState) => {
  // //   const stateIndex = statesAndDistricts.findIndex(r => r.state === selectedState.value);
  // //   const selectedDistricts = statesAndDistricts[stateIndex].districts.map(district => ({
  // //     value: district, label: district
  // //   }));
  // //   setDistricts(selectedDistricts);
  // //   setFormData({ ...formData, stateName: selectedState.value });
  // // }
  // // const handleChange = (event) => {
  // //   const { name, value } = event.target;
  // //   setFormData({ ...formData, [name]: value });
  // // }
  // // // var [districts,setDistricts]=useState([
  // // //   {
  // // //       "value":"no state selected","label":"no state selected"
  // // //   }
  // // // ]);
  // // const navigate=useNavigate();
  // // let statesAndDistricts=require("../../districtsAndStatesData.json");
  // // const states=statesAndDistricts.map(r=>r.state);

  // // const handlechange=(event)=>{
  // // setStateName(event.target.value);
  // // console.log(stateName);
  // // const findStateIndex=statesAndDistricts.findIndex(r=>r.state===event.target.value);
  // // districts=statesAndDistricts[findStateIndex].districts.map(r=>(
  // //     {
  // //         "value":r,"label":r
  // //     }
  // // ))
  // // setDistricts(districts);
  // // }

  // // const state=states.map(r=>(
  // //     {
  // //         "value":r,"label":r
  // //     }
  // // ))
  // // const fetchCounsellor = async () => {
  // //   try {

  // //     const response = await fetch(`http://localhost:8080/admin/getCounsellors/${districtName}`);
  // //     const data = await response.json();
  // //     setCounsellors(data);
  // //     console.log(counsellors);
  // //   } catch (error) {
  // //     console.error('Error fetching counsellors:', error);
  // //     toast.error('Failed to fetch counsellors. Please try again later.');
  // //   }
  // // };

  // // const handleSubmit=(event)=>{
  // //     fetchCounsellor();
  // // }



  // const [type, setType] = useState("text");
  // const [formData, setFormData] = useState({
  //   stateName: '',
  //   districtName: ''
  // });

  // const [districts, setDistricts] = useState([
  //   { value: 'no district selected', label: 'no district selected' }
  // ]);
  // const statesAndDistricts = require('../../districtsAndStatesData.json');
  // const states = statesAndDistricts.map(r => ({ value: r.state, label: r.state }));

  // const navigate = useNavigate();

  // const handleStateChange = (selectedState) => {
  //   const stateIndex = statesAndDistricts.findIndex(r => r.state === selectedState.value);
  //   const selectedDistricts = statesAndDistricts[stateIndex].districts.map(district => ({
  //     value: district, label: district
  //   }));
  //   setDistricts(selectedDistricts);
  //   setFormData({ ...formData, stateName: selectedState.value });
  // }

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // }



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
          <input type='text' placeholder='District' onChange={(event) => setDistrict(event.target.value)} value={district}></input>
          <input type="select" placeholder="Enter crop" />
          <button className='btn btn-primary' type='submit' onClick={fetchCounsellor}>Search</button></>
          )
      }
      </div>
    </>
  )
}

export default CounsellingPage