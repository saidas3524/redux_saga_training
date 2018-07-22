import { createReducer } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { fromJS} from 'immutable';
import { SET_AUTHORIZED_ROUTE_STATUS, SET_AUTHORIZED_ROUTES } from '../../actions';
export const authorizedRouteStatus = createReducer(null, {
    [SET_AUTHORIZED_ROUTE_STATUS](state,{status}) {
        return fromJS(status);
    }
});
export const authorizedRoutes = createReducer(null, {
    [SET_AUTHORIZED_ROUTES](state,{routes}) {
        return fromJS(routes);
    }
});