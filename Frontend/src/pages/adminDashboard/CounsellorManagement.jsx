import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'
import { AddCounsellor } from '../../service/admin';
function CounsellorManagement() {
  const[counsellors,setCounsellors] = useState([]);
  //const[counsellor,setCounsellor] = ({"Id":"","Name":"","Email":"","MobileNo":"","State":"","District":"","Village":"","Password":""})

  useEffect(() => {
      // Fetch data from the server
      fetchCounsellor();
  }, []);

  var [districts, setDistricts] = useState([
    {
      "value": "no state selected", "label": "no state selected"
    }
  ]);

  let statesAndDistricts = require("../../districtsAndStatesData.json");
  const states = statesAndDistricts.map(r => r.state);
  const handlechange = (event) => {
    setStateName(event.value);
    console.log(stateName);
    const findStateIndex = statesAndDistricts.findIndex(r => r.state === event.value);
    districts = statesAndDistricts[findStateIndex].districts.map(r => (
      {
        "value": r, "label": r
      }
    ))
    setDistricts(districts);
  }
  const state = states.map(r => (
    {
      "value": r, "label": r
    }
  ))
  const [Id, setId] = useState('default')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNumber] = useState('')
  const [stateName, setStateName] = useState('')
  const [districtName, setDistrictName] = useState('')
  const [village, setVillage] = useState('')
  const [password, setPassword] = useState('')

  //const[counsellor,setCounsellor] = ({"Id":Id,"Name":name,"Email":email,"MobileNo":mobileNo,"State":stateName,"District":districtName,"Village":village,"Password":password})

  const navigate = useNavigate()

  const OnAddCounsellor = async () => {
    if (!name || name.length === 0) {
      toast.warn('Please enter a name');
    } else if (!email || email.length === 0) {
      toast.warn('Please enter an email');
    } else if (!mobileNo || mobileNo.length === 0) {
      toast.warn('Please enter a mobile number');
    } else if (!stateName || stateName.length === 0) {
      toast.warn('Please enter a state');
    } else if (!districtName || districtName.length === 0) {
      toast.warn('Please enter a district');
    } else if (!village || village.length === 0) {
      toast.warn('Please enter a village');
    } else if (!password || password.length === 0) {
      toast.warn('Please enter a password');
    } else {
      const result = await AddCounsellor(name, email, mobileNo, stateName, districtName, village, password);
      if (result['status'] === 'success') {
        toast.success('Successfully registered the Counsellor');
        navigate('/');
      } else {
        toast.error(result['error']);
      }
    }
  };
  
  
  
  const fetchCounsellor = async () => {
    try {
        const response = await fetch('http://localhost:8080/admin/getCounsellors');
        const data = await response.json();
        setCounsellors(data);
        console.log(counsellors);
    } catch (error) {
        console.error('Error fetching counsellors:', error);
        // Handle error
        toast.error('Failed to fetch counsellors. Please try again later.');
    }
};

const [selectedCounsellor, setSelectedCounsellor] = useState(null);

// Function to populate input fields with selected counsellor's details
const editCounsellor = (counsellor) => {
  setSelectedCounsellor(counsellor);
  setName(counsellor.name);
  setEmail(counsellor.email);
  setMobileNumber(counsellor.mobileNo);
  setStateName(counsellor.state);
  setDistrictName(counsellor.district);
  setVillage(counsellor.village);
  setPassword(counsellor.password);
};

// Reset input fields and selected counsellor state
const resetEdit = () => {
  setSelectedCounsellor(null);
  setName('');
  setEmail('');
  setMobileNumber('');
  setStateName('');
  setDistrictName('');
  setVillage('');
  setPassword('');
};


