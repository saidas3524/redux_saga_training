import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS} from 'immutable';
import {
    SET_PLATFORM_PROGRAMS
} from '../actions'
import { platform } from 'os';
export const platformPrograms = createReducer(null, {
    [SET_PLATFORM_PROGRAMS](state,{platformPrograms}) {
        return fromJS(platformPrograms);
    }
});