import React, { useEffect, useState } from "react";
import "../../Components/Css/MCard.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

const MCard = (props) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const Transporter = async () => {
      try {
        const { data } = await axios.get(
          `https://cargoa-ydmd.onrender.com/api/v1/auth/getTransporter/${props.transporter}`
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
    <div className="Mcard-main container col-3">
      <div className="card" style={{ maxWidth: "20rem" }}>
        <img src="./images/manufacturer.png" className="card-img-top" alt="..." />
        <div className="card-body"></div>
        <h5 className="card-header  text-black">TO : {props.to}</h5>
        <h5 className="card-header  text-black">FROM : {props.from}</h5>
        <h5 className="card-header  text-black">Qunatity : {props.quantity}</h5>
        <h5 className="card-text text-black ps-3 pe-3">Transporter : {props.transporter}</h5>
        <div className="Mcard-div row p-3">
          <div className="col">
            <button className="btn btn-warning">UPDATE</button>
          </div>

          <div className="col">
            <button className="btn btn-danger" onClick={props.handleDelete}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCard;
