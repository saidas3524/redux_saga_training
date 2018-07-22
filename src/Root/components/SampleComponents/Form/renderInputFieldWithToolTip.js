import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

class renderInputFieldWithToolTip extends PureComponent {
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
      handleError,
      selectedValue,
      meta: { touched, error }
    } = this.props;
    return (
      <React.Fragment>
        <div className={"form-group " + className}>
          {label && <label
            htmlFor={id}
            className={
              "control-label " +
              (customLabelClassNames ? customLabelClassNames : "")
            }
          >
            {label}
            {LabelComponent && <LabelComponent />}
          </label>}
          <input
            className={"form-control " + (touched && error ? "is-invalid" : "")}
            disabled={disabled ? true : false}
            readOnly={readOnly ? true : false}
            onKeyPress={onKeyPress}
            {...input}
            value={selectedValue}
            id={id}
            placeholder={placeholder}
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
      </React.Fragment>
    );
  }
}

// export default renderInputFieldWithToolTip;

// const renderInputFieldWithToolTip = ({
//   input,
//   id,
//   className,
//   label,
//   LabelComponent,
//   onKeyPress,
//   customLabelClassNames,
//   placeholder,
//   disabled,
//   readOnly,
//   type,
//   handleError,
//   meta: { touched, error }
// }) => {
//   return (
//     <React.Fragment>
//       <div className={"form-group " + className}>
//         <label
//           htmlFor={id}
//           className={
//             "control-label " +
//             (customLabelClassNames ? customLabelClassNames : "")
//           }
//         >
//           {label}
//           {LabelComponent && <LabelComponent />}
//         </label>
//         <input
//           className={"form-control " + (touched && error ? "is-invalid" : "")}
//           disabled={disabled ? true : false}
//           readOnly={readOnly ? true : false}
//           onKeyPress={onKeyPress}
//           {...input}
//           id={id}
//           placeholder={placeholder}
//           type={type}
//         />
//         {touched &&
//           error &&
//           <div class="invalid-feedback">
//             <span class="validation-error-btn d-inline-flex ms-glyph ms-warning" />
//             <div class="invalid-errors">
//               <p>
//                 {error}
//               </p>
//             </div>
//           </div>}
//       </div>
//     </React.Fragment>
//   );
// };

renderInputFieldWithToolTip.propTypes = propTypes;

export default renderInputFieldWithToolTip;
