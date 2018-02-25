import React from "react";
import Navbar from "../nav/Navbar";
import _ from "lodash";

class AccreditorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false,
      providerId: "",
      attorneyId: "",
      classTitle: "",
      date: "",
      location: "",
      notes: "",
      format: "",
      participationType: "",
      difficulty: "",
      skills: "0",
      ethics: "0",
      practice: "0",
      management: "0"
    };
    this.handleToggleFormat = this.handleToggleFormat.bind(this);
    this.formatChoices = this.formatChoices.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleFormat(e) {
    if (e.target.id === "accform-live") {
      this.setState({ live: true });
    } else {
      this.setState({ live: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = _.merge({}, this.state);
    delete data.live;
    this.props.createRecord(data);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  formatChoices() {
    if (this.state.live) {
      return (
        <select onChange={this.handleChange("format")}>
          <option selected disabled>
            -- Select a live format --
          </option>
          <option value="Questions Allowed During Program (3)">
            Questions Allowed During Program (3)
          </option>
          <option value="Questions Not Allowed During Program (4)">
            Questions Not Allowed During Program (4)
          </option>
          <option value="On Demand / Recorded (5)">
            On Demand / Recorded (5)
          </option>
          <option value="Other (6)">Other (6)</option>
        </select>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="form-view accreditorForm__section">
        <Navbar links={[]} />
        <form onSubmit={this.handleSubmit} className="accreditorForm">
          <h1 className="text-center accform__title">
            Create CLE Certificate Transaction
          </h1>
          <div className="form-group">
            <label htmlFor="accform-cle-provider-id">Provider ID</label>
            <input
              onChange={this.handleChange("providerId")}
              className="form-control"
              id="accform-cle-provider-id"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-attorney-id">Attorney ID</label>
            <input
              onChange={this.handleChange("attorneyId")}
              className="form-control"
              id="accform-attorney-id"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-class-title">Class Title</label>
            <input
              onChange={this.handleChange("classTitle")}
              className="form-control"
              id="accform-class-title"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-date">Date</label>
            <input
              onChange={this.handleChange("date")}
              className="form-control"
              id="accform-date"
              type="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-location">Location</label>
            <input
              onChange={this.handleChange("location")}
              className="form-control"
              id="accform-location"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-notes">Notes</label>
            <textarea
              onChange={this.handleChange("notes")}
              id="accform-notes"
              className="form-control"
              rows="4"
              cols="50"
            />
          </div>

          <h6>Format</h6>
          <div className="accform__format">
            <label className="accform__radio-label" htmlFor="accform-live">
              Live
            </label>
            <input
              onClick={this.handleToggleFormat}
              id="accform-live"
              type="radio"
              name="format"
            />

            <label className="accform__radio-label" htmlFor="accform-remote">
              Remote
            </label>
            <input
              onChange={this.handleChange("format")}
              onClick={this.handleToggleFormat}
              value="remote"
              id="accform-remote"
              type="radio"
              name="format"
            />
          </div>

          {this.formatChoices()}

          <h6>Participation Type</h6>
          <div className="accform__participation-types">
            <label className="accform__radio-label" htmlFor="accform-group">
              Group
            </label>
            <input
              onChange={this.handleChange("participationType")}
              value="group"
              id="accform-group"
              type="radio"
              name="participation"
            />

            <label
              className="accform__radio-label"
              htmlFor="accform-individual"
            >
              Individual / Self Study
            </label>
            <input
              onChange={this.handleChange("participationType")}
              value="individual"
              id="accform-individual"
              type="radio"
              name="participation"
            />
          </div>

          <div className="form-group">
            <label>Level of Difficulty</label>
            <select
              onChange={this.handleChange("difficulty")}
              className="form-control"
            >
              <option value="Experienced Attorney">Experienced Attorney</option>
              <option value="New Admitted">New Admitted</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <h6>Credits</h6>
          <div className="accform__credits">
            <div className="form-group">
              <label
                className="accform__credits-label"
                htmlFor="accform-credit-skills"
              >
                Skills
              </label>
              <input
                onChange={this.handleChange("skills")}
                className="form-control"
                id="accform-credit-skills"
                type="number"
                min="0"
              />
            </div>

            <div className="form-group">
              <label
                className="accform__credits-label"
                htmlFor="accform-credit-ethics"
              >
                Ethics and Professionalism
              </label>
              <input
                onChange={this.handleChange("ethics")}
                className="form-control"
                id="accform-credit-ethics"
                type="number"
                min="0"
              />
            </div>

            <div className="form-group">
              <label
                className="accform__credits-label"
                htmlFor="accform-credit-areas"
              >
                Areas of Professional Practice
              </label>
              <input
                onChange={this.handleChange("practice")}
                className="form-control"
                id="accform-credit-areas"
                type="number"
                min="0"
              />
            </div>

            <div className="form-group">
              <label
                className="accform__credits-label"
                htmlFor="accform-credit-management"
              >
                Law Practice Management
              </label>
              <input
                onChange={this.handleChange("management")}
                className="form-control"
                id="accform-credit-management"
                type="number"
                min="0"
              />
            </div>
          </div>

          <button className="accform__submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default AccreditorForm;
