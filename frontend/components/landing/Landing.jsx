import React from "react";
import { Link } from "react-router-dom";

export default class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
        <Link className="landing__lawyer" to="/lawyer">
          <p>Lawyer</p>
        </Link>
        <Link className="landing__accreditor" to="/accreditor">
          <p>Accreditor</p>
        </Link>
      </section>
    );
  }
}
