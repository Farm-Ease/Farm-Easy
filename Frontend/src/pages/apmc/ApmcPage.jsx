import React, { useState } from 'react'
import './ApmcForm.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar from '../../Components/navbar/Navbar1'

function ApmcPage() {
  const [email,setEmail]=useState(undefined);
  const [password,setPassword]=useState(undefined);
  const navigate=useNavigate();

  return (
    <>
    <Navbar/>
    <div className="apmcForm">
      <div>
        <button className='bt-1' onClick={()=>{navigate("/apmcSell")}}>Sell Crops</button>
        {" "}
        <button className='bt-1' onClick={()=>{navigate("/apmcBuy")}}>Buy Products</button>
        </div>
      </div>
      </>
  )
}

export default ApmcPage