import React, { useState } from 'react'
import './CounsellingPage.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Select from "react-select";
import Navbar from '../../Components/navbar/Navbar1'

function CounsellingPage() {
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
    <div className="counsellingForm">
		<div className="header-text">
			Get counsellor
		</div>
    <form method='POST'>
            <Select onChange={(event)=>handlechange(event)} className="select" placeholder="select state..." options={state}/>
            <Select onChange={(event)=>setDistrictName(event.value)} className="select" placeholder="select district..." options={districts}/>
            <input type="select" placeholder="Enter crop"/>
             <Button onClick={(event)=>{handleSubmit(event)}} type="submit" id="button" variant="contained">Submit</Button>
            </form>
	</div>
  </>
  )
}

export default CounsellingPage