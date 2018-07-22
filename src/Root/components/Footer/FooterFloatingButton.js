import React, { PureComponent } from "react";


class FooterFloatingButton extends React.PureComponent {
    constructor() {
        super();


    }


    scrollToTop() {
        this.props.headerRef.scrollIntoView({ behavior: "smooth" });

    }

    render() {
        return (<a href="javascript:void(0)" onClick={() => { this.scrollToTop(); }} className="floating-btn bottom ms-glyph ms-chevron-up" aria-hidden="true" aria-label="go to top"></a>)
    }
}

export default FooterFloatingButton