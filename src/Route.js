import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./components/home";
// import About from './components/about';
import UserHome from "./components/UserHome";
import Signin from "./components/Sign-in";
import AboutUs from "./components/AboutUs";
import Header from './Layout/Header';
import HeaderOne from './Layout/HeaderFirst';
import Footer from './Layout/Footer';
// import Chat from './components/chat';

import history from "./History";

// export const history = createBrowserHistory()

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="theme">
          <div className="fl-page">
          <HeaderOne/>
          <Header/>
            <Route exact path="/" component={Home} />

            <Route exact path="/User" component={UserHome} />
            <Route exact path="/login" component={Signin} />
            <Route exact path="/contact" component={AboutUs} />
            <Route exact path="/about" component={AboutUs} />
            <div className="fl-page-footer-wrap">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routers;
