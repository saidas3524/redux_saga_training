import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router'

import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';
import bannerImg from '../../../images/banner-image.jpg';


class WelcomePage extends PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        const {localStrings} = this.props;



        return (
            <Fragment>
                <div className="dashboard-banner jumbotron jumbotron-fluid">
                    <img className="banner-image" src={bannerImg} alt="Banner Image" />
                    <div className="container">
                        <div className="banner-caption">
                            <h1>{localStrings.WELCOME_PAGE_TITLE}</h1>
                            <p>{localStrings.WELCOME_PAGE_MESSAGE}</p>
                            <a className="btn btn-secondary d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right" href="mailto:msoemops@microsoft.com" role="button">
                                <span>{localStrings.FOOTER_LINK_CONTACT_US}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <p style={{color:"black", padding:"100px 0px", textAlign:"center"}}>Add page details here</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default withRouter(LocalizationProvider(WelcomePage));

