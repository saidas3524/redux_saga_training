import React, { PureComponent } from 'react';
import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';
import LanguageDropdown from './LanguageDropdown';
import FooterNavigation from './FooterNavigation';
import FooterFloatingButton from './FooterFloatingButton';



class Footer extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { localStrings,headerRef } = this.props;
        return (
            <footer ref={(ele)=> this.props.setFooterRef(ele)} className="footer" id="footer">
                <div className="container d-lg-flex justify-content-lg-between">
                    <LanguageDropdown />
                    <FooterNavigation />
                </div>
                {/* <FooterFloatingButton headerRef = {headerRef}/> */}

            </footer>

        )
    }
}


export default LocalizationProvider(Footer);