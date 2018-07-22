import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

const renderInputRadio = ({ input, id, checked, label, controlDisable, readonly }) => {
    return (
        <React.Fragment>
            <div className="custom-radio custom-control-inline switch-radio">
                <input {...input} type="radio" id={id} checked={checked} className="custom-control-input" readOnly={readonly} disabled={controlDisable} />
                <label htmlFor={id}>{label}</label>
            </div>
        </React.Fragment>
    );
};

renderInputRadio.propTypes = propTypes;

export default renderInputRadio;