import React, { PureComponent } from 'react';
import { ToJS } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import BadgeList from './BadgeList';
import { searchAndFilterValueItemSelector } from '../../../selectors';
import { updateSearchFilters, removeAllSearchFilters } from '../../../actions';
import { searchFeatureConstants } from '../../../constants/searchFeatureConstants';
class ControlledBadgeList extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <BadgeList {...this.props}/>
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        selectedFilters: searchAndFilterValueItemSelector(state,ownProps.name,searchFeatureConstants.SELECTED_FILTERS),
    }

}

const  mapDispatchToProps = (dispatch,ownProps) => {
    return {
        removeFilter: (key,value) => {
            dispatch(updateSearchFilters(ownProps.name,{Key:key,Value:value,isSelected:false}));
        },
        removeAllFilters(){
            dispatch(removeAllSearchFilters(ownProps.name));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(ControlledBadgeList))