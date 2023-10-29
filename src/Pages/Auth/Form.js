import { Select } from "antd";
import "../../Style/AuthStyle.css";
import { NavLink } from "react-router-dom";

const Role = ({ page, setPage, setFormData, formData }) => {
  const { role } = formData;
  function handleSubmit(e) {
    setPage(page + 1);
  }
  return (
    <>
      <Select
        showSearch
        style={{ width: 300, border: "5px solid black", borderRadius: "10px" }}
        placeholder="Who are you ??"
        name="role"
        onChange={(e) => {
          setFormData({ ...formData, role: e });
        }}
        value={role}
        required
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Manufacturer",
          },
          {
            value: "0",
            label: "Transporter",
          },
        ]}
      />
      {page > 1 && <button onClick={() => setPage(page - 1)}>Back</button>}
      <button
        className="btn btn-primary mt-3"
        style={{ width: "100px" }}
        onClick={handleSubmit}
      >
        {page === 1 ? "Next" : "Submit"}
      </button>
    </>
  );
};


const Personal = ({ page, setPage, handleSubmit, formData, setFormData }) => {
  const { firstName, lastName, email, password, phone, address, answer } = formData;

    const onChange = (e)=>{
      const {name, value} = e.target;
      // console.log(...formData) 
      setFormData({...formData,[name]:value})
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={onChange}
            placeholder="Enter Your First Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Enter Your Last Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="Enter Your Password"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            value={phone}
            onChange={onChange}
            placeholder="Enter Your Phone No."
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            value={address}
            onChange={onChange}
            placeholder="Enter Your Address"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="answer"
            id="answer"
            value={answer}
            onChange={onChange}
            placeholder="What is Your Favorite Sports ?"
          />
        </div>

        <div className="row">
          <button
            type="submit"
            className="btn btn-primary mt-2 col-md-6"
            // onClick={handleSubmit}
            >
            {page === 1 ? "Next" : "Submit"}
          </button>
            {page > 1 && (
              <NavLink
                className="link"
                style={{textDecoration: "none"}}
                onClick={() => setPage(page - 1)}
              >
                Back
              </NavLink>
            )}
        </div>
      </form>
    </>
  );
};

export { Personal, Role };
