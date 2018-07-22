import React, { PureComponent } from 'react';
import { ToJS } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import { pagerSelector, lastPageSelector } from '../../../selectors';
import ControlledPageSizeSelection from './ControlledPageSizeSelection';
import PaginatationLabel from './PaginatationLabel';
import ControlledPagination from './ControlledPagination';
import { setCurrentPage } from "../../../actions";


class ControlledPaginatedResults extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(newProps) {
        if (newProps && newProps.length && this.props && this.props.length && newProps.endPage) {
            const { pageSize, currentPage} = this.props.paginationInfo;
            const {endPage} = this.props;
            let startIndex = (currentPage - 1) * pageSize;
            let possibleEndIndex = startIndex + pageSize - 1;
            let endIndex = Math.min(startIndex + pageSize - 1, this.props.length - 1);
            if (newProps.length == this.props.length + 1 ) {
                if (possibleEndIndex != -1 && this.props.length + 1 <= possibleEndIndex && currentPage != endPage) {
                     this.props.setCurrentPage(endPage);
                }
                else if( possibleEndIndex!=-1 && possibleEndIndex< this.props.length){
                    this.props.setCurrentPage(endPage+1);
                }
            }

            if (newProps.length  == this.props.length - 1 && startIndex ==endIndex && this.props.length -1 <= startIndex) {
                    this.props.setCurrentPage(currentPage -1 );
            }
        }
    }
    render() {
        const {paginationInfo,length} = this.props;
        if(!paginationInfo) return null;
        const {currentPage,pageSize,title }  = paginationInfo;
        return (
            <div className="pagination-wrapper d-flex flex-column flex-sm-row align-items-center justify-content-between">
            <div className="jump-to-page d-flex align-items-center justify-content-end justify-content-md-start">
                <ControlledPageSizeSelection />
                <PaginatationLabel currentPage={currentPage} currentPageSize={pageSize} length={length} title={title} />
            </div>
            <ControlledPagination length={length} />
        </div>
        )
        
    }
}
const mapStateToProps = (state) => {
    return {
        paginationInfo: pagerSelector(state),
        endPage : lastPageSelector(state)
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        setCurrentPage(page) {
            dispatch(setCurrentPage(page))

        }
      
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(ControlledPaginatedResults))