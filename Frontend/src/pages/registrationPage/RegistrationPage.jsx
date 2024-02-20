// import "./RegistrationPage.css";
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import * as EmailValidator from "email-validator";
// import Select from "react-select";
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import axios from 'axios';
// import { RegisterUser } from '../../service/user'
// import WarningModal from "../../Components/warningModel/WarningModal";

// function Register() {
//     const [type,setType]=useState("text");

//     var [districts,setDistricts]=useState([
//         {
//             "value":"no state selected","label":"no state selected"
//         }
//     ]);
    
//     let statesAndDistricts=require("../../districtsAndStatesData.json");
//     const states=statesAndDistricts.map(r=>r.state);
//     const handlechange=(event)=>{
//     setStateName(event.value);
//     console.log(stateName);
//     const findStateIndex=statesAndDistricts.findIndex(r=>r.state===event.value);
//     districts=statesAndDistricts[findStateIndex].districts.map(r=>(
//         {
//             "value":r,"label":r
//         }
//     ))
//     setDistricts(districts);
//    }
//     const state=states.map(r=>(
//         {
//             "value":r,"label":r
//         }
//     ))


//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [number, setNumber] = useState('')
//   const [aadhaar, setAadhaar] = useState('')
//   const [dob, setDob] = useState('')
//   const [stateName, setStateName] = useState('')
//   const [districtName, setDistrictName] = useState('')
//   const [village, setVillage] = useState('')
  
//   // get the navigation function
//   const navigate = useNavigate()

//   const onSignup = async () => {
//     if (name.length == 0) {
//       toast.warn('enter name')
//     } else if (email.length == 0) {
//       toast.warn('enter email')
//     } else if (password.length == 0) {
//       toast.warn('enter password')
//     } else if (confirmPassword.length == 0) {
//       toast.warn('enter confirm password')
//     } else if (password != confirmPassword) {
//       toast.warn('password does not match')
//     } else if (number.length == 0) {
//       toast.warn('enter number')
//     } else if (aadhaar.length == 0) {
//       toast.warn('enter aadhaar')
//     } else if (dob.length == 0) {
//       toast.warn('enter date of birth')
//     } else if (state.length == 0) {
//       toast.warn('enter state')
//     } else if (districts.length == 0) {
//       toast.warn('enter state')
//     } else if (village.length == 0) {
//       toast.warn('enter state')
//     } else {
//       // make the api call
//       const result = await RegisterUser(name, email, number, aadhaar, dob, stateName, districtName, village, password)
//       if (result['status'] == 'success') {
//         toast.success('Successfully registered the user')
//         navigate('/')
//       } else {
//         toast.error(result['error'])
//       }
//     }
//   }
//     return (
//         <>
        
//         <div className="registerPage">
//             <div id="register">
//             <h1>Registration Form</h1>

//                 <form>
//                 <input type="text" placeholder="Your name.." required onChange={(event)=>{
//                     setName(event.target.value);
//                 }}/>
//                 <input type="email" placeholder="Your email.." required onChange={(event)=>{
//                     setEmail(event.target.value);
//                 }} />
//                 <input type="number" placeholder="Your Mobile number.." maxLength={10} required onChange={(event)=>{
//                     setNumber(event.target.value);
//                 }}/>
//                 <input type="text" placeholder="Your Aadhar number (xxx xxxx xxxx)" maxLength={14} required onChange={(event)=>{
//                     setAadhaar(event.target.value);
//                 }}/>
//                 <input onChange={(event)=>{
//                     setDob(event.target.value);
//                 }} type={type} placeholder="select dob" onFocus={()=>{
//                     setType("date");
//                 }} required />
//                 <Select className="select" options={state} placeholder="select state..." onChange={(event)=>handlechange(event)}/>
//                 <Select onChange={(event)=>setDistrictName(event.value)} className="select" placeholder="select district..." options={districts} />
//                 <input type="text" placeholder="Your Village.." required onChange={(event)=>{
//                     setVillage(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Your password.." required maxLength={6} onChange={(event)=>{
//                     setPassword(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Confirm password.." required maxLength={6} onChange={(event)=>{
//                     setConfirmPassword(event.target.value);
//                 }}/>
//                 <Button onClick={(event)=>{onSignup(event)}} type="submit" id="button" variant="contained">Register</Button>
//                 <p>Already have a account? <Link to='/login'>login</Link></p>
//                 </form>
//             </div>
//             </div>
//         </>
//     )
// }
// export default Register;

