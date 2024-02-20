// import React,{ useState , useEffect} from "react";
// import axios from "axios";
// import { toast } from 'react-toastify'
// import Navbar from '../../Components/navbar/Navbar1';
// import './CounsellorDashboard.css'

// function CounsellorProfile() {
//     const [counsellor, setCounsellor] = useState(null);
//     const[id,setId]=useState(1);
//     useEffect(() => {
//         fetchCounsellor();
//     }, []);

//     const fetchCounsellor = async () => {
//         try {
//             setId(3);
//             const response = await fetch(`http://localhost:8080/counsellor/3`);
//             const data =await response.json();
//             console.log(data);
//             // if (data.status === 200) {
                
//             //     console.log(response);
//             //     setCounsellor(data);
//             //     console.log(counsellor);
//             // }
//         } catch (error) {
//             console.error('Error fetching counsellors:', error);
//             toast.error('Failed to fetch counsellors. Please try again later.');
        
//         }
//     };

//     return (
//         <>
//       <Navbar />
//       <div class="container-fluid">
//         <div class="row">
//           <nav class="col-md-2 d-none d-md-block bg-light sidebar">
//             <div class="sidebar-sticky">
//               <ul class="nav flex-column">
//                 <li class="nav-item">
//                   <a class="nav-link" href = "/counsellorDashboard">
//                     <span data-feather="file" ></span>
//                     Farmers
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="">
//                     <span data-feather="bar-chart-2"></span>
//                     Products
//                   </a>
//                 </li>
//                 <a class="nav-link" href="/counsellorDashboard/profile">
//                     <span data-feather="bar-chart-2"></span>
//                     Update Profile
//                   </a>
//               </ul>
//             </div>
//           </nav>

//           <main role="main" class="col-md-auto col-lg-10 ml-sm-auto pt-3 px-4">
//             <div className='container'>
//               <center><h1>Welcome to dashboard!</h1></center>
//               <hr></hr>

//               <div class='table-responsive'>
//                 <table class="custom-table ">
//                   <tbody>
//                     <tr>
//                     <td>Name</td>
//                     {/* <td>{counsellor.name}</td> */}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <hr></hr> 
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//     );
// }

// export default CounsellorProfile;