const RemoveRecord=(Id)=>{
    var removeUrl = 'http://localhost:8080/admin/deleteCounsellor' + "/" + Id ; 
    axios.delete(removeUrl).then((response)=>{
      if(response.data.affectedRows!==undefined && 
          response.data.affectedRows>0){
            fetchCounsellor();
      }
      else{
          alert("Something went wrong!")
      }
    });
  }

  const updateCounsellor = async () => {
    if (!selectedCounsellor) {
        toast.error('No counsellor selected for update');
        return;
    }

    // Check if any of the required fields are empty
    if (name === '' || email === '' || mobileNo === '' || stateName === '' || districtName === '' || village === '' || password === '') {
        toast.warn('All fields are required');
        return;
    }

    try {
        const updatedCounsellor = {
            id: selectedCounsellor.id,
            name,
            email,
            mobileNo,
            state: stateName,
            district: districtName,
            village,
            password
        };

        // Send a PUT request to update the counsellor
        const response = await axios.put(`/api/counsellors/${selectedCounsellor.id}`, updatedCounsellor);

        if (response.status === 200) {
            toast.success('Counsellor updated successfully');
            // Clear the form fields and reset the selected counsellor state
            resetEdit();
        } else {
            toast.error('Failed to update counsellor');
        }
    } catch (error) {
        console.error('Error updating counsellor:', error);
        toast.error('An error occurred while updating counsellor');
    }
};


  return (
    <>
      <Navbar/>
        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="/adminDashboard">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngfarmer">
                      <span data-feather="file"></span>
                      Farmers
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngcounsellor">
                      <span data-feather="shopping-cart"></span>
                      Counsellor
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngappointment">
                      <span data-feather="users"></span>
                      APMC Appointments
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/adminDashboard/mngproduct">
                      <span data-feather="bar-chart-2"></span>
                      Products
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-auto col-lg-10 ml-sm-auto pt-3 px-4">
            {/* </div><main role="main" class="col-md-8 ml-sm-auto pt-3 px-4"> */}
            <div className='container'>
              <center><h1>Welcome to dashboard!</h1></center>
              <hr></hr>

              <div class='table-responsive'>
                <table class='table table-bordered'>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <input type='text'
                        value={name}
                        name="Name"
                        onChange={(event) => setName(event.target.value)} />
                    </tr>
                    <tr>
                      <td>Email</td>
                      <input type='text'
                        value={email}
                        name="Email"
                        onChange={(event) => setEmail(event.target.value)} />
                    </tr>
                    <tr>
                      <td>MobileNo</td>
                      <input type='text'
                        value={mobileNo}
                        name="MobileNumber"
                        onChange={(event) => setMobileNumber(event.target.value)} />                          </tr>
                    <tr>
                      <td>State</td>
                      <input type='text'
                        value={stateName}
                        name="State"
                        onChange={(event) => setStateName(event.target.value)} />                          </tr>
                    <tr>
                      <td>District</td>
                      <input type='text'
                        value={districtName}
                        name="District"
                        onChange={(event) => setDistrictName(event.target.value)} />                          </tr>
                    <tr>
                      <td>Village</td>
                      <input type='text'
                        value={village}
                        name="Village"
                        onChange={(event) => setVillage(event.target.value)} />                          </tr>
                    <tr>
                      <td>Password</td>
                      <input type='text'
                        value={password}
                        name="Password"
                        onChange={(event) => setPassword(event.target.value)} />                          </tr>

                    <tr>
                      <td></td>
                      <td>
                        <button className='btn btn-primary' onClick={OnAddCounsellor}>Add Record</button>
                        {" "}
                        <button className='btn btn-info'onClick={resetEdit}>Reset</button>
                        {" "}
                        <button className='btn btn-success'onClick={updateCounsellor}>Update</button>
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
                      <th>Name</th>
                      <th>Email</th>
                      <th>MobileNo</th>
                      <th>State</th>
                      <th>District</th>
                      <th>Village</th>
                      <th>Password</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {counsellors.map(counsellor => (
                            <tr key={counsellor.id}>
                            <td>{counsellor.id}</td>
                            <td>{counsellor.name}</td>
                            <td>{counsellor.email}</td>
                            <td>{counsellor.mobileNo}</td>
                            <td>{counsellor.state}</td>
                            <td>{counsellor.district}</td>
                            <td>{counsellor.village}</td>
                            <td>{counsellor.password}</td>
                            <td>
                                <button className='btn btn-warning'
                                    onClick={() => { editCounsellor(counsellor) }}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-danger'
                                    onClick={() => { RemoveRecord(counsellor.Id) }}
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


  // const[counsellors,setCounsellors] = useState([]);
  // const[counsellor,setCounsellor] = ({"Id":"","FirstName":"","LastName":"","Email":"","MobileNo":"","State":"","District":"","Village":"","Password":""})

  // const serverUrl = "http://127.0.0.1:9999/emps";


  // const navigate=useNavigate();

  // const onTextChanged=(args)=>{
  //   var copyOfCounsellor={...counsellor};
  //   copyOfCounsellor[args.target.name] = args.target.value;
  //   setCounsellor(copyOfCounsellor);
  // }

  // const AddRecord=()=>{
  //   console.log(counsellor);
  //   axios.post(serverUrl,counsellor).then((response)=>{
  //     if(response.data.affectedRows!==undefined && response.data.affectedRows>0){
  //       Reset();
  //       GetRecords();
  //     }
  //     else{
  //       alert("Something went wrong")
  //     }
  //   });
  // }
  // const UpdateRecord=()=>{
  //   console.log(counsellor);
  //   var updateUrl = serverUrl + "/" + counsellor.Id ; 
  //   axios.put(updateUrl,counsellor).then((response)=>{
  //       if(response.data.affectedRows!==undefined && 
  //           response.data.affectedRows>0){
  //               Reset();
  //               GetRecords();
  //       }
  //       else{
  //           alert("Something went wrong!")
  //       }
  //   });
  // }

  // const Reset=()=>{
  //   setCounsellor(({"Id":"","FirstName":"","LastName":"","Email":"","MobileNo":"","State":"","District":"","Village":"","Password":""}))
  // }

  // const EditRecord=(counsellorToEdit)=>{
  //   setCounsellor({...counsellorToEdit});
  // }

  // const RemoveRecord=(Id)=>{
  //   var removeUrl = serverUrl + "/" + Id ; 
  //   axios.delete(removeUrl).then((response)=>{
  //     if(response.data.affectedRows!==undefined && 
  //         response.data.affectedRows>0){
  //           GetRecords();
  //     }
  //     else{
  //         alert("Something went wrong!")
  //     }
  //   });
  // }

  // const GetRecords = () => 
  // {
  //   axios.get(serverUrl).then((response)=>{
  //       setCounsellors(response.data);
  //   });
  // }

  // // const DoLogout = () =>{
  // //   window.sessionStorage.removeItem("isUserLoggedIn");
  // //   navigate.push("/");
  // // }

  // useEffect(()=>{
  //   GetRecords();
  // },[])

  // return (
  //   <>
  //   <Navbar/>
  //   <div class="container-fluid">
  //     <div class="row justify-content-md-center">
  //     <nav class="col-md-auto col-lg-2 d-none d-md-block bg-light sidebar">
  //       {/* <nav class="col-md-2 d-none d-md-block bg-light sidebar"> */}
  //         <div class="sidebar-sticky">
  //           <ul class="nav flex-column">
  //             <li class="nav-item">
  //               <a class="nav-link active" href="#">
  //                 <span data-feather="home"></span>
  //                 Dashboard <span class="sr-only">(current)</span>
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 <span data-feather="file"></span>
  //                 Farmers
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="mngcounsellor">
  //                 <span data-feather="shopping-cart"></span>
  //                 Counsellor
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 <span data-feather="users"></span>
  //                 APMC Appointments
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#">
  //                 <span data-feather="bar-chart-2"></span>
  //                 Products
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>

  //       <main role="main" class="col-md-auto col-lg-10 ml-sm-auto pt-3 px-4">
  //       {/* </div><main role="main" class="col-md-8 ml-sm-auto pt-3 px-4"> */}
  //         <div className='container'>
  //               <center><h1>Welcome to dashboard!</h1></center>
  //               <hr></hr>

  //               <div class='table-responsive'>
  //                   <table class='table table-bordered'>
  //                       <tbody>
  //                         <tr>
  //                           <td>Id</td>
  //                           <td>
  //                               <input type = 'text' 
  //                               value={counsellor.Id}
  //                               name="Id"
  //                               onChange={onTextChanged}/>
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>FirstName</td>
  //                           <td>
  //                               <input type = 'text' 
  //                               value={counsellor.FirstName}
  //                               name="FirstName"
  //                               onChange={onTextChanged}/>
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>LastName</td>
  //                               <input type = 'text' 
  //                               value={counsellor.LastName}
  //                               name="LastName"
  //                               onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>Email</td>
  //                           <input type = 'text' 
  //                               value={counsellor.Email}
  //                               name="Email"
  //                               onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>MobileNo</td>
  //                               <input type = 'text' 
  //                               value={counsellor.MobileNo}
  //                               name="MobileNumber"
  //                               onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>State</td>
  //                               <input type = 'text' 
  //                               value={counsellor.State}
  //                               name="State"
  //                               onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>District</td>
  //                             <input type = 'text' 
  //                             value={counsellor.District}
  //                             name="District"
  //                             onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>Village</td>
  //                             <input type = 'text' 
  //                             value={counsellor.Village}
  //                             name="Village"
  //                             onChange={onTextChanged}/>
  //                         </tr>
  //                         <tr>
  //                           <td>Password</td>
  //                             <input type = 'text' 
  //                             value={counsellor.Password}
  //                             name="Password"
  //                             onChange={onTextChanged}/>
  //                         </tr>

  //                         <tr>
  //                           <td></td>
  //                           <td>
  //                               <button className='btn btn-primary'onClick={AddRecord}>Add Record</button>
  //                               {" "}
  //                               <button className='btn btn-info'onClick={Reset}>Reset</button>
  //                               {" "}
  //                               <button className='btn btn-success'onClick={UpdateRecord}>Update</button>
  //                           </td>
  //                         </tr>
  //                         </tbody>
  //                   </table>
  //               </div>
  //               <hr></hr>

  //               <div class='table-responsive'>
  //                   <table class='table table-bordered'>
  //                       <thead>
  //                           <tr>
  //                               <th>Id</th>
  //                               <th>FirstName</th>
  //                               <th>LastName</th>
  //                               <th>Email</th>
  //                               <th>MobileNo</th>
  //                               <th>State</th>
  //                               <th>District</th>
  //                               <th>Village</th>
  //                               <th>Password</th>
  //                               <th></th>
  //                               <th></th>
  //                           </tr>
  //                       </thead>
  //                       <tbody>
  //                           {
  //                             counsellors.map((counsellor)=>
  //                             {
  //                               return (<tr key={counsellor.Id}>
  //                                 <td>{counsellor.Id}</td>
  //                                 <td>{counsellor.FirstName}</td>
  //                                 <td>{counsellor.LastName}</td>
  //                                 <td>{counsellor.Email}</td>
  //                                 <td>{counsellor.MobileNo}</td>
  //                                 <td>{counsellor.State}</td>
  //                                 <td>{counsellor.District}</td>
  //                                 <td>{counsellor.Village}</td>
  //                                 <td>{counsellor.Password}</td>
  //                                 <td>
  //                                       <button className='btn btn-warning'
  //                                       onClick={()=>{EditRecord(counsellor)}}>
  //                                           Edit
  //                                           </button>
  //                                   </td>

  //                                   <td>
  //                                       <button className='btn btn-danger'onClick={()=>
  //                                           {RemoveRecord(counsellor.Id)}}>Delete</button>
  //                                   </td>
  //                               </tr>)
  //                             })
  //                           }
  //                       </tbody>
  //                   </table>
  //               </div>
  //               </div>
  //       </main>
  //     </div>
  //   </div>
  // </>
  // )
}

export default CounsellorManagement