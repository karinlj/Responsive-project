import React from "react";
//import Itera from "../img/logo-invert.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <h5 className="upper-heading">Contact</h5>
                  <ul>
                    <li>
                      {" "}<h5>Norge</h5>
                    </li>
                    <li>Nydalsveien 28</li>
                    <li>Postboxs 4814 Nydalen</li>
                    <li>0422 Oslo, Norway</li>
                    <li>+47 23 00 76 50</li>
                    <li>
                      {" "}<a href="https://www.google.com/">Kart</a>
                    </li>
                  </ul>
                  <h5 className="lower-heading">Service Desk</h5>
                  <ul>
                    <li>+47 21 01 86 00</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5 className="upper-heading">Our Offices</h5>
                  <ul>
                    <li>
                      <a href="https://itera.no/en/contact/">Denmark</a>
                    </li>
                    <li>
                      <a href="https://itera.no/en/contact/">Slovakia</a>
                    </li>
                    <li>
                      <a href="https://itera.no/en/contact/">Sweden</a>
                    </li>
                    <li>
                      <a href="https://itera.no/en/contact/">Ukraine</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <ul className="social-section">
                <li className="social-links">
                  <a
                    href="https://www.facebook.com/iteraction/"
                    target="_top"
                    className="fb"
                  >
                    facebook
                  </a>
                  <a
                    href="https://twitter.com/iteraasa"
                    target="_top"
                    className="twitter"
                  >
                    twitter
                  </a>
                  <a
                    href="https://www.instagram.com/iteranorge/"
                    target="_top"
                    className="instagram"
                  >
                    instagram
                  </a>
                  <a
                    href="https://no.linkedin.com/company/itera-asa"
                    target="_top"
                    className="linkedin"
                  >
                    linkedin
                  </a>
                </li>
              </ul>

              <ul className="lower-link-section">
                <li className="big-links">
                  <a href="https://itera-no.webmercs.com/">Webshop</a>
                  <a href="https://itera.no/en/service-desk/service-desk/">
                    Service Desk
                  </a>
                </li>
                <li className="cookies">
                  Read our: &nbsp;{" "}
                  <a href="https://itera.no/en/privacy-policy/">Privacy policy</a>
                </li>
                <li className="footer-logo">
                  <img src="https://itera.no/Static/Images/logo-invert.svg" alt="logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <a href="#header">Top</a>
      </div>
    </footer>
  );
};
export default Footer;
