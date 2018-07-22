import React, { Component, PureComponent } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.min.css";

const twoDigit = n => {
  return (n < 10 ? "0" : "") + n;
};
class renderDatePickerField extends PureComponent {
  render() {
    const {
      input,
      disabled,
      placeholder,
      selectedValue,
      id,
      label,
      LabelComponent,
      customLabelClassNames,
      handleError,
      customInputClassNames,
      className,
      meta: { touched, error }
    } = this.props;

    if (selectedValue) {
      var date = new Date(selectedValue);
      var utcDate =
        twoDigit(date.getMonth() + 1) +
        "/" +
        twoDigit(date.getDate()) +
        "/" +
        date.getFullYear();
      input.value = utcDate;
    } else {
      input.value = selectedValue;
    }
    return (
      <React.Fragment>
        <div className={"form-group calendar " + className}>
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
          <DatePicker
            ref={ip => (this.myInp = ip)}
            {...input}
            disabled={disabled}
            showYearDropdown
            dateFormat="MM/DD/YYYY"
            className={
              "form-control" +
              (touched && error ? " is-invalid " : " ") +
              (customInputClassNames ? customInputClassNames : "")
            }
            selected={input.value ? moment(input.value, "MM/DD/YYYY") : null}
          />
          {handleError &&
            touched &&
            error &&
            <div className="invalid-custom-feedback">
              {error}
            </div>}
          <span
            onClick={() => {
              this.myInp.setFocus();
            }}
            className="calendar-icon ms-glyph ms-calendar"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default renderDatePickerField;
