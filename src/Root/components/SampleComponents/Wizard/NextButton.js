import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ title }) => {
    return (
        <button className="btn btn-primary nextBtn d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right" type="submit">
            <span>{title}</span>
        </button>
    );
};

NextButton.propTypes = {
    title: PropTypes.string.isRequired
};

export default NextButton;