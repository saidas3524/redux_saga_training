import React, { PureComponent,Fragment } from 'react';
import { ContainerLocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import { userInfoSelector } from "@ec-oem/ec.oem.oa3.mux.core/selectors";
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown as Dropdown,
} from "reactstrap";
import usrImg from "../../../images/user-image.png";


class UserDropDown extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { user,localStrings } = this.props;
        return (
            <Fragment>
                {user ?
                    <Dropdown
                        isOpen={this.state.isOpen}
                        className="user-login-details ml-auto"
                        toggle={this.toggle}>
                        <DropdownToggle
                            tag="div"
                            className="btn dropdown-toggle  ms-glyph ms-chevron-down"
                            role="button"
                            id="loggedUserDetail"
                            aria-haspopup
                            aria-expanded={false}
                        >
                            <h5 className="user-name-area d-none d-md-block">
                                <span className="first-name">{user.user.FirstName}</span>
                                <span className="last-name">{user.user.LastName}</span>
                            </h5>
                            <span className="user-avtar icon-profile">
                                <img src={usrImg} alt="user-profile-image" />
                            </span>
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="loggedUserDetail">
                            {/* <DropdownItem tag={Link} to="/user">
                                <span className="profile-icon ms-glyph ms-contact" />{localStrings.USER_PROFILE_LINK_TITLE}
                            </DropdownItem> */}
                            <DropdownItem  href="../SignOut.aspx">
                                <span className="logout-icon ms-glyph ms-logout" />{localStrings.LOG_OUT_LINK_TITLE}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown> : <div></div>}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: userInfoSelector(state)
    }
}
export default connect(mapStateToProps, )(ContainerLocalizationProvider(UserDropDown))