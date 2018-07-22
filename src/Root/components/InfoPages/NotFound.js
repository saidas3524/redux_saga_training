import React from 'react';
import { Card } from 'reactstrap';

const NotFound = () => {
    return (

        <div className="container" style={{position:'fixed',top:"40%"}}>
            <div className="justify-content-center">
                <h1 className="title text-center">404 - NOT FOUND</h1>
                <p className="text-center"><i>Sorry!! Page you are looking for is not found</i> </p>
            </div>
        </div>
    );
};

export default NotFound;