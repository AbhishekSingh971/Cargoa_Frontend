import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({path}) => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4 className="text-light">Dashboard</h4>
          <NavLink
            to={`${path}/profile`}
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Profile
          </NavLink>
          <NavLink
            to={`${path}/update`}
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Update Account
          </NavLink>
          <NavLink
            to={`${path}/theme`}
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Theme
          </NavLink>
          <NavLink
            to={`${path}/delete`}
            className="list-group-item list-group-item-action bg-danger"
            aria-current="true"
          >
            Delete Account
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
