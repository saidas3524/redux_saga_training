import { take, put, select } from 'redux-saga/effects';
import { UPDATE_SEARCH_FILTER, addSearchFilter, removeSearchFilter, setSearchFilters, getFilteredSearchResults, GET_FILTERED_SEARCH_RESULTS, setFilteredSearchResults, REMOVE_ALL_SEARCH_FILTERS } from '../../actions';
import { searchAndFilterValueItemSelector } from '../../selectors';
import { searchFeatureConstants } from '../../constants/searchFeatureConstants';

export function* updateSearchFilterSaga() {
    while (true) {

        const { name, filter } = yield take(UPDATE_SEARCH_FILTER);
        const { Key, Value, isSelected } = filter;

        let searchFilters = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.FILTERS));
        searchFilters = searchFilters ? searchFilters.toJS() : searchFilters;

        searchFilters.filter((x) => x.Key == Key)[0].Values.map((value) => {
            if (value.Key == Value) {
                value.isSelected = isSelected;
            }
        })

        if (filter.isSelected)
            yield put(addSearchFilter(name, filter))
        else
            yield put(removeSearchFilter(name, filter));

        yield put(setSearchFilters(name, searchFilters));
        yield put(getFilteredSearchResults(name));
    }
}

export function* filtereSearchResultsSaga() {

    while (true) {
        const { name } = yield take(GET_FILTERED_SEARCH_RESULTS);
        yield* manipulateSearchResultsOnSortOrFilter(name);
    }
}

export function* manipulateSearchResultsOnSortOrFilter(name) {
    let searchResults = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.RESULTS));
    searchResults = searchResults ? searchResults.toJS() : searchResults;
    let sortOption = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.SELECTED_SORT_OPTION));
    if (sortOption) {
        sortOption = sortOption ? sortOption.toJS() : sortOption;
        let sortMapper = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.SORTMAPPER));
        sortMapper = sortMapper ? sortMapper.toJS() : sortMapper;
        searchResults = sortMapper[sortOption.Key](searchResults);
    }
    let filters = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.SELECTED_FILTERS));
    filters = filters ? filters.toJS() : filters;
    let filterMapper = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.FILTERMAPPER));
    filterMapper = filterMapper ? filterMapper.toJS() : filterMapper;
    var filteredResult = searchResults;
    for (const filter in filters) {
        if (filters.hasOwnProperty(filter) && filters[filter] && filters[filter].length > 0) {
            var items = [];
            filters[filter].map((a) => items.push(a.Value));
            filteredResult = filterMapper[filter](filteredResult, items);
        }
    }
    yield put(setFilteredSearchResults(name, filteredResult));
}

export function* RemoveAllFiltersSaga() {

    while (true) {
        const { name } = yield take(REMOVE_ALL_SEARCH_FILTERS);

        let searchFilters = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.FILTERS));
        searchFilters = searchFilters ? searchFilters.toJS() : searchFilters;

        searchFilters.map((x) => {
            x.Values.map((val) => {
                val.isSelected = false;
                return;
            });
            return;
        })
        yield put(setSearchFilters(name, searchFilters));
        yield put(getFilteredSearchResults(name));
    }
}

