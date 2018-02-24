import React from "react";

class AccreditorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false
    };
    this.handleToggleFormat = this.handleToggleFormat.bind(this);
    this.formatChoices = this.formatChoices.bind(this);
  }

  handleToggleFormat(e) {
    if (e.target.id === "accform-live") {
      this.setState({ live: true });
    } else {
      this.setState({ live: false });
    }
  }

  formatChoices() {
    if (this.state.live) {
      return (
        <select>
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
      <section>
        <h1 className="text-center accform__title">
          Create CLE Certificate Transaction
        </h1>
        <form className="accreditorForm">
          <label htmlFor="accform-cle-provider-id">Provider ID</label>
          <input id="accform-cle-provider-id" type="text" />

          <label htmlFor="accform-attorney-id">Attorney ID</label>
          <input id="accform-attorney-id" type="text" />

          <label htmlFor="accform-class-title">Class Title</label>
          <input id="accform-class-title" type="text" />

          <label htmlFor="accform-date">Date</label>
          <input id="accform-date" type="date" />

          <label htmlFor="accform-location">Location</label>
          <input id="accform-location" type="text" />

          <label htmlFor="accform-num-cle-credits"># CLE Credits</label>
          <input id="accform-num-cle-credits" type="number" min="1" max="24" />

          <label htmlFor="accform-notes">Notes</label>
          <textarea id="accform-notes" rows="4" cols="50" />

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
              onClick={this.handleToggleFormat}
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
            <input id="accform-group" type="radio" name="participation" />

            <label
              className="accform__radio-label"
              htmlFor="accform-individual"
            >
              Individual / Self Study
            </label>
            <input id="accform-individual" type="radio" name="participation" />
          </div>

          <h6>Level of Difficulty</h6>
          <select>
            <option value="Experienced Attorney">Experienced Attorney</option>
            <option value="New Admitted">New Admitted</option>
            <option value="Both">Both</option>
          </select>

          <h6>Category</h6>
          <select>
            <option value="Skills">Skills</option>
            <option value="Ethics and Professionalism">
              Ethics and Professionalism
            </option>
            <option value="Areas of Professional Practice">
              Areas of Professional Practice
            </option>
            <option value="Law Practice Management">
              Law Practice Management
            </option>
          </select>
        </form>
      </section>
    );
  }
}

export default AccreditorForm;
