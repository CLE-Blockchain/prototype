import React from "react";
import { Link, withRouter } from "react-router-dom";

class CleRecordIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.history.push(`/records/${this.props.idx}`);
  }

  render() {
    const {
      classTitle,
      providerId,
      date,
      skills,
      ethics,
      practice,
      management
    } = this.props.record;

    const allCategories = ["Skills", "Ethics", "Practice", "Management"];
    const recordCategories = [];
    [skills, ethics, practice, management].forEach((category, idx) => {
      if (parseInt(category) > 0) {
        recordCategories.push(allCategories[idx]);
      }
    });

    return (
      <div onClick={this.redirect} className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <div>
            <div className="card-img-top cle-img" />
            <div className="cle-img-bot" />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <div>{classTitle}</div>
            </h4>
            <div className="card-text">
              <div>Provider ID: {providerId}</div>
              <div>Date: {date}</div>
              <div>{recordCategories.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CleRecordIndexItem);
