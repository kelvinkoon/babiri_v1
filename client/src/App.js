import React from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/layout/Navbar";

import Teams from "./components/pages/Teams";
import Usage from "./components/pages/Usage";
import About from "./components/pages/About";

function initializeReactGA() {
  ReactGA.initialize("UA-158516768-1");
  ReactGA.pageview("/");
}

class App extends React.Component {
  componentDidMount() {
    initializeReactGA();
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container">
          <Route path="/" exact component={Teams} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/usage" exact component={Usage} />
          <Route path="/about" exact component={About} />
        </div>
      </div>
    );
  }
}

export default App;
