import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          <Header className="header" />

          <div className="content-section">
            <div className="container">
              <Switch>
                {" "}{/* only want to match one at a time */}
                <Route exact path="/" component={Home} />
                {/* <Route path="/introduction" component={Introduction} /> */}
              </Switch>
            </div>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
