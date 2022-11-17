import React from "react";
import { Link } from "react-router-dom";
import { IconLogo } from "../../../assets/images";
import "./index.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between ">
        <Link className="navbar-brand" to="/home">
          <img src={IconLogo} />
        </Link>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className=" text-white btn btn-success nav-link active mb-2"
                to="/"
              >
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white btn btn-success nav-link active ms-3 mb-2"
                to="/"
              >
                Masuk
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-white btn btn-success ms-3 mb-2"
                to="/register"
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
