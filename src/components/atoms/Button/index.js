import React from "react";
import propTypes from "prop-types";

function Button(props) {
  const className = [props.className];
  return (
    <>
      <button>{props.children}</button>;<div>{props.fullName}</div>
    </>
  );
}

Button.propTypes = {
  className: propTypes.string,
  //   fullName: propTypes.string,
};

export default Button;
