import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { SET_LOCALIZATION_LANGUAGE, setLocalizationLanguage, SET_LOCALIZATION, setLocalization } from '@ec-oem/ec.oem.oa3.mux.core/actions';
import allLangStrings from '../data/localisation.json';
import languages from '../data/languages.json';
import { setAvailableLanguages } from '../actions';
import { SET_LANGUAGE_AND_LOCALIZATION } from '../actions/languages';







export function* languagesSaga() {

    while (1) {

        yield take(SET_LANGUAGE_AND_LOCALIZATION);
        yield put(setLocalizationLanguage(languages.default));
        yield put(setAvailableLanguages(languages.languages));

    }
}


export function* localizationLanguageSaga() {

    while (1) {

        const { localizationLanguage } = yield take(SET_LOCALIZATION_LANGUAGE);
       
        yield put(setLocalizationLanguage(localizationLanguage));

        yield put(setLocalization(allLangStrings[localizationLanguage]));

    }
}


