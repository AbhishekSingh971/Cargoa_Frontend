import React, {useState } from "react";
import Layout from "../../Components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation,NavLink } from "react-router-dom";
import "../../Style/AuthStyle.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://cargoa-ydmd.onrender.com/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message,{duration: 3000});
        
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethind went wrong");
    }
  };

  return (
    <Layout title={"Cargoa - Login"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="title text-dark">Login Form</h1>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              required
            />
          </div>
            
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>

        <div className="mb-3" style={{display: "flex",justifyContent: "space-between",padding: "10px"}}>
          <NavLink to="/register"
            className="link text-decoration-none"
            style={{borderBottom:"2px solid black"}}
          > 
            Register User
          </NavLink>
          <NavLink to="/forget-Password"
            className="link text-decoration-none"
            style={{borderBottom:"2px solid black"}}
          > 
            Forget Password
          </NavLink>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
