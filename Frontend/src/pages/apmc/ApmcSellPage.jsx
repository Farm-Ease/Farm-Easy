import React, { useState } from 'react'
import './ApmcSellForm.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Select from "react-select";
import Navbar from '../../Components/navbar/Navbar1'
import { useFormData } from '../../FormDataContext/FormDataContext';
import { toast } from 'react-toastify';
function ApmcSellForm() {

  const {formData,updateFormData} = useFormData();
  const[farmer_id,setFarmer_id]=useState();
  const[quantity,setQuantity]=useState();
  const[crop,setCrop]=useState();
  const[date,setDate]=useState();
  // const [email,setEmail]=useState(undefined);
  // const [password,setPassword]=useState(undefined);
  const[stateName,setStateName]=useState();
  const[districtName,setDistrictName]=useState();
  var [districts,setDistricts]=useState([
    {
        "value":"no state selected","label":"no state selected"
    }
  ]);
  const navigate=useNavigate();
  // const[cookies,setCookies]=useCookies(["user"]);
  let statesAndDistricts=require("../../districtsAndStatesData.json");
    const states=statesAndDistricts.map(r=>r.state);
    const handlechange=(event)=>{
    setStateName(event.value);
    console.log(stateName);
    const findStateIndex=statesAndDistricts.findIndex(r=>r.state===event.value);
    districts=statesAndDistricts[findStateIndex].districts.map(r=>(
        {
            "value":r,"label":r
        }
    ))
    setDistricts(districts);
   }

    const state=states.map(r=>(
        {
            "value":r,"label":r
        }
    ))

  const addAppointment = async(body)=>{
    try{
      const response = await axios.post('http://localhost:8080/farmer/appointment',body);
      if(response.status===201){
        toast.success("Appointment Booked Succesfully");
        navigate("/receipt");
      }
    }catch(err){
      console.log("error ->",err);
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    // setFarmer_id(1);
    // setCrop(formData.crop);
    // setQuantity(formData.quantity);
    // setDate(formData.date);
    const body ={
      crop : formData.crop,
      date : formData.date,
      farmer_id : 1,
      quantity : formData.quantity
    }
    addAppointment(body);
    
  }
  return (
    <>
    <Navbar/>
    <div className="apmcSellForm">
		<div className="header-text">
			Book Appointment
		</div>
    <form onSubmit={handleSubmit}>
          <Select className="select" options={state} placeholder="select state..." onChange={(event) => {handlechange(event); {updateFormData({ state: event.value })}}} />
          <Select onChange={(event) => {setDistrictName(event.value);console.log(districtName);updateFormData({ district: event.value })}} className="select" placeholder="select district..." options={districts} />
          <input type="select" name ="crop" placeholder="Enter crop"  onChange={(e) => updateFormData({ crop: e.target.value })}/>
          <input type="number" name="quantity" id="" placeholder='Quantity' onChange={(e) => updateFormData({ quantity: e.target.value })}/>
          <input type="date" name="date" id="" onChange={(e) => updateFormData({ date: e.target.value })} />
          <Button  type="submit" id="button" variant="contained">Submit</Button>

        </form>
	</div>
  </>
  )
}

export default ApmcSellForm