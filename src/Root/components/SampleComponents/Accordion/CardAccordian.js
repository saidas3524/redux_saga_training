import { Collapse, Card, CardBody, CardHeader, Button } from "reactstrap";
import React, { Component } from "react";
import PropTypes from "prop-types";

class CardAccordian extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  componentWillMount() {
    this.setState({ collapse: this.props.defaultCollapse });
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ collapse: nextProps.defaultCollapse });
  }
  render() {
    const { children, title, id } = this.props;
    return (
      <Card>
        <CardHeader id={id}>
          <h4 className="mb-0">
            <button
              aria-controls={title}
              className={
                this.state.collapse
                  ? "collapsed ms-glyph ms-chevron-down btn btn-link"
                  : " ms-glyph ms-chevron-down btn btn-link"
              }
              onClick={this.toggle}
              aria-expanded={!this.state.collapse}
            >
              <span tabIndex="-1">
                {title}
              </span>
            </button>
          </h4>
        </CardHeader>
        <Collapse isOpen={!this.state.collapse}>
          <CardBody aria-labelledby={`${id}-details`}>
            {children}
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

CardAccordian.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired
};

export default CardAccordian;
