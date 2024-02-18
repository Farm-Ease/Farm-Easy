import React, { useState } from 'react'
import './SchemesPage.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"
import { Button } from '@mui/material';
import Navbar from '../../Components/navbar/Navbar1'

function Schemes() {

  return (
    <>
    <Navbar/>
   <div className='Schemes'>
        <div class="schemes-content">
                <div class="h2">Insurance Schemes </div>
                <div class="card ">
                    <div class="schemesForm">
                        <h5 class="card-title">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
                        <p class="card-text">Provides comprehensive insurance cover against failure of the crop thus helping in stabilising the income of the farmers.</p>
                        <a href="Scheme/insurance_1.html">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                        
                    </div>
                </div>
                {" "}
               <div class="card ">
                    <div class="schemesForm">
                        <h5 class="card-title">Prime Minister Jeevan Jyoti Bima Yojana</h5>
                        <p class="card-text">Life Insurance scheme with risk coverage of Rs. 2 Lakh in case of death of the insured, due to any reason.</p>
                        <a href="Scheme/insurance_2.html">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                    </div>
                </div>
                {" "}
               <div class="card ">
                    <div class="schemesForm">
                        <h5 class="card-title">Pradhan Mantri Suraksha Bima Yojana</h5>
                        <p class="card-text">An accident Insurance scheme, PMSBY offers a one-year accidental death and disability cover, which can be renewed annually.</p>
                        <a href="Scheme/insurance_3.html">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                    </div>
                </div>
                {" "}
               <div class="card ">
                    <div class="schemesForm">
                        <h5 class="card-title">Livestock insurance Scheme</h5>
                        <p class="card-text">Provides protection mechanism to the farmers against any eventual loss of their animals due to death.</p>
                        <a href="Scheme/insurance_4.html">Read More <i class="arrow right"></i><i class="arrow right"></i></a>
                    </div>
                </div>
   </div>   
   </div>
   </>
  )
}

export default Schemes;