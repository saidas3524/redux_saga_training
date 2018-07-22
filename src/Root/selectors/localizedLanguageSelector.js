import { createSelector } from 'reselect'
export const localizationLanguageSelector = createSelector(
   state=>state.app.get("localizationLanguage"),
   localizationLanguage=>localizationLanguage
)
export const localizationLanguagesSelector = createSelector(
    state=>state.app.get("localLanguages"),
    localLanguages=>localLanguages
 )