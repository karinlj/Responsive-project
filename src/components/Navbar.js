import React from "react";
//import { NavLink } from "react-router-dom";

const Navbar = props => {
  //nav classes for hide or show
  let navbarClasses = !props.showNavbar ? "nav" : "nav show";

  return (
    <nav className={navbarClasses}>
      {/*  <nav className="navbar show">  */}
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="links">
              <li>
                <a href="https://itera.no/en/#37">What we do</a>{" "}
              </li>

              <li>
                <a href="https://itera.no/en/#38">Hybrid</a>{" "}
              </li>

              <li>
                <a href="https://itera.no/en/#40">You at Itera</a>{" "}
              </li>

              <li>
                <a href="https://itera.no/en/#41">About us</a>{" "}
              </li>

              <li>
                <a href="https://itera.no/en/#2903">Investor</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
