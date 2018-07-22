import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,

    trueValue: PropTypes.string.isRequired,
    falseValue: PropTypes.string.isRequired,
};

const renderInputCheckbox = ({ input, id, checked, trueValue, falseValue, label, controlDisable, readonly, meta: { touched, error } }) => {
    return (
        <React.Fragment>
            <div className="custom-checkbox switch-button-wrapper d-inline-flex">
                <input {...input} type="checkbox" checked={checked} className="custom-control-input" id={id} readOnly={readonly} disabled={controlDisable} />
                <label htmlFor={id}>

                    <span className="checkbox-title">{label}</span>

                    <span className="switch-wrapper">
                        <span className="left-btn">{trueValue}</span>
                        <span className="right-btn">{falseValue}</span>
                    </span>
                </label>
            </div>
            {touched && error && <div className="invalid-feedback">{error}</div>}
        </React.Fragment>
    );
};

renderInputCheckbox.propTypes = propTypes;

export default renderInputCheckbox;