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
        <h1>Create CLE Certificate Transaction</h1>
        <form>
          <label>
            CLE Provider ID
            <input type="text" />
          </label>

          <label>
            Attorney ID
            <input type="text" />
          </label>

          <label>
            Class Title
            <input type="text" />
          </label>

          <label>
            Date
            <input type="date" />
          </label>

          <label>
            Location
            <input type="text" />
          </label>

          <label>
            # CLE Credits
            <input type="number" min="1" max="24" />
          </label>

          <label>
            Notes
            <textarea rows="4" cols="50" />
          </label>

          <h3>Format</h3>
          <label>
            Live
            <input
              onClick={this.handleToggleFormat}
              id="live"
              type="radio"
              name="format"
            />
          </label>

          <label>
            Remote
            <input
              onClick={this.handleToggleFormat}
              id="remote"
              type="radio"
              name="format"
            />
          </label>

          {this.formatChoices()}

          <h3>Participation Type</h3>
          <label>
            Group
            <input type="radio" name="participation" />
          </label>

          <label>
            Individual / Self Study
            <input type="radio" name="participation" />
          </label>

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
