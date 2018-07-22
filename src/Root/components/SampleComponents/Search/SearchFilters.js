import React, { PureComponent } from 'react';
import SearchAccordion from './SearchAccordion';


class SearchFilters extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        var { searchFilters, isOpen } = this.props;

        return (
            <aside className={("search-result-filter ") + (!isOpen ? "d-none" : "")}>

                {searchFilters &&
                    searchFilters.map((filter) => {
                        return (
                            <SearchAccordion key={filter.Key} updateSearchFilters={(data) => this.props.updateSearchFilters(data)} {...filter} />
                        )
                    })}
            </aside>);
    }
}

export default SearchFilters;