import React from 'react';

const WizardButtonWrapper = ({children,className,flexDisplayClass,contentAlignmentClass}) => {
    return (
        <div className={"next-step-button d"+(flexDisplayClass?"-"+flexDisplayClass:"")+"-flex justify-content-between justify-content-sm-"+(contentAlignmentClass? contentAlignmentClass+" ":"end " )+(className? className:"")}>
            {children}
        </div>
    );
};

export default WizardButtonWrapper;