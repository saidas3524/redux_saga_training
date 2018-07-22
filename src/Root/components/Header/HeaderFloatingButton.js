import React, { PureComponent } from "react";


class HeaderFloatingButton extends React.PureComponent {
    constructor() {
        super();
    }


    scrollToBottom() {
        this.props.footerRef.scrollIntoView({ behavior: "smooth" });

    }

    render() {
        return (<a href="javascript:void(0)" onClick={() => { this.scrollToBottom(); }} className="floating-btn top ms-glyph ms-chevron-down" aria-hidden="true" aria-label="go to bottom"></a>)
    }
}

export default HeaderFloatingButton