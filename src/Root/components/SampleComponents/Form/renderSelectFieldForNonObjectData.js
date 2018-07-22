import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

const renderSelectField = ({
  input,
  id,
  handleError,
  className,
  data,
  label,
  selectedValue,
  meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <div className={"form-group " + className}>
        {label && <label htmlFor={id} className="control-label">
          {label}
        </label>}
        <select
          className={"form-control " + (touched && error ? "is-invalid" : "")}
          {...input}
          value={selectedValue} aria-label={id}
        >
          <option value=""> Select </option>
          {data &&
            data.map(val =>
              <option value={val} key={val}>
                {val}
              </option>
            )}
        </select>
        {handleError && touched &&
          error &&
          <div className="invalid-feedback">
            {error}
          </div>}
      </div>
    </React.Fragment>
  );
};

renderSelectField.propTypes = propTypes;

export default renderSelectField;
