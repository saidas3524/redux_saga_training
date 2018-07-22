import React, { PureComponent } from 'react';
import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';
import DOCPortalFAQ from '../../../Root/data/DOCPortalFAQ.pdf';
import DOCPortalHelp from '../../../Root/data/DOCPortalHelp.pdf';
import MicrosoftOEMTermsOfUse from '../../../Root/data/MicrosoftOEM-Terms-Of-Use.pdf';

class FooterNavigation extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { localStrings } = this.props;
        return (
            <div className="d-lg-flex">
                {/* <ul className="nav justify-content-center justify-content-lg-end m-auto m-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:msoemops@microsoft.com" target="_top">{localStrings.FOOTER_LINK_CONTACT_US}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={MicrosoftOEMTermsOfUse}>{localStrings.FOOTER_LINK_TERMS_OF_USE}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://privacy.microsoft.com/en-us/privacystatement/">{localStrings.FOOTER_LINK_PRIVACY_STATEMENT}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={DOCPortalFAQ}>{localStrings.FOOTER_LINK_FAQ}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={DOCPortalHelp}>{localStrings.FOOTER_LINK_HELP}</a>
                    </li>
                </ul> */}
                <div className="copy-right d-flex justify-content-center justify-content-lg-end m-auto m-lg-0">
                    <p>&copy; {localStrings.FOOTER_LINK_MICROSOFT_COPYRIGHT}</p>
                </div>
            </div>
        )
    }
}

export default LocalizationProvider(FooterNavigation);