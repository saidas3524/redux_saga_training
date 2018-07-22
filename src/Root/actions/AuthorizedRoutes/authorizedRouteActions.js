import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const SET_AUTHORIZED_ROUTE_STATUS = "Core/SET_AUTHORIZED_ROUTE_STATUS";
export const SET_AUTHORIZED_ROUTES = "Core/SET_AUTHORIZED_ROUTES";
export const AuthorizedRoutesStatus = { PENDING: "PENDING", SUCCESS: "SUCCESS", FAILED: "FAILED" };
export const setAuthorizedRouteStatus = makeActionCreator(SET_AUTHORIZED_ROUTE_STATUS, true, "status");
export const setAuthorizedRoutes = makeActionCreator(SET_AUTHORIZED_ROUTES, true, "routes");