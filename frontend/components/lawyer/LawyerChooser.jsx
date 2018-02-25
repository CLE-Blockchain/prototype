import React from "react";
import { NavLink } from "react-router-dom";
import LawyerIndex from "./LawyerIndex";

export default class Lawyer extends React.Component {
  render() {
    return (
      <div>
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
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Upload
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <LawyerIndex
          lawyers={[
            {
              id: "1",
              name: "John Scrudato"
            },
            {
              id: "5511902",
              name: "Ryan Kutter"
            },
            {
              id: "3",
              name: "Stephanie"
            },
            {
              id: "4",
              name: "Martin Hui"
            },
            {
              id: "5070859",
              name: "Christian Lang"
            }
          ]}
        />

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Credible 2018
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
