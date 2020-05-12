import React, { useState, useEffect, useRef } from "react";
import "./Profile.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../../redux/actions/userActions";
import avatar from "../../../assets/avatar.png";
import * as appActions from "../../../redux/actions/appActions";

const Profile = props => {
  const options = ["English", "German", "Japanese"];

  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

  return (
    <div className="profile">
      <header>
        <p>Profile</p>
      </header>
      <div className="content">
        <div className="left">
          <img
            src={avatar}
            style={{ height: "80px", width: "80px", alignSelf: "center" }}
            alt="avatar"
          ></img>
          <div className="input">
            <label>Full name</label>
            <input type="text" name="name" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type="text" name="email" />
          </div>
          <a
            href=""
            className="link"
            onClick={event => {
              event.preventDefault();
              props.actions.changePassword();
            }}
          >
            Change Password
          </a>
          <div className="dropdown-content">
            <p>Select App Language</p>
            <Dropdown
              options={options}
              value={selectedLanguage}
              placeholder="Select a language"
              onChange={option => {
                setSelectedLanguage(option);
                props.actions.setAppLanguage(option.label);
              }}
            ></Dropdown>
          </div>
          <a
            href=""
            className="link"
            onClick={event => {
              event.preventDefault();
              props.actions.logOut();
            }}
          >
            Logout
          </a>
        </div>
        <div className="right">
          <p>Recent Likes</p>

          <a
            className="link"
            href=""
            onClick={event => {
              event.preventDefault();
            }}
          >
            Edit Profile
          </a>

          <a
            href="./"
            className="link"
            onClick={event => {
              event.preventDefault();
              props.actions.logOutAllDevices();
            }}
          >
            Logout on all devices
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      logOut: bindActionCreators(userActions.logOut, dispatch),
      changePassword: bindActionCreators(userActions.changePassword, dispatch),
      logOutAllDevices: bindActionCreators(
        userActions.logOutAllDevices,
        dispatch
      ),
      setAppLanguage: bindActionCreators(
        appActions.setAppLanguage,

        dispatch
      )
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
