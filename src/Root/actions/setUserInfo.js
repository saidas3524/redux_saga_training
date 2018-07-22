import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';



export const SET_USER = "SET_USER";
export const setUser = makeActionCreator(SET_USER,true,"userInfo");