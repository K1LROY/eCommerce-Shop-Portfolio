/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Menudropdown = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      {" "}
      <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">
        MegaMenu
      </a>{" "}
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbars"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
      >
        {" "}
        <span className="navbar-toggler-icon"></span>{" "}
      </button>
      <div id="navbarContent" className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown megamenu">
            <a
              id="megamneu"
              href=""
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle font-weight-bold text-uppercase"
            >
              Mega Menu
            </a>
            <div
              aria-labelledby="megamneu"
              className="dropdown-menu border-0 p-0 m-0"
            >
              <div className="container">
                <div className="row bg-white rounded-0 m-0 shadow-sm">
                  <div className="col-lg-7 col-xl-8">
                    <div className="p-4">
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <h6 className="font-weight-bold text-uppercase">
                            Heading one
                          </h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                About
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Help
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Account
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h6 className="font-weight-bold text-uppercase">
                            Heading two
                          </h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                About
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Help
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Account
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h6 className="font-weight-bold text-uppercase">
                            Heading three
                          </h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                About
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Help
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Account
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <h6 className="font-weight-bold text-uppercase">
                            Heading four
                          </h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                About
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Help
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="" className="nav-link text-small pb-0 ">
                                Account
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 col-xl-4 px-0 d-none d-lg-block"
                    style="background: center center url(https://images.unsplash.com/photo-1533637267520-4dfd6aa7ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)no-repeat; background-size: cover;"
                  ></div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link font-weight-bold text-uppercase">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link font-weight-bold text-uppercase">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link font-weight-bold text-uppercase">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menudropdown;
