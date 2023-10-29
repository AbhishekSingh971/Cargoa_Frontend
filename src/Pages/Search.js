import React, { useEffect, useState } from "react";
import Layout from "./../Components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";
import "../Components/Css/MCard.scss";
import { toast } from "react-hot-toast";

const Search = () => {
  const navigate = useNavigate();
  const [values] = useSearch();
  const [auth] = useAuth();
  const [datas, setDatas] = useState([]);

  const order = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7000/api/v1/manufacturer/getorder"
      );
      if (res && res.data.success) {
        let parse = res.data.order;
        setDatas(parse);
        console.log(parse);
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
        `http://localhost:7000/api/v1/manufacturer/delete-order/${id}`
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
    <Layout title={"Search result"}>
      <div className="container">
          <div className="text-center"> 
        <h1>Search results</h1>
        <h6>
          {values?.results.length < 1
            ? "No Order Found"
            : `Found ${values?.results.length}`}
        </h6>
            </div>
        <div className="d-flex flex-wrap mt-4">
          {/* <div className="product-div"> */}
          {values?.results.map((m) => (
            <div className="Mcard-main container col-3">
            <div className="card" style={{ maxWidth: "20rem" }}>
              <img src="./images/manufacturer.png" className="card-img-top" alt="..." />
              <div className="card-body"></div>
              <h5 className="card-header  text-black">TO : {m.to}</h5>
              <h5 className="card-header  text-black">FROM : {m.from}</h5>
              <h5 className="card-header  text-black">Qunatity : {m.quantity}</h5>
              <h5 className="card-text text-black ps-3 pe-3">Transporter : {m.transporter}</h5>
              <div className="Mcard-div row p-3">
                <div className="col">
                  <button className="btn btn-warning">UPDATE</button>
                </div>
      
                <div className="col">
                  <button className="btn btn-danger" onClick={m.handleDelete}>
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
