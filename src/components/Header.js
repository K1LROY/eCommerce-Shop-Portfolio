/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Badge } from "antd";

import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../constants";

// const { SubMenu, Item } = Menu;

const Header = () => {
  // const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  // const handleClick = (e) => {
  //   // console.log(e.key);
  //   setCurrent(e.key);
  // };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg   navbar-light bg-light ">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand text-decoration-none nav-link  active"
        >
          <img src="logo1.png" alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list "></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto align-items-center mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to="/"
                className="text-decoration-none nav-link   pe-1 fw-bold"
              >
                Home
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to="/shop"
                className="text-decoration-none nav-link  pe-1 fw-bold"
              >
                Shop
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to="/register"
                className="text-decoration-none nav-link pe-1 fw-bold"
              >
                Register
              </Link>
            </li>

            <li className="nav-item ">
              <Link
                to="/cart"
                className="text-decoration-none nav-link pe-1 fw-bold"
              >
                <Badge count={cart.length} offset={[9, 0]}>
                  Cart
                </Badge>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center ">
            {user && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-gear pe-1"></i>
                  {user.email && user.email.split("@")[0]}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {user && user.role === "subscriber" && (
                    <li>
                      <Link
                        to="/user/history"
                        className="dropdown-item"
                        href="#"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}

                  {user && user.role === "admin" && (
                    <li>
                      <Link
                        to="/admin/dashboard"
                        className="dropdown-item"
                        href="#"
                      >
                        Dashboard
                      </Link>
                    </li>
                  )}

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={logout} href="#">
                      <i className="bi bi-box-arrow-left pe-1"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="text-decoration-none nav-link pe-1 fw-bold"
                >
                  <i className="bi bi-box-arrow-in-right pe-1" />
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
