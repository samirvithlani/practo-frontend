import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { SearchComponent } from './component/SearchComponent';
import { Footer } from './component/Footer';
import { DoctorSpec } from './component/DoctorSpec';
import { Route, Routes } from 'react-router-dom';
import { DoctorLogin } from './component/doctor/DoctorLogin';
import { RegisterDoctror } from './component/doctor/RegisterDoctror';
import { DoctorDashBorad } from './component/doctor/DoctorDashBorad';
import { UserLogin } from './component/user/UserLogin';
import { UserDashBorad } from './component/user/UserDashBorad';
import { Appoinment } from './component/user/Appoinment';
import { AppoinmentTime } from './component/user/AppoinmentTime';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/userlogin" element={<UserLogin/>} />
        <Route path="/doctorlogin" element={<DoctorLogin/>} />
        <Route path="/doctorregister" element={<RegisterDoctror/>} />
        <Route path="/doctordashboard/:id" element={<DoctorDashBorad/>} />
        <Route path = "/userdashboard/:id" element={<UserDashBorad/>} />
        <Route path = "bookappoinment/:id" element = {<Appoinment/>}/>
        <Route path = "/bookappoinmenttime/:id" element = {<AppoinmentTime/>}/>
      </Routes>
      <SearchComponent/>
      <DoctorSpec/>
      <Footer/>
      
    </div>
  );
}

export default App;
