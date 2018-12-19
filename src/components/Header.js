import React, { Component } from "react";
import Navbar from "./Navbar";
import ToggleBtn from "./ToggleBtn";

class Header extends Component {
  state = {
    navbarShow: false
  };

  handleToggle = () => {
    console.log("toggle");
    this.setState(prevState => {
      return { navbarShow: !prevState.navbarShow }; //set the opposite
    });
  };
  render() {
    let headerTextClasses = !this.state.navbarShow ? "headerText show" : "headerText";

    return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="logo">
                <a href="https://boozang.com">
                  <img src="https://itera.no/Static/Images/logo.svg" alt="logo" />
                </a>
              </div>

              <ToggleBtn clickToggle={this.handleToggle} />

              <Navbar showNavbar={this.state.navbarShow} />
            </div>
          </div>
        </div>
        <div className="header-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className={headerTextClasses}>
                  <h1>Specialists in creating digital business</h1>
                  <h4>Communication. Technology. Design.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
