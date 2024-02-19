import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

import LandingPage from './pages/landingPage/LandingPage';
import LoginForm from './pages/loginPage/LoginPage';
import AdminLoginForm from './pages/loginPage/AdminLoginPage';
import CounsellorLoginForm from './pages/loginPage/CounsellorLoginPage';
import Register from './pages/registrationPage/RegistrationPage';
import WeatherPage from './pages/weather/WeatherPage';
import SchemesPage from './pages/schemes/SchemesPage';
import CounsellingPage from './pages/counselling/CounsellingPage';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import AdminRoutes from './pages/adminDashboard/AdminRoutes';
import CounsellorManagement from './pages/adminDashboard/CounsellorManagement';
import FarmerDashboard from './pages/farmerDashboard/FarmerDashboard';
import CounsellorDashboard from './pages/counsellorDashboard/CounsellorDashboard';
import ApmcBuy from './pages/apmc/ApmcBuyPage';
import ApmcPage from './pages/apmc/ApmcPage';
import ApmcSellPage from './pages/apmc/ApmcSellPage';
import Cart from './pages/cart/Cart'
import FarmerManagement from './pages/adminDashboard/FarmerManagement';
function App() {
  return (
  <div className='container-fluid'>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/adminLogin" element={<AdminLoginForm/>}></Route>
      <Route path="/counsellorLogin" element={<CounsellorLoginForm/>}></Route>
      <Route path="/apmc" element={<ApmcPage/>}></Route>
      <Route path="/apmcSell" element={<ApmcSellPage/>}></Route>
      <Route path="/apmcBuy" element={<ApmcBuy/>}></Route>
      <Route path="/weather" element={<WeatherPage/>}></Route>
      <Route path="/counselling" element={<CounsellingPage/>}></Route>
      <Route path="/farmerDashboard" element={<FarmerDashboard/>}></Route>
      <Route path="/counsellorDashboard" element={<CounsellorDashboard/>}></Route>
      <Route path="/schemes" element={<SchemesPage/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

      <Route
          path='adminDashboard'
          element={
            //<AdminRoutes>
              <AdminDashboard />
           // </AdminRoutes>
          }
      >
      </Route>

      <Route
        path='/adminDashboard/mngcounsellor'
          element={
            //<AdminRoutes>
              <CounsellorManagement />
            //</AdminRoutes>
          }
      >
      </Route>
      
      <Route
        path='/adminDashboard/mngfarmer'
          element={
            //<AdminRoutes>
              <FarmerManagement />
            //</AdminRoutes>
          }
      >
      </Route>
    </Routes>

    <ToastContainer />
  </div>
  );
}

export default App;
