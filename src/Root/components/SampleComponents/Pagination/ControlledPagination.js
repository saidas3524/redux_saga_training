import React from "react";
import PropTypes from "prop-types";
import { pagerSelector } from "../../../selectors";
import { setCurrentPage, setCompletePaginationInfo, setPaginationIndexes } from "../../../actions";
import { connect } from 'react-redux';
import { ToJS } from "@ec-oem/ec.oem.oa3.mux.core/components";




class ControlledPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {}
        }
    }



    componentDidMount() {
        var { length, paginationInfo } = this.props;
        const { startIndex, endIndex, possibleEndIndex, ...pageInfo } = this.getPager(length, paginationInfo);
        this.props.setPaginationIndexes({ startIndex, endIndex, possibleEndIndex });
        this.props.setPaginationInfo(pageInfo);;
    }

    componentDidUpdate() {
        var { length, paginationInfo } = this.props;
        const { startIndex, endIndex, possibleEndIndex, ...pageInfo } = this.getPager(length, paginationInfo);
        this.props.setPaginationIndexes({ startIndex, endIndex, possibleEndIndex });
        this.props.setPaginationInfo(pageInfo);;
    }


    setPage(page) {
        this.props.setCurrentPage(page);
    }

    getPager(totalItems, paginationInfo) {


        if (!totalItems || !paginationInfo) return null;
        // default to first page
        let { currentPage, pageSize } = paginationInfo;
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
        let possibleEndIndex = startIndex + pageSize - 1;

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array(endPage + 1 - startPage).keys()].map(
            i => startPage + i
        );
        var paginationInfo = {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages,
            startIndex: startIndex,
            endIndex: endIndex,
            possibleEndIndex: possibleEndIndex
        };
        // return object with all pager properties required by the view
        return paginationInfo;
    }

    render() {
        var { length, paginationInfo } = this.props;
        let pager = this.getPager(length, paginationInfo);
        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <React.Fragment>
                <nav aria-label="navigation">
                    {pager && <ul className="pagination justify-content-end">
                        <li className={"page-item " + (pager.currentPage === 1 ? "disabled" : "")}>
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
                        <li className={"page-item " + (pager.currentPage === pager.totalPages ? "disabled" : "")}>
                            <a
                                href="javascript:void(0);"
                                className="page-link  d-inline-flex align-items-center flex-row-reverse ms-glyph ms-chevron-right"
                                onClick={() => this.setPage(pager.currentPage + 1)}>
                                Next
                        </a>
                        </li>
                    </ul>}
                </nav>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        paginationInfo: pagerSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        setCurrentPage(page) {
            dispatch(setCurrentPage(page))

        },
        setPaginationInfo(paginationInfo) {
            dispatch(setCompletePaginationInfo(paginationInfo))

        },
        setPaginationIndexes(indexes) {
            dispatch(setPaginationIndexes(indexes))

        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ToJS(ControlledPagination));
