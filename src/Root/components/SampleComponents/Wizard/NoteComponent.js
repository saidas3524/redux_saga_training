import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  note: PropTypes.string.isRequired
};

const NoteComponent = ({ note }) => {
  return (
    <p>
      <i>
        {note}
      </i>
    </p>
  );
};

NoteComponent.propTypes = propTypes;

export default NoteComponent;
