import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS } from 'immutable'

import { INITIALIZE_SEARCH, REMOVE_ALL_SEARCH_FILTERS, ADD_SEARCH_FILTER, REMOVE_SEARCH_FILTER, SET_FILTERED_SEARCH_RESULTS, SET_SEARCH_RESULTS, SET_SEARCH_FILTERS, DESTROY_SEARCH, UPDATE_SEARCH_SORT_OPTION, SET_SEARCH_SORT_OPTIONS, UPDATE_SEARCH_SORT_OPTIONS } from '../../actions';
import { searchFeatureConstants as searchReducerConstants } from '../../constants/searchFeatureConstants';



export const searchAndFilterData = createReducer(null, {
    [INITIALIZE_SEARCH](state, { data,reInitializeIfExists }) {
        const { name,filterMapper,sortMapper } = data;
        if (!state)
            return fromJS({ [name]: fromJS({name,"filterMapper":fromJS(filterMapper),"sortMapper":fromJS(sortMapper)}) })
        else {
            let existing = state.get(name);
            if(existing && !reInitializeIfExists)
               return fromJS(state);
            state = state.set(name, fromJS({name,"filterMapper":fromJS(filterMapper),"sortMapper":fromJS(sortMapper)}))
            return fromJS(state)
        }
    },
    [DESTROY_SEARCH](state,{name}){
        if (!state || !name)
            return fromJS(state);
        state = state.delete(name);
        return fromJS(state);
    },
    [SET_SEARCH_RESULTS](state, { name, results }) {
        if (!name) return state;
        var searchData = state.get(name);
        if (!searchData) return fromJS(state);
        searchData = searchData.set(searchReducerConstants.RESULTS, fromJS(results));
        searchData = searchData.set(searchReducerConstants.SELECTED_FILTERS,fromJS(null));
        searchData = searchData.set(searchReducerConstants.SELECTED_SORT_OPTION,fromJS(null));
        state = state.set(name, fromJS(searchData));
        
        return fromJS(state);
    },
    [SET_SEARCH_FILTERS](state, { name, filters }) {
        if (!name) return state;
        var searchData = state.get(name);
        if (!searchData) return fromJS(state);
        searchData = searchData.set(searchReducerConstants.FILTERS, fromJS(filters));
        state = state.set(name, fromJS(searchData));
        return fromJS(state);
    },
    [SET_FILTERED_SEARCH_RESULTS](state, { name, filteredResults }) {
        if (!name) return state;
        var searchData = state.get(name);
        if (!searchData) return fromJS(state);
        searchData = searchData.set(searchReducerConstants.FILTEREDRESULTS, fromJS(filteredResults));
        state = state.set(name, fromJS(searchData));
        return fromJS(state);
    },
    [ADD_SEARCH_FILTER](state, { name, filter }) {
        if (!name) return state;
        var searchFilters = state.getIn([name, searchReducerConstants.SELECTED_FILTERS]);
        if (!searchFilters) {
            state = state.setIn([name, searchReducerConstants.SELECTED_FILTERS], fromJS({ [filter.Key]: [filter] }));
            return fromJS(state);
        }
        var filterData = state.getIn([name, searchReducerConstants.SELECTED_FILTERS, filter.Key]);
        if (!filterData) {
            state = state.setIn([name, searchReducerConstants.SELECTED_FILTERS, filter.Key], fromJS([filter]));
            return state;
        }
        filterData = filterData.toJS();
        filterData.push(filter);
        state = state.setIn([name, searchReducerConstants.SELECTED_FILTERS, filter.Key], fromJS(filterData));
        return state;
    },
    [REMOVE_SEARCH_FILTER](state, { name, filter }) {
        if (!name) return state;
        var filterData = state.getIn([name, searchReducerConstants.SELECTED_FILTERS, filter.Key]);
        if (!filterData) return state;
        filterData = filterData.toJS();
        filterData = filterData.filter(function (a) { return a.Value != filter.Value })
        state = state.setIn([name, searchReducerConstants.SELECTED_FILTERS, filter.Key], fromJS(filterData));
        return fromJS(state);
    },
    [REMOVE_ALL_SEARCH_FILTERS](state, {name}) {
        if (!name) return state;
        state = state.setIn([name, searchReducerConstants.SELECTED_FILTERS], fromJS(null));
        return fromJS(state);
    },
    [UPDATE_SEARCH_SORT_OPTION](state,{name,sortOption}){
        if (!name) return state;
        state = state.setIn([name,searchReducerConstants.SELECTED_SORT_OPTION],fromJS(sortOption));
        return fromJS(state);

    },
    // [SET_SEARCH_SORT_OPTIONS](state,{name,sortOptions}){
    //     if (!name) return state;
    //     var searchData = state.get(name);
    //     if (!searchData) return fromJS(state);
    //     searchData = searchData.set(searchReducerConstants.SORT_OPTIONS, fromJS(sortOptions));
    //     state = state.set(name, fromJS(searchData));
    //     return fromJS(state);
    // },
    [UPDATE_SEARCH_SORT_OPTIONS](state,{name,sortOptions}){
        if (!name) return state;
        var searchData = state.get(name);
        if (!searchData) return fromJS(state);
        searchData = searchData.set(searchReducerConstants.SORT_OPTIONS, fromJS(sortOptions));
        state = state.set(name, fromJS(searchData));
        return fromJS(state);
    }

});




