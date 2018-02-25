import React from "react";

export default class CleRecordIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger; // eslint-disable-line
    return (
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <div>
            <img
              className="card-img-top"
              src="http://placehold.it/700x400"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <div>{this.props.record.CourseName}</div>
            </h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit,
              repellat sequi itaque deserunt, dolores in, nesciunt, illum
              tempora ex quae? Nihil, dolorem!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
