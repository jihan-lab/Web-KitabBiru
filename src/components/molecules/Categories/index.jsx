import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Categories(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={props.href}>
      <div className="bg-categories">
        <div className="content-categories">
          <div className="img-wrap-categories">
            <img className="img-categories" src={props.image} />
          </div>
          <div className="text-categories">{props.label}</div>
        </div>
      </div>
    </Link>
  );
}

Categories.propTypes = {
  href: propTypes.string,
  label: propTypes.string,
  image: propTypes.string,
};

export default Categories;
