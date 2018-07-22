import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';

export const INITIALIZE_SEARCH="CORE/INITIALIZE_SEARCH";
export const initializeSearch= makeActionCreator(INITIALIZE_SEARCH,true,"data","reInitializeIfExists");

export const GET_SEARCH_FILTERS="CORE/GET_SEARCH_FILTERS";
export const getSearchFilters= makeActionCreator(GET_SEARCH_FILTERS,true,"name");
export const SET_SEARCH_FILTERS="CORE/SET_SEARCH_FILTERS";
export const setSearchFilters= makeActionCreator(SET_SEARCH_FILTERS,true,"name","filters");

export const UPDATE_SEARCH_FILTER="CORE/UPDATE_SEARCH_FILTER";
export const updateSearchFilters= makeActionCreator(UPDATE_SEARCH_FILTER,true,"name","filter");


export const ADD_SEARCH_FILTER="CORE/ADD_SEARCH_FILTER";
export const addSearchFilter= makeActionCreator(ADD_SEARCH_FILTER,true,"name","filter");

export const REMOVE_SEARCH_FILTER="CORE/REMOVE_SEARCH_FILTER";
export const removeSearchFilter= makeActionCreator(REMOVE_SEARCH_FILTER,true,"name","filter");

export const REMOVE_ALL_SEARCH_FILTERS="CORE/REMOVE_ALL_SEARCH_FILTERS";
export const removeAllSearchFilters= makeActionCreator(REMOVE_ALL_SEARCH_FILTERS,true,"name");


export const GET_FILTERED_SEARCH_RESULTS="CORE/GET_FILTERED_SEARCH_RESULTS";
export const getFilteredSearchResults= makeActionCreator(GET_FILTERED_SEARCH_RESULTS,true,"name");

export const SET_FILTERED_SEARCH_RESULTS="CORE/SET_FILTERED_SEARCH_RESULTS";
export const setFilteredSearchResults= makeActionCreator(SET_FILTERED_SEARCH_RESULTS,true,"name","filteredResults");

export const GET_SEARCH_RESULTS="CORE/GET_SEARCH_RESULTS";
export const getSearchResults= makeActionCreator(GET_SEARCH_RESULTS,true,"name");

export const SET_SEARCH_RESULTS="CORE/SET_SEARCH_RESULTS";
export const setSearchResults= makeActionCreator(SET_SEARCH_RESULTS,true,"name","results");

export const DESTROY_SEARCH="CORE/DESTROY_SEARCH";
export const destroySearch= makeActionCreator(DESTROY_SEARCH,true,"name");

