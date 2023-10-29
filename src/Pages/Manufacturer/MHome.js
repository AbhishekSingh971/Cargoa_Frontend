import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import MForm from "./MForm";
import "../../Components/Css/MHome.css";
import MCard from "./MCard";
import axios from "axios";
import { toast } from "react-hot-toast";

const MHome = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [datas, setDatas] = useState([]);

  const order = async () => {
    try {
      const res = await axios.get(
        "https://cargoa-ydmd.onrender.com/api/v1/manufacturer/getorder"
      );
      if (res && res.data.success) {
        let parse = res.data.order;
        setDatas(parse);
        console.log(parse)
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
    order();

  }, []);

   //delete a product
   const handleDelete = async (id) => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      await axios.delete(
        `https://cargoa-ydmd.onrender.com/api/v1/manufacturer/delete-order/${id}`
      );
      toast.success(`${auth.name} : Product Deleted Succfully`);
      navigate("/");
      order();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Cargoa - Home"}>
      <div className="item">
        <div className="img-wrap">
          <img src="./images/bg.jpeg" alt="img.jpeg" />
        </div>
      </div>
      <div
        style={{
          maxWidth: "40%",
          maxHeight: "70%",
          textAlign: "justify",
          position: "absolute",
          top: "35%",
          right: "5%",
          fontFamily: "'Open Sans', sans-serif",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "azure",
          padding: "10px",
          boxShadow:
            "5px 5px 10px 5px rgba(0,0,0,0.9),5px 5px 10px 2px rgba(0,0,0,01)",
          letterSpacing: "2px",
        }}
      >
        <h1 className="text-center" style={{ color: "#DCD427" }}>
          Manufactur
        </h1>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sodales nunc non odio lacinia, non tincidunt justo ornare. Etiam eu
            ultrices lorem. Fusce posuere felis magna, id pretium metus
            imperdiet quis. Maecenas ante turpis, finibus et luctus quis,
            tincidunt at diam. Aenean in condimentum felis. Maecenas sodales
            nunc non odio lacinia, non tincidunt justo ornare. Etiam eu ultrices
            lorem. Fusce posuere felis magna, id pretium metus imperdiet quis.
            Maecenas ante turpis, finibus et luctus quis, tincidunt at diam.
            Aenean in condimentum felis.
          </b>
        </p>
      </div>
      {/* <div style={{height:"100vh"}}>
      </div> */}
      <div style={{ height: "40vh"}}>
        <MForm />
      </div>
      <div className="row m-2">
        {datas?.map((data) => {
          return (
            <div className="col-3" key={data._id}>
              <MCard
              id={data._id}
                to={data.to}
                from={data.from}
                quantity={data.quantity}
                transporter={data.transporter}
                handleDelete={()=>handleDelete(data._id)}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MHome;
