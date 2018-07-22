import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ title, className, iconClass, disabled, ariaLabel }) => {
    return (
        <a href="javascript:void(0)" aria-label={ariaLabel} className={"btn btn-primary d-inline-flex align-items-center flex-row-reverse ms-glyph ms-view-price " + (iconClass ? iconClass + " " : " ") + (className ? className : "")}>
            <span>{title}</span>
        </a>
    );
};

LinkButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string
};

export default LinkButton;