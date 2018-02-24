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
    if (e.target.id === "live") {
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
        <h1 className="text-center">Create CLE Certificate Transaction</h1>
        <form className="container accreditorForm">
          <label htmlFor="cle-provider-id">CLE Provider ID</label>
          <input id="cle-provider-id" type="text" />

          <label htmlFor="attorney-id">Attorney ID</label>
          <input id="attorney-id" type="text" />

          <label htmlFor="class-title">Class Title</label>
          <input id="class-title" type="text" />

          <label htmlFor="date">Date</label>
          <input id="date" type="date" />

          <label htmlFor="location">Location</label>
          <input id="location" type="text" />

          <label htmlFor="num-cle-credits"># CLE Credits</label>
          <input id="num-cle-credits" type="number" min="1" max="24" />

          <label htmlFor="notes">Notes</label>
          <textarea id="notes" rows="4" cols="50" />

          <h3>Format</h3>
          <label htmlFor="live">Live</label>
          <input
            onClick={this.handleToggleFormat}
            id="live"
            type="radio"
            name="format"
          />

          <label htmlFor="remote">Remote</label>
          <input
            onClick={this.handleToggleFormat}
            id="remote"
            type="radio"
            name="format"
          />

          {this.formatChoices()}

          <h3>Participation Type</h3>
          <label htmlFor="group">Group</label>
          <input id="group" type="radio" name="participation" />

          <label htmlFor="individual-self-study">Individual / Self Study</label>
          <input id="individual-self-study" type="radio" name="participation" />

          <h3>Level of Difficulty</h3>
          <select>
            <option value="Experienced Attorney">Experienced Attorney</option>
            <option value="New Admitted">New Admitted</option>
            <option value="Both">Both</option>
          </select>

          <h3>Category</h3>
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
