import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { Auxiliar } from "../Auxiliar";
import { Backdrop } from "../Backdrop/Backdrop";

import { Link, withRouter } from "react-router-dom";
import logo from "../../../assets/app_logo.png";

export const Sidebar = props => {
  let className = "";

  props.show
    ? (className = "side-drawer open")
    : (className = "side-drawer closed");

  return (
    <Auxiliar>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={className}>
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ height: "70px", width: "60px" }}
        />
        <div className="links">
          <Link to="/Profile" onClick={props.closed}>
            Profile
          </Link>
          <Link to="/Contact" onClick={props.closed}>
            Help
          </Link>
        </div>
      </div>
    </Auxiliar>
  );
};
