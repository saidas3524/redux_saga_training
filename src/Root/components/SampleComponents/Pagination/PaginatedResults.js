import React, { Component } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import PageSizeSelection from "./PageSizeSelection";
import PaginatationLabel from "./PaginatationLabel";

const propTypes = {
  items: PropTypes.array.isRequired,
  IteratorComponent: PropTypes.func.isRequired,
  ParentWrapper: PropTypes.func,
  pageSize: PropTypes.number,
  title: PropTypes.string
};

const defaultProps = {
  pageSize: 10
};

class PaginatedResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageSize: 0,
      interval: 0,
      currentPage: 1
    };
  }
  componentDidMount() {
    this.setState({
      currentPageSize: this.props.pageSize ? this.props.pageSize : 10,
      interval: this.props.pageSize ? this.props.pageSize : 10
    });
  }

  onPageSizeChanged = value => {
    this.setState({ currentPageSize: Number.parseInt(value) });
  };

  onChangePage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      items,
      className,
      IteratorComponent,
      ParentWrapper,
      title
    } = this.props;
    if (!items) return null;
    const { interval, currentPageSize, currentPage } = this.state;
    var startIndex = (currentPage - 1) * currentPageSize;
    var endIndex = Math.min(startIndex + currentPageSize - 1, items.length - 1);
    let ItemSlice = items.slice(startIndex, endIndex + 1);

    return (
      <React.Fragment>
        {ParentWrapper
          ? <ParentWrapper>
              {ItemSlice.map((item, index) =>
                <IteratorComponent key={index} {...item} />
              )}
            </ParentWrapper>
          : <React.Fragment>
              {ItemSlice.map((item, index) =>
                <IteratorComponent key={index} {...item} />
              )}
            </React.Fragment>}
        <div className="pagination-wrapper d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="jump-to-page d-flex align-items-center justify-content-end justify-content-md-start">
            <PageSizeSelection
              interval={interval}
              length={items.length}
              onPageSizeChanged={this.onPageSizeChanged}
            />
            <PaginatationLabel
              currentPage={currentPage}
              currentPageSize={currentPageSize}
              length={items.length}
              title={title}
            />
          </div>
          <Pagination
            items={items}
            pageSize={currentPageSize}
            onChangePage={this.onChangePage}
          />
        </div>
      </React.Fragment>
    );
  }
}

PaginatedResults.propTypes = propTypes;
export default PaginatedResults;
