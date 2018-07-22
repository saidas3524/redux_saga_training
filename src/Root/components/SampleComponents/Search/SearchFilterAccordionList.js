import React, { PureComponent } from 'react';
import {  ToJS } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import SearchFilters from '../../../../Root/components/SampleComponents/Search/SearchFilters';
import { searchAndFilterValueItemSelector } from '../../../../Root/selectors';
import { updateSearchFilters } from '../../../../Root/actions';
class SearchFilterAccordionList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SearchFilters {...this.props} />
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        searchFilters: searchAndFilterValueItemSelector(state, ownProps.name, "filters")

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateSearchFilters(data) { dispatch(updateSearchFilters(ownProps.name, data)) },
})
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(SearchFilterAccordionList))