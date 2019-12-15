import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav className="z-depth-4">
          <div className="nav-wrapper blue-grey darken-4 ">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large "
            >
              <i className="material-icons">menu</i>
            </a>
            <a href="#" className="brand-logo center blue-text text-lighten-4">
              Monitoring Analytics
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nishant-baheti-917739136/">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav blue-grey darken-4">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/nishant.jpg" />>
              </div>
              <a href="#user">
                <img className="circle" src="images/nishant.jpg" />>
              </a>
              <a href="#name">
                <span className="white-text name">Nishant Baheti</span>
              </a>
              <a href="#email">
                <span className="white-text email">
                  nishantbaheti.it19@gmail.com
                </span>
              </a>
            </div>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nishant-baheti-917739136/"
              className="waves-effect white-text"
            >
              <i className="material-icons white-text">linkedin</i>Who Am I
            </a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader white-text">
              <i className="material-icons white-text">contact_phone</i>
              +91-9461416717
            </a>
          </li>
          <li>
            <a className="waves-effect white-text" href="#!">
              <i className="material-icons white-text">Guide</i>Help Guide!
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
