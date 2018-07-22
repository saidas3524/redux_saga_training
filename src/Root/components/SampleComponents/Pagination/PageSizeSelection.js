import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  interval: PropTypes.number.isRequired,
  onPageSizeChanged: PropTypes.func.isRequired,
  title: PropTypes.string
};

class PageSizeSelection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, onPageSizeChanged,interval,defaultValue,length } = this.props;
    if(length<=0) return null;
    return (
      <select
        className="selectpicker"
        aria-label={title ? `${title}-filter` : "filter"}
        defaultValue = {defaultValue}
        onChange={event => onPageSizeChanged(event.target.value)}
      >
        <option>{interval}</option>
        <option>{2 * interval}</option>
        <option>{3 * interval}</option>
        <option>{5 * interval}</option>
      </select>
    );
  }
}

PageSizeSelection.propTypes = propTypes;

export default PageSizeSelection;
