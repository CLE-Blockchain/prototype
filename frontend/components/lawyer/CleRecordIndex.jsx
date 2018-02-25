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

  render() {
    return (
      <div className="container shift-down">
        <h1 className="my-4">
          <small />
        </h1>
        <div className="row">
          {this.props.records.map(record => {
            return <CleRecordIndexItem key={record.Id} record={record} />;
          })}
        </div>
      </div>
    );
  }
}
