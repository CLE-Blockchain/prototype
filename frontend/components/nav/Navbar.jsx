import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Credible
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {this.props.links.map((link, idx) => {
                if (link === "home") {
                  link = "";
                } else if (link.toLowerCase() === "upload") {
                  return (
                    <li key={idx} className="nav-item upload">
                      <a className="nav-link">
                        Upload
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={idx} className="nav-item active">
                    <NavLink className="nav-link" to={`/${link}`}>
                      {link.charAt(0).toUpperCase() +
                        link.slice(1).toLowerCase()}
                      <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
