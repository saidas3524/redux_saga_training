import React from "react";
import PropTypes from "prop-types";
import NoteComponent from "./NoteComponent";

const propTypes = {
  title: PropTypes.string.isRequired
};

const HeaderWithIcons = ({ children, title, note }) => {
  return (
    <div className="list-title-wrapper">
      <div className="d-flex align-items-center">
        <h2 className="m-0">
          {title}
        </h2>
        {children}
      </div>
      {note && <NoteComponent note={note} />}
    </div>
  );
};

HeaderWithIcons.propTypes = propTypes;

export default HeaderWithIcons;
