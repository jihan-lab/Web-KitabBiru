import React from "react";
import propTypes from "prop-types";

function Input(props) {
  return (
    <div className="mb-3 text-start">
      <label htmlFor={props.htmlFor} className="form-label">
        {props.label}
      </label>
      <input type={props.type} className="form-control" id={props.id} />
    </div>
  );
}

Input.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  id: propTypes.string,
  htmlFor: propTypes.string,
};

export default Input;
