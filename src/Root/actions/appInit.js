import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const APP_INIT = "ROOT/APP_INIT";
export const initializeApp = makeActionCreator(APP_INIT,true);