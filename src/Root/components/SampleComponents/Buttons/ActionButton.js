import React from "react";
import PropTypes from "prop-types";

const ActionButton = ({ title, onClick, className, disabled }) => {
  return (
    <button
      className={
        "btn btn-primary justify-content-center align-items-center " +
        (className ? className : "")
      }
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span>
        {title}
      </span>
    </button>
  );
};

ActionButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ActionButton;
