import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";

const MForm = () => {
  const [auth] = useAuth();
  const [data, setData] = useState([]);
  const [transporter, setTransporter] = useState([]);
  const [formData, setFormData] = useState({
    to: "",
    from: "",
    quantity: "",
    transporter: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async () => {
    try {
      const { to, from, quantity, transporter } = formData;
      const res = await axios.post(
        `https://cargoa-ydmd.onrender.com/api/v1/manufacturer/create-order`,
        {
          to,
          from,
          quantity,
          transporter,
        }
      );
      if (res && res.data.success) {
        setData(res);
        toast.success(res.data.message,{duration: 3000});
      } else {
        console.log(res.data.message);
        toast.error(res.data.message,{duration: 3000});
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message,{duration: 3000});
    }
  };

  useEffect(() => {
    const transporters = async () => {
      try {
        const response = await axios.get(
          "https://cargoa-ydmd.onrender.com/api/v1/auth/getAllTransporters"
        );
        if (response && response.data.success) {
          const parser = await response.data.transporters;
          setTransporter(parser);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    transporters();
    console.log(transporter);
  }, [auth?.token]);

  return (
    <div
      className="container"
      style={{
        width: "60%",
        display: "block",
        position: "absolute",
        top: "115vh",
        left: "20%",
        backgroundColor: "azure",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 0 10px 1px rgba(0,0,0,1), 0 0 10px 2px rgba(0,0,0,0.5)",
      }}
    >
      <div className="row">
        <div className="col-6">
          <label htmlFor="to" className="form-label text-dark">
            <b>To : </b>
          </label>
          <input
            type="text"
            className="form-control  bg-dark text-light"
            name="to"
            value={formData.to}
            onChange={onChange}
            placeholder="To"
            aria-label="To"
            id="to"
          />
        </div>

        <div className="col-6">
          <label htmlFor="from" className="form-label text-dark">
            <b>From : </b>
          </label>
          <input
            type="text"
            className="form-control  bg-dark text-light"
            name="from"
            value={formData.from}
            onChange={onChange}
            placeholder="From"
            aria-label="From"
            id="from"
          />
        </div>

        <div className="col-6">
          <span className="text-black">
            <b>Quantity : </b>
          </span>
          <div className="input-group mb-3 text-light">
            <select
              className="form-select bg-dark text-light"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={onChange}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label className="input-group-text bg-warning" htmlFor="quantity">
              Ton
            </label>
          </div>
        </div>

        <div className="col-6">
          <span className="text-black">
            <b>Transporter : </b>
          </span>
          <div className="input-group mb-3 text-light">
            <select
              className="form-select bg-dark text-light"
              id="transporter"
              name="transporter"
              value={formData.transporter}
              onChange={onChange}
            >
              <option></option>
              {transporter.map((e) => (
                  <option key={`${e._id}`} value={`${e._id}`}>
                    {e.firstName} {e.lastName}
                  </option>
              ))}
              {/* <option value="6478fa38d7854e96d52582df">Aman</option> */}
            </select>
            <label
              className="input-group-text bg-warning"
              htmlFor="transporter"
            >
              Options
            </label>
          </div>
        </div>
      </div>

      <div className="text-center mt-2">
        <button
          className="btn btn-warning border border-dark text-dark"
          style={{ width: "20%" }}
          type="submit"
          onClick={onSubmitForm}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MForm;
