import React, { PureComponent } from 'react';
import {
    DropdownItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu
} from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';


class DropDownNavigationSection extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        const { buttonText, items, localStrings, toggleActive } = this.props;
        const direction = toggleActive == true ? "down" : "right";
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} inNavbar tag={"li"} className="dropdown-submenu"  >
                <DropdownToggle className="dropdown-item" role="button" tag={"a"} caret>
                    {localStrings["NAV_LINK_" + buttonText.toUpperCase()]}
                </DropdownToggle>
                <DropdownMenu tag={"ul"} >

                    {items && items.length > 0 && items.map(newItem => {
                        return (newItem.isCurrentPlatform ? <li key={newItem.key}> <DropdownItem onClick={()=>this.props.toggle()} tag={Link} to={newItem.route}>{localStrings["NAV_LINK_" + newItem.text.toUpperCase()]}</DropdownItem></li> : <li key={newItem.key}> <DropdownItem href={newItem.href}>{localStrings["NAV_LINK_" + newItem.text.toUpperCase()]}</DropdownItem></li>)
                    }
                    )}
                </DropdownMenu>
            </Dropdown>
        );
    }
}


export default LocalizationProvider(DropDownNavigationSection);