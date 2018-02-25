import React from "react";
import Navbar from "../nav/Navbar";
import { withRouter } from "react-router-dom";
import _ from "lodash";

class RecordForm extends React.Component {
  render() {
    let record;

    const {
      providerId,
      attorneyId,
      classTitle,
      date,
      location,
      notes,
      format,
      participationType,
      difficulty,
      skills,
      ethics,
      practice,
      management
    } = this.props.records[this.props.match.params.id];

    return (
      <section className="form-view accreditorForm__section">
        <Navbar links={[]} />
        <form className="accreditorForm">
          <h1 className="text-center accform__title">CLE Certificate</h1>
          <div className="form-group">
            <label htmlFor="accform-cle-provider-id">Provider ID</label>
            <input
              value={providerId}
              disabled
              className="form-control"
              id="accform-cle-provider-id"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-attorney-id">Attorney ID</label>
            <input
              value={attorneyId}
              disabled
              className="form-control"
              id="accform-attorney-id"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-class-title">Class Title</label>
            <input
              value={classTitle}
              disabled
              className="form-control"
              id="accform-class-title"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-date">Date</label>
            <input
              value={date}
              disabled
              className="form-control"
              id="accform-date"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-location">Location</label>
            <input
              value={location}
              disabled
              className="form-control"
              id="accform-location"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-notes">Notes</label>
            <textarea
              id="accform-notes"
              className="form-control"
              rows="4"
              cols="50"
            >
              {notes}
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="accform-location">Format</label>
            <input
              value={format}
              disabled
              className="form-control"
              id="accform-location"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-location">Participation Type</label>
            <input
              value={participationType}
              disabled
              className="form-control"
              id="accform-location"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accform-location">Level Of Difficulty</label>
            <input
              value={difficulty}
              disabled
              className="form-control"
              id="accform-location"
              type="text"
            />
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
                value={skills}
                disabled
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
                value={ethics}
                disabled
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
                value={practice}
                disabled
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
                value={management}
                disabled
                className="form-control"
                id="accform-credit-management"
                type="number"
                min="0"
              />
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(RecordForm);
