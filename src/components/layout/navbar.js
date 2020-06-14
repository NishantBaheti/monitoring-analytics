import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav className="z-depth-4">
          <div className="nav-wrapper blue-grey darken-4">
            <a href="#" className="brand-logo">
              <img
                src="images/logo.png"
                className="wrapper"
                width="auto"
                height="75px"
              />
            </a>

            <ul id="nav-mobile" className="right">
              <div>
                <a
                  class="dropdown-trigger btn-large blue-grey darken-2"
                  href="#"
                  data-target="dropdown1"
                >
                  <div>
                    <img
                      src="images/logo512.png"
                      className="center circle left "
                      width="40"
                      height="40"
                    />

                    <span className="white-text right">Nishant Baheti</span>
                  </div>
                </a>
              </div>
              <ul
                id="dropdown1"
                className="dropdown-content blue-grey darken-2"
              >
                <li>
                  <a href="#email">
                    <span className="subheader white-text">
                      <i className="material-icons white-text">email</i>
                      xyz@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a className=" white-text">
                    <i className="material-icons white-text">contact_phone</i>
                    +91-9876543210
                  </a>
                </li>
                <li className="divider" tabindex="-1"></li>
                <li>
                  <a
                    href="http://www.google.com"
                    className="waves-effect white-text"
                  >
                    <i className="material-icons white-text">web</i>Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect white-text"
                    href="https://www.github.com/nishantbaheti"
                  >
                    <i className="material-icons white-text">help</i>Github
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
