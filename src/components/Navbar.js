import React from "react";
import { NavLink } from "react-router-dom";
//import ToggleBtn from "./SideDrawer/ToggleBtn";

const Navbar = props =>
  <nav className="nav">
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            {/* <ToggleBtn click={props.handleDrawerClick} /> */}
          </div>
          <h2 className="logo">
            <NavLink to="/">Itera</NavLink>
          </h2>

          <ul className="links">
            <li>
              <NavLink to="https://itera.no/en/#37">What we do</NavLink>
            </li>
            <li>
              <NavLink to="https://itera.no/en/#38">Hybrid</NavLink>
            </li>
            <li>
              <NavLink to="https://itera.no/en/#40">You at Itera</NavLink>
            </li>
            <li>
              <NavLink to="https://itera.no/en/#41">about us</NavLink>
            </li>
            <li>
              <NavLink to="https://itera.no/en/#2903">Investor</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>;
export default Navbar;
