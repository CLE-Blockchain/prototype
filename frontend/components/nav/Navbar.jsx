import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitting: false };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ submitting: false });
  }

  handleUpload(e) {
    this.setState({ submitting: true });
    setTimeout(() => {
      this.props.uploadRecord(this.parseForm());
    }, 2000);
  }

  parseForm() {
    return {
      providerId: Math.floor(Math.random() * 20000),
      attorneyId: this.props.lawyerId,
      classTitle: "Important Class",
      date: "2/25/18",
      location: "NYC",
      notes: "",
      format: "remote",
      participationType: "individual",
      difficulty: "both",
      skills: Math.floor(Math.random() * 4),
      ethics: Math.floor(Math.random() * 4),
      practice: Math.floor(Math.random() * 4),
      management: Math.floor(Math.random() * 4)
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
          <div className="container">
            <div className="navbar__brand">
              <NavLink className="navbar-brand" to="/" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                {this.props.links.map((link, idx) => {
                  if (link === "home") {
                    link = "";
                  } else if (link.toLowerCase() === "upload") {
                    return (
                      <li key={idx} className="nav-item upload">
                        <label
                          htmlFor="lawyer-upload"
                          className="lawyer__custom-upload"
                        >
                          Add CLE
                        </label>
                        <input
                          onChange={this.handleUpload}
                          id="lawyer-upload"
                          className="lawyer__new-cle"
                          type="file"
                        />
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="nav-item active">
                      <NavLink className="nav-link" to={`/${link}`}>
                        {link.charAt(0).toUpperCase() +
                          link.slice(1).toLowerCase()}
                        <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className="nav-filler" />
      </div>
    );
  }
}

export default withRouter(Navbar);
