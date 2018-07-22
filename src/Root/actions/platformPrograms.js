import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const GET_PLATFORM_PROGRAMS = "PLATFORM/GET_PLATFORM_PROGRAMS";
export const getPlatformPrograms = makeActionCreator(GET_PLATFORM_PROGRAMS,true,"");
