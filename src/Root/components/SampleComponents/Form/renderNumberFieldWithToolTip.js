import PropTypes from "prop-types";
import React, { PureComponent, Component } from "react";
const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

class renderNumberFieldWithToolTip extends Component {
  render() {
    const {
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
      meta: { touched, error },
      maxLength

    } = this.props;

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
          <div className="input-area">
            <input
              className={
                "form-control " + (touched && error ? "is-invalid" : "")
              }
              disabled={disabled ? true : false}
              readOnly={readOnly ? true : false}
              onKeyPress={onKeyPress}
              {...input}
              id={id}
              placeholder={placeholder}
              maxLength={maxLength}
              type={type}
            />

            {touched &&
              error &&
              <div className="invalid-feedback">
                <span className="validation-error-btn d-inline-flex ms-glyph ms-warning" />
                <div className="invalid-errors">
                  <p>
                    {error}
                  </p>
                </div>
              </div>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default renderNumberFieldWithToolTip;
