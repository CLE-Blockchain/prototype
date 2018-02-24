import React from "react";

class AccreditorForm extends React.Component {
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

          <label>
            Live
            <input type="radio" name="format" />
          </label>

          <label>
            Remote
            <input type="radio" name="format" />
          </label>
        </form>
      </section>
    );
  }
}

export default AccreditorForm;
