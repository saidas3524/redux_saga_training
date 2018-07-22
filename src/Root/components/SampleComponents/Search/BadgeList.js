import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import IconButton from '../Buttons/IconButton';
import { removeAllSearchFilters } from '../../../actions';


const propTypes = {
    selectedFilters: PropTypes.array.isRequired,
    removeFilter: PropTypes.func.isRequired,
};



class BadgeList extends PureComponent {
    render() {
        const { selectedFilters, removeFilter, removeAllFilters } = this.props;
        if (!selectedFilters) return null;
        let filtersArray = [];
        Object.keys(selectedFilters).map((key) => selectedFilters[key].map((value) => filtersArray.push(value)));

        return (
            <React.Fragment>
                {filtersArray.length ? <React.Fragment>
                    <div className="selected-filter-container d-none d-lg-block">
                        {filtersArray.map((value) => (
                            <button key={value.ValueDescription} className="d-inline-flex btn-badge align-items-end flex-row-reverse  ms-glyph ms-close" onClick={() => removeFilter(value.Key, value.Value)} type="button">
                                <span>{`${value.Title} - ${value.ValueDescription}`}</span>
                            </button>))
                        }
                        <IconButton iconClass={"ms-close search-filter-toggle-btn btn-sm align-baseline"} title={"Clear All"} onClick={() => removeAllFilters()} />
                    </div>
                </React.Fragment> : <div />}
            </React.Fragment>
        );
    }
}


BadgeList.propTypes = propTypes;
export default BadgeList;