import React from 'react';
import { Card } from 'reactstrap';

const NotAuthorized = () => {
    return (

        <div className="container" style={{position:'fixed',top:"40%"}}>
            <div className="justify-content-center">
                <h1 className="title text-center">401 - UNAUTHORIZED</h1>
                <p className="text-center"><i>Sorry!! Looks like you are not authorized to view the page</i> </p>
            </div>
        </div>
    );
};

export default NotAuthorized;