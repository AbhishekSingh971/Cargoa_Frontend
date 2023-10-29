import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import "../Css/Navbar.css"
import SearchInput from "../Form/SearchInput";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully",{duration: 1000});
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#29465B" ,boxShadow: "5px 10px 5px -3px black"}}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light">
          <b>
            <i>Cargoa</i>
          </b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <NavLink className={`nav-link ${location?.pathname === "/"?"activ text-warning":"text-light"}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${location?.pathname === "/about"?"activ text-warning":"text-light"}`} to="/about">
                About
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li> */}
          </ul>
          {auth.user ? (
          <SearchInput/>
          ):""}

            {auth?.user === null ? (
              <div className="me-3">
                <NavLink to="/register">
                  {" "}
                  <button
                    className={`btn me-2 border border-dark ${location?.pathname === "/register"?"btn-dark":""}`}
                    style={{ width: "100px" }}
                  >
                    <b>Sign-Up</b>
                  </button>
                </NavLink>

                <NavLink to="/login">
                  <button
                    className={`btn border border-dark ${location?.pathname === "/login"?"btn-dark":""}`}
                    style={{ width: "100px" }}
                  >
                    <b>Login</b>
                  </button>
                </NavLink>
              </div>
            ) : (
              <>
                <span className="nav-item dropdown me-5">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to={"/dashboard"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textTransform: "uppercase" }}
                  >
                    <button
                    className="btn btn-dark text-light"
                    style={{ width: "100px" }}
                  >
                      {auth?.user?.firstName}
                    </button>
                  </NavLink>

                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${auth?.user?.role ===1?"manufacturer":"transporter"}`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to={"/login"}
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </span>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
