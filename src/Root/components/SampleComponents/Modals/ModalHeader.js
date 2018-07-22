import React from 'react';

const ModalHeader = ({ title, isCloseButton, closeButtonClick }) => {
    return (
        <div className="modal-header d-flex">
            <h2 className="modal-title m-md-auto" id="commentTitle">{title}</h2>
            {isCloseButton && <button className="btn ms-glyph ms-close" type="button" aria-label="close button" onClick={(event) => closeButtonClick(event)}></button>}
        </div>
    );
};

export default ModalHeader;