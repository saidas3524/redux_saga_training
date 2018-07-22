import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS} from 'immutable';
import { SET_CURRENT_PAGE,SET_PAGE_SIZE,PAGINATION_INIT, SET_COMPLETE_PAGINATION_INFO, SET_PAGINATION_INDEXES } from '../../actions';
export const pager = createReducer(null, {
    [PAGINATION_INIT](state,{pager}) {
        return fromJS(pager);
    },
    [SET_PAGE_SIZE](state,{pageSize}){
        if(!state)
            return fromJS(state);
        state = state.set("pageSize", pageSize);
        state = state.set("currentPage", 1);

        return fromJS(state);

    },
    [SET_CURRENT_PAGE](state,{page}){
        if(!state)
            return fromJS(state);
        state = state.set("currentPage", page);
        return fromJS(state);

    }

});

export const paginationInfo = createReducer(null, {
    [SET_COMPLETE_PAGINATION_INFO](state,{paginationInfo}) {
        return fromJS(paginationInfo);
    }
});


export const paginationIndexes = createReducer(null, {
    [SET_PAGINATION_INDEXES](state,{paginationIndexes}) {
        return fromJS(paginationIndexes);
    }
});