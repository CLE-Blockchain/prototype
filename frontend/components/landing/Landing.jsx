import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../nav/Navbar";

export default class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
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
