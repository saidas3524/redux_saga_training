import React,{PureComponent} from 'react';
import GlobalNavigation from './Global';
import LocalNavigation from './Local';
import HeaderFloatingButton from './HeaderFloatingButton';


class Header extends PureComponent {
    render() {
        return (
            <header ref={(ele) => this.props.setHeaderRef(ele)}  id="header">
                <GlobalNavigation />
                <LocalNavigation />
                {/* <HeaderFloatingButton footerRef={this.props.footerRef}/> */}
            </header>
        );
    }
}

export default Header;

