import React from "react";
import { NavLink } from "react-router-dom";

export default class Lawyer extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Credible
            </NavLink>
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
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Upload
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container shift-down">
          <h1 className="my-4">
            <small />
          </h1>

          <div className="row">
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet numquam aspernatur eum quasi sapiente nesciunt?
                    Voluptatibus sit, repellat sequi itaque deserunt, dolores
                    in, nesciunt, illum tempora ex quae? Nihil, dolorem!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Two</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Three</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos quisquam, error quod sed cumque, odio distinctio velit
                    nostrum temporibus necessitatibus et facere atque iure
                    perspiciatis mollitia recusandae vero vel quam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Four</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Five</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 portfolio-item">
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt=""
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Project Six</a>
                  </h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque earum nostrum suscipit ducimus nihil provident,
                    perferendis rem illo, voluptate atque, sit eius in
                    voluptates, nemo repellat fugiat excepturi! Nemo, esse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2018
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
