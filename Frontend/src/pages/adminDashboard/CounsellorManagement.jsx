import React, { useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import {useEffect } from 'react'; 
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify'
import Navbar from '../../Components/navbar/Navbar1'
import { AddCounsellor } from '../../service/admin';
function CounsellorManagement() {


    var [districts,setDistricts]=useState([
        {
            "value":"no state selected","label":"no state selected"
        }
    ]);
    
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
    const[Id,setId] = useState('default')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNo, setMobileNumber] = useState('')
    const [stateName, setStateName] = useState('')
    const [districtName, setDistrictName] = useState('')
    const [village, setVillage] = useState('')
    const [password,setPassword]=useState('')

    //const[counsellor,setCounsellor] = ({"Id":Id,"Name":name,"Email":email,"MobileNo":mobileNo,"State":stateName,"District":districtName,"Village":village,"Password":password})
  
    const navigate = useNavigate()

    const OnAddCounsellor= async ()=>{
      if(Id==null){
        toast.warn('enter id')
      }
      else if (name.length == 0) {
        toast.warn('enter name')
      }else if (email.length == 0) {
        toast.warn('enter email')
      } else if (mobileNo.length == 0) {
        toast.warn('enter  password')
      }  else if (stateName.length == 0) {
        toast.warn('enter state')
      } else if (districtName.length == 0) {
        toast.warn('enter district')
      } else if (village.length == 0) {
        toast.warn('enter village')
      } 
      else {
        const result = await AddCounsellor(name, email, mobileNo, stateName, districtName, village, password)
      if (result['status'] == 'success') {
        toast.success('Successfully registered the Counsellor')
        navigate('/')
      } else {
        toast.error(result['error'])
      }
    }
    }

    // const Reset=()=>{
    //     setCounsellor(({"Id":"","FirstName":"","LastName":"","Email":"","MobileNo":"","State":"","District":"","Village":"","Password":""}))
    //   }

      const OnRemoveCounsellor=async (Id)=>{
        if(Id==null){
          toast.warn('enter id')
        }
        else {
          const result = await OnRemoveCounsellor(Id)
        if (result['status'] == 'success') {
          toast.success('Successfully deleted the Counsellor')
          navigate('/')
        } else {
          toast.error(result['error'])
        }
        }
      }
      
        const OnGetRecords = async () => 
        {
          // if(counsellors ==null){
          //   toast.warn('No data found')
          // }
          // else{
            const result = await OnGetRecords()
            if(result['status']=='success'){
              toast.sucess('Success')
              navigate('/')
            }
            else{
              toast.error(result['error'])
            }
          //}
        }


    return (
    <>
    <Navbar/>
    <div class="container-fluid">
      <div class="row justify-content-md-center">
      <nav class="col-md-auto col-lg-2 d-none d-md-block bg-light sidebar">
        {/* <nav class="col-md-2 d-none d-md-block bg-light sidebar"> */}
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Farmers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="mngcounsellor">
                  <span data-feather="shopping-cart"></span>
                  Counsellor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  APMC Appointments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
                                <input type = 'text' 
                                value={name}
                                name="Name"
                                onChange={(event)=>setName(event.value)}/>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <input type = 'text' 
                                value={email}
                                name="Email"
                                onChange={(event)=>setEmail(event.value)}/>
                          </tr>
                          <tr>
                            <td>MobileNo</td>
                                <input type = 'text' 
                                value={mobileNo}
                                name="MobileNumber"
                                onChange={(event)=>setMobileNumber(event.value)}/>                          </tr>
                          <tr>
                            <td>State</td>
                                <input type = 'text' 
                                value={stateName}
                                name="State"
                                onChange={(event)=>setStateName(event.value)}/>                          </tr>
                          <tr>
                            <td>District</td>
                              <input type = 'text' 
                              value={districtName}
                              name="District"
                              onChange={(event)=>setDistrictName(event.value)}/>                          </tr>
                          <tr>
                            <td>Village</td>
                              <input type = 'text' 
                              value={village}
                              name="Village"
                              onChange={(event)=>setVillage(event.value)}/>                          </tr>
                          <tr>
                            <td>Password</td>
                              <input type = 'text' 
                              value={password}
                              name="Password"
                              onChange={(event)=>setPassword(event.value)}/>                          </tr>

                          <tr>
                            <td></td>
                            <td>
                                <button className='btn btn-primary'onClick={OnAddCounsellor}>Add Record</button>
                                {" "}
                                {/* <button className='btn btn-info'onClick={OnReset}>Reset</button>
                                {" "}
                                <button className='btn btn-success'onClick={OnUpdateRecord}>Update</button> */}
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
                            {
                              // counsellors.map((counsellor)=>
                              // {
                              //   return (<tr key={Id}>
                              //     <td>{Id}</td>
                              //     <td>{name}</td>
                              //     <td>{email}</td>
                              //     <td>{mobileNo}</td>
                              //     <td>{stateName}</td>
                              //     <td>{districtName}</td>
                              //     <td>{village}</td>
                              //     <td>{password}</td>
                              //     <td>
                              //           <button className='btn btn-warning'
                              //           //onClick={()=>{EditRecord(counsellor)}}
                              //           >
                              //               Edit
                              //               </button>
                              //       </td>
                                    
                              //     <td>
                              //           <button className='btn btn-danger'
                              //           //</td>onClick={()=>{RemoveRecord(counsellor.Id)}}
                              //           >Delete
                              //           </button>
                              //       </td>
                              //   </tr>)
                              // })
                            }
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