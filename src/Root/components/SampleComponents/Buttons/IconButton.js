import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ title,onClick,iconClass,disabled }) => {
    return (
        <button className={"d-inline-flex align-items-center flex-row-reverse btn btn-icon ms-glyph "+(iconClass? iconClass:"")} disabled={disabled} onClick={onClick} type="button">
            <span className="d-none d-lg-block">{title}</span>
        </button>
    );
};

IconButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string
};

export default IconButton;