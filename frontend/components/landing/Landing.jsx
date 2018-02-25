import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../nav/Navbar";

export default class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
          </div>
        </nav> */}
        <Nav links={[]} />
        <Link className="landing__lawyer" to="/lawyerchooser">
          <p>Lawyer</p>
        </Link>
        <Link className="landing__accreditor" to="/accreditor">
          <p>Accreditor</p>
        </Link>
      </section>
    );
  }
}
