import React from "react";
import { Link } from "react-router-dom";

export default class Landing extends React.Component {
  render() {
    return (
      <section>
        <h1>Welcome to Blockchain CLE</h1>
        <nav>
          <Link to="/lawyer">Lawyer</Link>
          <Link to="/accreditor">Accreditor</Link>
        </nav>
      </section>
    );
  }
}
