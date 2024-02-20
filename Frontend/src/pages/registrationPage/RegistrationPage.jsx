import "./RegistrationPage.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
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

    if (!name || name.length == 0) {
      toast.warn('enter name')
    } else if ( !email || email.length == 0) {
      toast.warn('enter email')
    } else if (!password || password.length == 0) {
      toast.warn('enter password')
    } else if (!confirmPassword || confirmPassword.length == 0) {
      toast.warn('enter confirm password')
    } else if (password != confirmPassword) {
      toast.warn('password does not match')
    } else if (!number || number.length == 0) {
      toast.warn('enter number')
    } else if (!aadhaar || aadhaar.length == 0) {
      toast.warn('enter aadhaar')
    } else if (!dob || dob.length == 0) {
      toast.warn('enter date of birth')
    } else if (!stateName || stateName.length == 0) {
      toast.warn('enter state')
    } else if (!districtName || districtName.length == 0) {
      toast.warn('enter state')
    } else if (!village || village.length == 0) {
      toast.warn('enter state')
    }
    // Make the API call to register the user
    const result = await RegisterUser(name, email, number, aadhaar, dob, stateName, districtName, village, password);
    console.log(result);
    if (result.status === 200  || result.status === 201) {
      toast.success('Successfully registered the user');
      navigate('/login');
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
          <Button type="submit" id="button" variant="contained" >Register</Button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;