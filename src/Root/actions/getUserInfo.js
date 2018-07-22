import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const GET_USER_INFO = "PLATFORM/GET_USER_INFO";
export const getUserInfo = makeActionCreator(GET_USER_INFO,true,"");