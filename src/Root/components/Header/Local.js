import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DropDownNavComponent from './DropDownNavComponent';
import NavItemComponent from './NavItemComponent';

import { ContainerLocalizationProvider } from "@ec-oem/ec.oem.oa3.mux.core/components"

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
  UncontrolledDropdown as Dropdown,
  Button,
  Container
} from "reactstrap";
import { navigationSelector } from "../../selectors";


class LocalNavigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isMobile: false,
      isOpen: false,
      toggleActive: false,
      totalItems: 0,
      startIndex: 0,
      endIndex: 0,
      currentItemSetSize: 0
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      toggleActive: true
    });
  }

  slideLeft = () => {
    const { startIndex, endIndex, currentItemSetSize } = this.state;
    const totalItems = this.props.navigationItems ? this.props.navigationItems.length : 0;

    if (startIndex - 5 > 0) {
      this.setState({
        startIndex: startIndex - 5,
        endIndex: (endIndex - 5) < currentItemSetSize ? currentItemSetSize - 1 : endIndex - 5
      })
    }
    else {
      this.setState({
        startIndex: 0,
        endIndex: currentItemSetSize < totalItems ? currentItemSetSize - 1 : totalItems - 1
      })
    }

  }
  slideRight = () => {
    const { startIndex, endIndex, currentItemSetSize } = this.state;
    const totalItems = this.props.navigationItems ? this.props.navigationItems.length : 0;

    if (endIndex + 5 < totalItems) {
      this.setState({
        startIndex: endIndex + 5 - currentItemSetSize,
        endIndex: endIndex + 5
      })
    }
    else {
      this.setState({
        startIndex: totalItems - 1 - currentItemSetSize,
        endIndex: totalItems - 1
      })
    }

  }

  componentDidMount() {
    window.addEventListener("resize", this.updatePredicate);
    this.updatePredicate();
  }
  updatePredicate = () => {
    if (window.innerWidth >= 1350)
      this.setState({
        currentItemSetSize: 8,
        startIndex: 0,
        endIndex: 7
      })
    else if (window.innerWidth < 1350 && window.innerWidth >= 1200) {
      this.setState({
        currentItemSetSize: 5,
        startIndex: 0,
        endIndex: 4
      })
    }
    else if (window.innerWidth < 1200 && window.innerWidth >= 1000) {
      this.setState({
        currentItemSetSize: 4,
        startIndex: 0,
        endIndex: 3
      })
    }
    else if (window.innerWidth < 1000 && window.innerWidth >= 768) {
      this.setState({
        currentItemSetSize: 3,
        startIndex: 0,
        endIndex: 2
      })
    }
    // else{
    //   this.setState({
    //     currentItemSetSize: this.props.navigationItems.length,
    //     startIndex: 0,
    //     endIndex: this.props.navigationItems.length-1
    //   })
    // }



    this.setState({ isMobile: window.innerWidth < 768 });
    
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  shouldLeftAlign = (index) => {
    const { startIndex, endIndex, currentItemSetSize, isMobile } = this.state;
    const totalItems = this.props.navigationItems ? this.props.navigationItems.length : 0;

    if (currentItemSetSize >= 8 && index + 2 > endIndex)
      return true;
    else if (currentItemSetSize < 8 && currentItemSetSize >= 4 && index + 1 > endIndex)
      return true;
    return false;
  }
  render() {
    const { navigationItems, localStrings } = this.props;
    const { toggleActive, startIndex, endIndex,isMobile } = this.state;

    const totalItems = navigationItems ? navigationItems.length : 0;
    return (

      <div className="main-navigation">
        {navigationItems &&
          <Navbar color="dark" className=" container justify-content-between" dark expand="md">
            <div className="selected-nav d-block d-md-none">Home</div>
            <NavbarToggler
              onClick={this.toggle}
              aria-controls="main-navigation"
              aria-expanded={this.state.isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </NavbarToggler>
            { !isMobile && <React.Fragment>
              <button className={"nav-left-slider-btn ms-glyph ms-chevron-left  " + (startIndex > 0 ? "" : "d-none")} aria-label="Scroll left" title="Scroll left" tabIndex="-1" onClick={this.slideLeft}></button>
              <button className={"nav-right-slider-btn ms-glyph ms-chevron-right  " + (endIndex + 1 >= totalItems ? "d-none" : "")} aria-label="Scroll right" title="Scroll right" tabIndex="-1" onClick={this.slideRight}></button>
            </React.Fragment>}
            <Collapse isOpen={this.state.isOpen} navbar id="main-navigation">
              <Nav navbar>
                {navigationItems.map((navItem, index) => {
                  if ((startIndex <= index && index <= endIndex) || isMobile)
                    return navItem.items ? <DropDownNavComponent key={navItem.key} leftAlign={this.shouldLeftAlign(index)}  toggleActive={toggleActive} {...navItem} /> : <NavItemComponent key={navItem.key} {...navItem} />
                  else
                    return null;
                })}

              </Nav>
            </Collapse>
          </Navbar>



        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    navigationItems: navigationSelector(state)
  }
};


export default connect(mapStateToProps, null)(ContainerLocalizationProvider(LocalNavigation)); 
