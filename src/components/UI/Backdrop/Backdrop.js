import React from "react";
import "./Backdrop.scss";

export const Backdrop = props =>
  props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;
