import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header id="header">
      <Navbar />
      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-section text-center">
                <h1>Specialists in creating digital business</h1>
                <h4>Communication. Technology. Design.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
