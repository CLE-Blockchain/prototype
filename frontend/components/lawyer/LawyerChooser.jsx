import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../nav/Navbar";
import LawyerIndex from "./LawyerIndex";

export default class Lawyer extends React.Component {
  render() {
    return (
      <div>
        <Nav links={["Home", "Upload"]} />

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
