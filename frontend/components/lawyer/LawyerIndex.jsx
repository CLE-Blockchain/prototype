import React from "react";
import LawyerIndexItem from "./LawyerIndexItem";
import _ from "lodash";

export default class CleRecordIndex extends React.Component {
  render() {
    return (
      <div className="container shift-down">
        <h1 className="my-4">
          <small />
        </h1>
        <div className="row row-lawyer">
          {this.props.lawyers.map((lawyer, idx) => {
            return <LawyerIndexItem key={lawyer.id} lawyer={lawyer} />;
          })}
        </div>
      </div>
    );
  }
}
