import React from "react";
import PropTypes from "prop-types";

const PrevButton = ({ title, onClick, className }) => {
  return (
    <button
      className={
        "btn btn-primary prevBtn align-items-center flex-row ms-glyph ms-chevron-left left-icon " +
        (className ? className : "")
      }
      onClick={onClick}
      type="button"
    >
      <span>
        {title}
      </span>
    </button>
  );
};

PrevButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrevButton;
