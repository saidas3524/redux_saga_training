import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

const renderInputField = ({
  input,
  id,
  className,
  label,
  LabelComponent,
  onKeyPress,
  customLabelClassNames,
  placeholder,
  disabled,
  readOnly,
  type,
  handleError,
  maxLength,
  searchButton,
  meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <div className={"form-group " + className}>
        <label
          htmlFor={id}
          className={
            "control-label " +
            (customLabelClassNames ? customLabelClassNames : "")
          }
        >
          {label}
          {LabelComponent && <LabelComponent />}
        </label>
        <input
          className={"form-control " + (touched && error ? "is-invalid" : "")}
          disabled={disabled ? true : false}
          readOnly={readOnly ? true : false}
          onKeyPress={onKeyPress}
          {...input}
          id={id}
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
        />
        {searchButton && !(touched &&
          error) && <span  className={"ms-glyph ms-search input-search-icon flipped "+(disabled?"disabled":"")}></span>}

        {touched &&
          error &&
          <div className="invalid-feedback">
            {error}
          </div>}
      </div>
    </React.Fragment>
  );
};

renderInputField.propTypes = propTypes;

export default renderInputField;
