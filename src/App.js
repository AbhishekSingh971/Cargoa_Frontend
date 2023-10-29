import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Pagenotfound from "./Pages/Pagenotfound"
import ManufacturerAuth from "./Components/Routes/ManufacturerAuth";
import TransporterAuth from "./Components/Routes/TransporterAuth";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import Home from "./Pages/Home";


function App() {

  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path={"/"} element={<ManufacturerAuth/>}>
        <Route path={"/"} element={<Home/>}/>
        </Route>
      <Route path="/search" element={<Search/>}/>
      <Route path={"/about"} element={<About/>}/>
      <Route path={"/dashboard"} element={<ManufacturerAuth/>}>
          <Route path={"manufacturer"} element={<Dashboard/>}/>
          <Route path={"manufacturer/profile"} element={<Dashboard/>}/>
      </Route>

      <Route path={"/dashboard"} element={<TransporterAuth/>}>
          <Route path={"transporter"} element={<Dashboard/>}/>
          <Route path={"transporter/profile"} element={<Dashboard/>}/>
      </Route>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/forget-password"} element={<ForgotPassword/>}/>
      <Route path={"*"} element={<Pagenotfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
