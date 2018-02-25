import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Navbar from "../nav/Navbar";
import CleRecordIndexContainer from "./CleRecordIndexContainer";

class Lawyer extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          links={["Home", "Upload"]}
          uploadRecord={this.props.uploadRecord}
        />

        <CleRecordIndexContainer lawyerId={this.props.match.params.id} />

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

export default withRouter(Lawyer);
