import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const SET_AVAILABLE_LANGUAGES = "PLATFORM/SET_AVAILABLE_LANGUAGES";
export const setAvailableLanguages = makeActionCreator(SET_AVAILABLE_LANGUAGES,true,"localLanguages");


export const SET_LANGUAGE_AND_LOCALIZATION = "PLATFORM/SET_LANGUAGE_AND_LOCALIZATION";
export const setLanguagesAndLocalization = makeActionCreator(SET_LANGUAGE_AND_LOCALIZATION,true);