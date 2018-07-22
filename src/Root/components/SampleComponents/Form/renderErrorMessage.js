import React from 'react';
import PropTypes from 'prop-types';

const  renderErrorMessage = ({ meta: { touched, error } }) => touched && error ? <div className="invalid-custom-feedback">{error}</div> : false;
 
export default renderErrorMessage;