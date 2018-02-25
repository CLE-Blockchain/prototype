import React from "react";
import { Link } from "react-router-dom";

export default class LawyerIndexItem extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <Link to={`/lawyers/${this.props.lawyer.id}`} className="card h-100">
          <div>
            {/* <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            /> */}
            <div
              className={`card-img-top card-person card-${this.props.lawyer.name.toLowerCase()}`}
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <div className="text-center lawyer-name">
                {this.props.lawyer.name}
              </div>
            </h4>
          </div>
        </Link>
      </div>
    );
  }
}
