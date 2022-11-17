import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");

  if (props.type === "link") {
    return (
      <>
        <Link className={className.join(" ")} to={props.href}>
          {props.children}
        </Link>
      </>
    );
  }
  return (
    <>
      <button className={className.join(" ")}>{props.children}</button>
    </>
  );
}

Button.propTypes = {
  className: propTypes.string,
  isPrimary: propTypes.bool,
  type: propTypes.string,
  href: propTypes.string,
  //   fullName: propTypes.string,
};

export default Button;
