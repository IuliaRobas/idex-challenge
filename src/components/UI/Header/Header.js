import React, { useState, useEffect } from "react";
import "./Header.scss";
import NotificationsIcon from "@material-ui/icons/Notifications";
import avatar from "../../../assets/avatar.png";

export const Header = props => (
  <div className="header">
    <div className="left">
      <p onClick={props.drawerToggleClicked} className="menu">
        Menu
      </p>
    </div>
    <div className="right">
      <NotificationsIcon className="icon" />
      <p>Super Admin</p>
      <img
        src={avatar}
        style={{ height: "30px", width: "30px", alignSelf: "center" }}
        alt="avatar"
      ></img>
    </div>
  </div>
);
