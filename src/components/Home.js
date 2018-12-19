import React from "react";

const Home = () => {
  return (
    <div className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="heading">
              <span>See our work</span>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="img-block-row">
              <div className="img-block-wrapper">
                <div className="img-block">
                  <a href="/">
                    <div
                      className="img-block-element"
                      style={{
                        backgroundImage:
                          "url(https://itera-cdn.azureedge.net/globalassets/all-images/itera-people-to-grow.jpg)"
                      }}
                    />
                  </a>
                  <div className="block-text">
                    <a href="/">
                      <h3>People to grow with</h3>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-block-wrapper">
                <div className="img-block">
                  <a href="/">
                    <div
                      className="img-block-element"
                      style={{
                        backgroundImage:
                          "url(https://itera-cdn.azureedge.net/globalassets/all-images/itera-academy.jpg)"
                      }}
                    />
                  </a>
                  <div className="block-text">
                    <a href="/">
                      <h3>Itera Academy</h3>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-block-wrapper">
                <div className="img-block">
                  <a href="/">
                    <div
                      className="img-block-element"
                      style={{
                        backgroundImage:
                          "url(https://itera-cdn.azureedge.net/globalassets/all-images/itera-csr.jpg)"
                      }}
                    />
                  </a>
                  <div className="block-text">
                    <a href="/">
                      <h3>Top 5 most innovative</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-block-wrapper">
                <div className="img-block">
                  <a href="/">
                    <div
                      className="img-block-element"
                      style={{
                        backgroundImage:
                          "url(https://itera-cdn.azureedge.net/globalassets/all-images/m0a8630.jpg)"
                      }}
                    />
                  </a>
                  <div className="block-text">
                    <a href="/">
                      <h3>Awards</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
