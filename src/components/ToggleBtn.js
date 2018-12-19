import React from "react";

const ToggleBtn = props =>
  // passed prop from Navbar but function is in App.js

  <button className="toggle-btn" onClick={props.clickToggle}>
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
    <div className="toggle-btn-line" />
  </button>;
export default ToggleBtn;
