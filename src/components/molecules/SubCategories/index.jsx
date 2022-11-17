import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function SubCategories(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={props.href}>
      <div className="card-image-wrap">
        <img
          className="card-image bg-warning"
          src={props.image}
          alt={props.alt}
        />
      </div>
      <h4 className="text-subCat">{props.title}</h4>
      <p className="desc-subCat">{props.desc}</p>
    </Link>

    // <div className="card card-featured">
    //   <figure className="img-wrapper">
    //     <img src={props.image} alt={props.alt} className="img-cover" />
    //   </figure>
    // </div>
  );
}

SubCategories.propTypes = {
  image: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  desc: propTypes.string,
  href: propTypes.string,
};

export default SubCategories;
