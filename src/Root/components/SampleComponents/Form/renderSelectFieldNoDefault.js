import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    id:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    className:PropTypes.string,
};

const renderSelectFieldNoDefault = ({
  input,
  id,
  className,
  data,
  label,
  optionKey,optionValue,
  controlDisable,
    meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <div className={"form-group " + className} >
        <label htmlFor={id} className="control-label">
          {label}
        </label>
        <select className={"form-control "+(touched && error ? "is-invalid" :"")} {...input} disabled={controlDisable}>
                 {data &&
            data.map((val, index) => (
              <option value={val[optionKey]} key={index} >
                {val[optionValue]}
              </option>
            ))}
        </select>
        {touched && error && <div className="invalid-feedback">{error}</div>}
      </div>
    </React.Fragment>
  );
};

renderSelectFieldNoDefault.propTypes = propTypes;

export default renderSelectFieldNoDefault;


