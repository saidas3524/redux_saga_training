import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  pageSize: PropTypes.number
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items || this.props.pageSize !== prevProps.pageSize) {
        this.setPage(this.props.initialPage);
    }
}
  

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || (pager.totalPages && page > pager.totalPages)) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);
    // update state
    this.setState({ pager: pager });

    // get new page of items from items array
    // var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // call change page function in parent component
    this.props.onChangePage(pager.currentPage);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 5) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    const pageSize = this.props.pageSize || defaultProps.pageSize;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <nav aria-label="navigation">
        <ul className="pagination justify-content-end">
          <li className={ "page-item " + (pager.currentPage === 1 ? "disabled" : "")}>
            <a href="javascript:void(0);"
              className="page-link d-inline-flex align-items-center ms-glyph ms-chevron-left"
              onClick={() => this.setPage(pager.currentPage - 1)}>
              Previous
            </a>
          </li>
          {pager.pages.map((page, index) => (
            <li
              key={index}
              className={"page-item " + (pager.currentPage === page ? "active" : "")}>
              <a
                href="javascript:void(0);"
                className="page-link"
                onClick={() => this.setPage(page)}>
                {page}
              </a>
            </li>
          ))}
          <li className={"page-item " +(pager.currentPage === pager.totalPages ? "disabled" : "")}>
            <a
              href="javascript:void(0);"
              className="page-link  d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right"
              onClick={() => this.setPage(pager.currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
