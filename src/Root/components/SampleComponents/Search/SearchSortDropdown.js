import React, { PureComponent } from 'react';
import { ToJS } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import { searchAndFilterValueItemSelector } from '../../../selectors';
import { searchFeatureConstants } from '../../../constants/searchFeatureConstants';
import { updateSearchSort } from '../../../actions';
class SearchSortDropDown extends PureComponent {
    constructor(props) {
        super(props);
    }
    handlesortData = (event) => {

        if (event && event.target && event.target.value) {
            event.preventDefault();

            const { sortSearchItems } = this.props,
                { value } = event.target,
                sortOption =
                    sortSearchItems && sortSearchItems.find(sortOp => sortOp.Key === value);
            this.props.updateSearchSort(sortOption);
        }
    }
    render() {
        const { sortSearchItems } = this.props;
        if (!sortSearchItems) return null;
        let option = sortSearchItems.filter((x) => x.IsSelected);
        if (!option || option.length==0) return null;
        option = option[0];
        return (
            <div class="form-group ml-2 sort-dropdown">
                <label class="d-none d-md-block" for="sort-item">Sort by:</label>
                <select value={option.Key} class="form-control" onChange={this.handlesortData}>
                    {sortSearchItems &&
                        sortSearchItems.map((val, index) => (
                            <option value={val.Key} key={index} >
                                {val.Title}
                            </option>
                        ))}
                </select>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        sortSearchItems: searchAndFilterValueItemSelector(state, ownProps.name, searchFeatureConstants.SORT_OPTIONS)

    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateSearchSort(data) { dispatch(updateSearchSort(ownProps.name, data)) },
})
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(SearchSortDropDown))