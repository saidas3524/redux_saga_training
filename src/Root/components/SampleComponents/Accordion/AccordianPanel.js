import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  panelId: PropTypes.string
};
const AccordianPanel = ({ children, id }) =>
  <div id={id} className="accordion" aria-labelledby="accordion list">
    {children}
  </div>;

AccordianPanel.propTypes = propTypes;

export default AccordianPanel;
