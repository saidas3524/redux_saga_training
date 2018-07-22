import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS} from 'immutable';
import {
    SET_AVAILABLE_LANGUAGES
} from '../actions'
export const localLanguages = createReducer(null, {
    [SET_AVAILABLE_LANGUAGES](state,{localLanguages}) {
        return fromJS(localLanguages);
    }
});