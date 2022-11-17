import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import propTypes from "prop-types";

function ListModule(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={props.href}>
      <div className="shadow p-3 mb-3 rounded list-module">
        <div className="text-list-module">{props.label}</div>
      </div>
    </Link>
  );
}

ListModule.propTypes = {
  href: propTypes.string,
  label: propTypes.string,
};

export default ListModule;
