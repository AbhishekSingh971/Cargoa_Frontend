import React, { useEffect, useState } from "react";
import "../../Components/Css/TCard.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const TCard = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const Transporter = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:7000/api/v1/auth/getTransporter/${props.transporter}`
        );
        if (data && data.success) {
          let parse = data.transporter;
          setDatas([parse]);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log(datas);
    Transporter();
  }, []);
  return (
    <div className="Tcard-main container col-3">
      <div className="card" style={{ maxWidth: "20rem" }}>
        <img src="./images/manufacturer.png" className="card-img-top" alt="..." />
        <div className="card-body"></div>
        <h5 className="card-text text-black ps-3 pe-3">Transporter : {props.id}</h5>
        <h5 className="card-header  text-black">Price : {props.price}</h5>
        <h5 className="card-header  text-black">FROM : {props.message}</h5>
        <div className="Tcard-div row p-3">
          <div className="col">
            <button className="btn btn-warning">UPDATE</button>
          </div>

          <div className="col">
            <button className="btn btn-danger">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
