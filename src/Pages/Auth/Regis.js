import React, { useState } from 'react'
import {Role, Personal} from "./Form"
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Regis = () => {
  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",password: "",phone:"",address:"",answer: "",role: ""})
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const component =()=>{
    switch(page){
        case 1:
            return <Role page={page} setPage={setPage} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>;
        case 2: 
            return <Personal page={page} setPage={setPage} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>;
        default:
            return <Role page={page} setPage={setPage} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>;
    }
}

//form function
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const {firstName, lastName, email, password, phone, address, answer,role} = formData;
    const res = await axios.post(
      `https://cargoa-ydmd.onrender.com/api/v1/auth/register`,
      { firstName, lastName, email, password, phone, address, answer,role }
    );
    if (res.data.success) {
      navigate("/login");
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Somethind went wrong");
  }
};

return (
    <div div className="form-container">
    <h1 className="title text-dark">Register Form</h1>
    {component()}
    </div>
)
}

export default Regis