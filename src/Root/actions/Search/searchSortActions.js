import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';

export const GET_SEARCH_SORT_OPTIONS="CORE/GET_SEARCH_SORT_OPTIONS";
export const getSearchSortOptions= makeActionCreator(GET_SEARCH_SORT_OPTIONS,true,"name");
export const SET_SEARCH_SORT_OPTIONS="CORE/SET_SEARCH_SORT_OPTIONS";
export const setSearchSortOptions= makeActionCreator(SET_SEARCH_SORT_OPTIONS,true,"name","sortOptions");

export const UPDATE_SEARCH_SORT_OPTIONS="CORE/UPDATE_SEARCH_SORT_OPTIONS";
export const updateSearchSortOptions= makeActionCreator(UPDATE_SEARCH_SORT_OPTIONS,true,"name","sortOptions");

export const UPDATE_SEARCH_SORT="CORE/UPDATE_SEARCH_SORT";
export const updateSearchSort= makeActionCreator(UPDATE_SEARCH_SORT,true,"name","sortOption");


export const UPDATE_SEARCH_SORT_OPTION="CORE/UPDATE_SEARCH_SORT_OPTION";
export const updateSortOption= makeActionCreator(UPDATE_SEARCH_SORT_OPTION,true,"name","sortOption");

export const GET_SORTED_SEARCH_RESULTS="CORE/GET_SORTED_SEARCH_RESULTS";
export const getSortedSearchResults= makeActionCreator(GET_SORTED_SEARCH_RESULTS,true,"name");