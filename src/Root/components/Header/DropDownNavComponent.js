import React,{PureComponent} from 'react';

import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavDropdown,
    NavItem,
    NavLink,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button,
    Container
  } from "reactstrap";

import DropDownNavigationSection from './DropDownNavigationSection';
import { LocalizationProvider } from '@ec-oem/ec.oem.oa3.mux.core/components';

class DropDownNavComponent extends PureComponent {
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
        const { buttonText, items,localStrings,toggleActive,leftAlign } = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={leftAlign ? "left-align":""} nav inNavbar>
                <DropdownToggle  nav caret>
                    {localStrings["NAV_LINK_"+buttonText.toUpperCase()]}
                </DropdownToggle>
                <DropdownMenu tag={"ul"}>
                    {items && items.map((item) => {
                        return <DropDownNavigationSection toggleActive={toggleActive} toggle = {this.toggle} {...item}/>
                    })}
                 
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default LocalizationProvider(DropDownNavComponent);

