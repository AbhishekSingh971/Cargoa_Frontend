import React from "react";
import Layout from "../Components/Layout/Layout";
import Menu from "../Components/Layout/Menu";
import { useAuth } from "../context/auth";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [auth] = useAuth();
  return (
    <Layout title={"Cargoa - Dashboard"}>
      <div className="container-fluid m-3 p-3 text-dark">
        <div className="row">
          <div className="col-md-3">
            <Menu path={location.pathname}/>
          </div>
          <div className="col-md-9">
            <div
              className="card w-75 p-3 border border-warning border-w-25"
              style={{ fontFamily: "cursive" }}
            >
              <div className="d-flex justify-content-center align-items-center pb-4 border-bottom border-warning">
                <h2>Welcome {auth.user.firstName} {auth.user.lastName}</h2>
              </div>
              <h3>Email : {auth.user.email}</h3>
              <h3>Phone No. : {auth.user.phone}</h3>
              <h3>Address : {auth.user.address}</h3>
              <h3>Role : {`${auth.user.role===0?"Transporter":"Manufacturer"}`}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
