import React from 'react';
import {ModalFooter as Footer} from 'reactstrap';

const ModalFooter = ({ children }) => {
    return (
        <Footer className="d-flex align-items-center justify-content-center">
            {children}
        </Footer>
    );
};

export default ModalFooter;