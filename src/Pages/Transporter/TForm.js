import React from "react";

const TForm = () => {
  return (
    <div
      className="container"
      style={{
        width: "60%",
        display: "block",
        position: "absolute",
        top: "85vh",
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
            <b>Price : </b>
          </label>
          <input
            type="text"
            className="form-control  bg-dark text-light"
            name="price"
            placeholder="Delevery Charges"
            aria-label="Price"
            id="price"
          />
        </div>

        <div className="col-6">
          <label htmlFor="from" className="form-label text-dark">
            <b>Message : </b>
          </label>
          <input
            type="text"
            className="form-control  bg-dark text-light"
            name="message"
            placeholder="Message"
            aria-label="Message"
            id="message"
          />
        </div>
        </div>

      <div className="text-center mt-2">
        <button
          className="btn btn-warning border border-dark text-dark"
          style={{ width: "20%" }}
        //   type="submit"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TForm;
