import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string
};

const WizardStep = ({title,children,id,order}) => {
  return (
    <div className="panel panel-primary wizard-content" id={`step-${order} - ${id}`}>
      <div className="panel-body">
        {title && <h2 className="panel-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

WizardStep.propTypes = propTypes;

export default WizardStep;
