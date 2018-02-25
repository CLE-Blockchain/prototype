import React from "react";
import CleRecordIndexItem from "./CleRecordIndexItem";
import _ from "lodash";

export default class CleRecordIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLawyerRecords(this.props.lawyerId);
  }

  totalCredits(type) {
    const creditTypes = ["skills", "ethics", "practice", "management"];

    let total = 0;
    if (type) {
      this.props.records.forEach(record => {
        total += parseInt(record[type]);
      });
    } else {
      this.props.records.forEach(record => {
        creditTypes.forEach(creditType => {
          total += parseInt(record[creditType]);
        });
      });
    }
    return total;
  }

  creditStats() {
    let skills = this.totalCredits("skills");
    let ethics = this.totalCredits("ethics");
    let practice = this.totalCredits("practice");
    let management = this.totalCredits("management");
    let total = skills + ethics + practice + management;

    return (
      <section className="credit-stats">
        <h2>Credit Stats:</h2>
        <ul>
          <li>Skills: {skills}</li>
          <li>Ethics and Professionalism: {ethics}</li>
          <li>Areas of Professional Practice: {practice}</li>
          <li>Law Practice Management: {management}</li>
          <li>
            <strong>Total: {total}</strong>
          </li>
        </ul>
      </section>
    );
  }

  render() {
    return (
      <div className="container shift-down">
        {/* <h1 className="my-4">
          <small />
        </h1> */}
        {this.creditStats()}
        <div className="row">
          {this.props.records.map((record, idx) => {
            return <CleRecordIndexItem key={idx} record={record} />;
          })}
        </div>
      </div>
    );
  }
}