// import "./RegistrationPage.css";
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Select from 'react-select';
// import Button from '@mui/material/Button';
// import { RegisterUser } from '../../service/user'

// const Register = () => {
//   const [type,setType]=useState("text");
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [number, setNumber] = useState('');
//   const [aadhaar, setAadhaar] = useState('');
//   const [dob, setDob] = useState('');
//   const [stateName, setStateName] = useState('');
//   const [districtName, setDistrictName] = useState('');
//   const [village, setVillage] = useState('');
//   const [districts, setDistricts] = useState([
//     { value: 'no district selected', label: 'no district selected' }
//   ]);
//   const statesAndDistricts = require('../../districtsAndStatesData.json');
//   const states = statesAndDistricts.map(r => ({ value: r.state, label: r.state }));

//   const navigate = useNavigate();

//   const handleStateChange = (selectedState) => {
//     setStateName(selectedState.value);
//     const stateIndex = statesAndDistricts.findIndex(r => r.state === selectedState.value);
//     const selectedDistricts = statesAndDistricts[stateIndex].districts.map(district => ({
//       value: district, label: district
//     }));
//     setDistricts(selectedDistricts);
//   }

//   const onSignup = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     // Perform form validation
//     if (!name || !email || !password || !confirmPassword || !number || !aadhaar || !dob || !stateName || !districtName || !village) {
//       toast.warn('Please fill in all fields');
//       return;
//     }
//     if (password !== confirmPassword) {
//       toast.warn('Passwords do not match');
//       return;
//     }
//     // Make the API call to register the user
//     const result = await RegisterUser(name, email, number, aadhaar, dob, stateName, districtName, village, password);
//     if (result.status === 'success') {
//       toast.success('Successfully registered the user');
//       navigate('/');
//     } else {
//       toast.error(result.error);
//     }
//   }

//   return (
//     <div className="registerPage">
//       <div id="register">
//         <h1>Registration Form</h1>
//         <form >
          
//           <input type="text" placeholder="Your name.." required onChange={(event)=>{
//                     setName(event.target.value);
//                 }}/>
//                 <input type="email" placeholder="Your email.." required onChange={(event)=>{
//                     setEmail(event.target.value);
//                 }} />
//                 <input type="number" placeholder="Your Mobile number.." maxLength={10} required onChange={(event)=>{
//                     setNumber(event.target.value);
//                 }}/>
//                 <input type="text" placeholder="Your Aadhar number (xxx xxxx xxxx)" maxLength={14} required onChange={(event)=>{
//                     setAadhaar(event.target.value);
//                 }}/>
//                 <input onChange={(event)=>{
//                     setDob(event.target.value);
//                 }} type={type} placeholder="select dob" onFocus={()=>{
//                     setType("date");
//                 }} required />
//                 <Select className="select" options={states} placeholder="Select state..." onChange={handleStateChange} />
//           <Select className="select" options={districts} placeholder="Select district..." onChange={(selectedDistrict) => setDistrictName(selectedDistrict.value)} />
//                 <input type="text" placeholder="Your Village.." required onChange={(event)=>{
//                     setVillage(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Your password.." required maxLength={6} onChange={(event)=>{
//                     setPassword(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Confirm password.." required maxLength={6} onChange={(event)=>{
//                     setConfirmPassword(event.target.value);
//                 }}/>
//           <Button type="submit" id="button" variant="contained" onClick={onSignup}>Register</Button>
//           <p>Already have an account? <Link to='/login'>Login</Link></p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import "./RegistrationPage.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import Button from '@mui/material/Button';
import { RegisterUser } from '../../service/user';

