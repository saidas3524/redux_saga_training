import { take, put, select } from 'redux-saga/effects';
import { UPDATE_SEARCH_SORT, updateSortOption, setSearchSortOptions, getSortedSearchResults, GET_SORTED_SEARCH_RESULTS, updateSearchSortOptions, SET_SEARCH_SORT_OPTIONS, updateSearchSort } from '../../actions';
import { searchAndFilterValueItemSelector } from '../../selectors';
import { searchFeatureConstants } from '../../constants/searchFeatureConstants';
import { manipulateSearchResultsOnSortOrFilter } from './SearchFilterSaga';


export function* updateSearchSortSaga() {
  while (true) {

    const { name, sortOption } = yield take(UPDATE_SEARCH_SORT);
    const { Key } = sortOption;

    let searchSortOptions = yield select((state) => searchAndFilterValueItemSelector(state, name, searchFeatureConstants.SORT_OPTIONS));
    searchSortOptions = searchSortOptions ? searchSortOptions.toJS() : searchSortOptions;

    searchSortOptions.map((x) => x.IsSelected = false);
    searchSortOptions.filter((x) => x.Key == Key)[0].IsSelected = true;


    yield put(updateSortOption(name, sortOption));

    yield put(updateSearchSortOptions(name, searchSortOptions));
    yield put(getSortedSearchResults(name));
  }
}

export function* setSearchSortOptionsSaga() {
  while (true) {

    const { name, sortOptions } = yield take(SET_SEARCH_SORT_OPTIONS);
    yield put(updateSearchSortOptions(name, sortOptions));
    let defaultSortOptions = sortOptions.filter(x => x.IsDefault);
    if (defaultSortOptions) {
      yield put(updateSearchSort(name, defaultSortOptions[0]))
    } else {
      yield put(updateSearchSort(name, sortOptions[0]))
    }
  }
}


export function* sortSearchResultsSaga() {

  while (true) {
    const { name } = yield take(GET_SORTED_SEARCH_RESULTS);
    yield* manipulateSearchResultsOnSortOrFilter(name);


  }
}