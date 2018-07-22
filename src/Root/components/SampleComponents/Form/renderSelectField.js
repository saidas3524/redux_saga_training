import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    className:PropTypes.string,
};

const renderSelectField = ({
  input,
  id,
  className,
  data,
  label,
  optionKey,optionValue,
  controlDisable,showKeyValue,
    meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <div className={"form-group " + className} >
        <label htmlFor={id} className="control-label">
          {label}
        </label>
        <select className={"form-control "+(touched && error ? "is-invalid" :"")} {...input} disabled={controlDisable}>
        <option value=""> Select </option>
          {data &&
            data.map((val, index) => (
              <option value={val[optionKey]} key={index} >
              {showKeyValue?val[optionKey] +"-"+ val[optionValue]:  val[optionValue]}
              </option>
            ))}
        </select>
        {touched && error && <div className="invalid-feedback">{error}</div>}
      </div>
    </React.Fragment>
  );
};

renderSelectField.propTypes = propTypes;

export default renderSelectField;