const Register = () => {
  const [type,setType]=useState("text");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: '',
    aadhaar: '',
    dob: '',
    stateName: '',
    districtName: '',
    village: '',
  });

  const [districts, setDistricts] = useState([
    { value: 'no district selected', label: 'no district selected' }
  ]);
  const statesAndDistricts = require('../../districtsAndStatesData.json');
  const states = statesAndDistricts.map(r => ({ value: r.state, label: r.state }));

  const navigate = useNavigate();

  const handleStateChange = (selectedState) => {
    const stateIndex = statesAndDistricts.findIndex(r => r.state === selectedState.value);
    const selectedDistricts = statesAndDistricts[stateIndex].districts.map(district => ({
      value: district, label: district
    }));
    setDistricts(selectedDistricts);
    setFormData({ ...formData, stateName: selectedState.value });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const onSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Perform form validation
    const { name, email, password, confirmPassword, number, aadhaar, dob, stateName, districtName, village } = formData;
    // if (!name || !email || !password || !confirmPassword || !number || !aadhaar || !dob || !stateName || !districtName || !village) {
    //   toast.warn('Please fill in all fields');
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   toast.warn('Passwords do not match');
    //   return;
    // }
    if (name.length == 0) {
      toast.warn('enter name')
    } else if (email.length == 0) {
      toast.warn('enter email')
    } else if (password.length == 0) {
      toast.warn('enter password')
    } else if (confirmPassword.length == 0) {
      toast.warn('enter confirm password')
    } else if (password != confirmPassword) {
      toast.warn('password does not match')
    } else if (number.length == 0) {
      toast.warn('enter number')
    } else if (aadhaar.length == 0) {
      toast.warn('enter aadhaar')
    } else if (dob.length == 0) {
      toast.warn('enter date of birth')
    } else if (stateName.length == 0) {
      toast.warn('enter state')
    } else if (districtName.length == 0) {
      toast.warn('enter state')
    } else if (village.length == 0) {
      toast.warn('enter state')
    }
    // Make the API call to register the user
    const result = await RegisterUser(name, email, number, aadhaar, dob, stateName, districtName, village, password);
    if (result.status === 'success') {
      toast.success('Successfully registered the user');
      navigate('/');
    } else {
      toast.error(result.error);
    }
  }

  return (
    <div className="registerPage">
      <div id="register">
        <h1>Registration Form</h1>
        <form onSubmit={onSignup}>
          <input type="text" name="name" placeholder="Your name.." value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your email.." value={formData.email} onChange={handleChange} required />
          <input type="number" name="number" placeholder="Your Mobile number.." maxLength={10} value={formData.number} onChange={handleChange} required />
          <input type="text" name="aadhaar" placeholder="Your Aadhar number (xxx xxxx xxxx)" maxLength={14} value={formData.aadhaar} onChange={handleChange} required/>
          <input type={type} name="dob" placeholder="select dob" onFocus={()=>{setType("date");}} onChange={handleChange} required />
          <Select className="select" options={states} placeholder="Select state..." onChange={handleStateChange} />
          <Select className="select" options={districts} placeholder="Select district..." onChange={(selectedDistrict) => setFormData({ ...formData, districtName: selectedDistrict.value })} />
          <input type="text" name="village" placeholder="Your Village.." value={formData.village} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Your password.." value={formData.password} onChange={handleChange} required/>
          <input type="password" name="confirmPassword" placeholder="Confirm password.." value={formData.confirmPassword} onChange={handleChange} required/>
          <Button type="submit" id="button" variant="contained">Register</Button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;

