import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const SET_PLATFORM_PROGRAMS = "SET_PLATFORM_PROGRAMS";
export const setPlatformPrograms = makeActionCreator(SET_PLATFORM_PROGRAMS,true,"platformPrograms");