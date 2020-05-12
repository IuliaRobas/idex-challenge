import React, { useState, useEffect } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions/appActions";
import "./Contact.scss";

const Contact = props => {
  const [message, setMessage] = useState("");

  return (
    <div className="contact">
      <header className="header">Contact Us</header>
      <div className="form">
        <TextareaAutosize
          className="textarea"
          aria-label="message"
          rowsMin={6}
          placeholder="Let us know how we can help"
          value={message}
          onChange={event => {
            setMessage(event.target.value);
          }}
        />
        <input
          type="submit"
          value="Send"
          onClick={event => {
            props.actions.sendMessage(message);
            setMessage("");
          }}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      sendMessage: message =>
        bindActionCreators(
          appActions.sendMessage,
          { message: message },
          dispatch
        )
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
