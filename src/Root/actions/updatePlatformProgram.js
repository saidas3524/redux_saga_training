import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const UPDATE_PLATFORM_PROGRAM = "UPDATE_PLATFORM_PROGRAM";
export const updatePlatformProgram = makeActionCreator(UPDATE_PLATFORM_PROGRAM,true,"platformProgram");
