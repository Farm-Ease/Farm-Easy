import React, { useState } from 'react'
import './ApmcSellForm.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Select from "react-select";
import Navbar from '../../Components/navbar/Navbar1'

function ApmcSellForm() {
  const [email,setEmail]=useState(undefined);
  const [password,setPassword]=useState(undefined);
  const[stateName,setStateName]=React.useState();
  const[districtName,setDistrictName]=useState();
  var [districts,setDistricts]=useState([
    {
        "value":"no state selected","label":"no state selected"
    }
  ]);
  const navigate=useNavigate();
  const[cookies,setCookies]=useCookies(["user"]);
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
  const handleSubmit=(event)=>{

  }
  return (
    <>
    <Navbar/>
    <div className="apmcSellForm">
		<div className="header-text">
			Book Appointment
		</div>
    <form method='POST'>
            <Select className="select" options={state} placeholder="select state..." onChange={(event)=>handlechange(event)}/>
                <Select onChange={(event)=>setDistrictName(event.value)} className="select" placeholder="select district..." options={districts} />
            <input type="select" placeholder="Enter crop"/>
            <input type="number" name="quantity" id="" placeholder='Quantity'/>
            <input type="date" name="date" id="" />
             <Button onClick={(event)=>{handleSubmit(event)}} type="submit" id="button" variant="contained">Submit</Button>
            </form>
	</div>
  </>
  )
}

export default ApmcSellForm