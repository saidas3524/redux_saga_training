import { createSelector } from 'reselect'
export const platformProgramsSelector = createSelector(    
    state => state.app.get(`platformPrograms`),
   platformPrograms=>platformPrograms
)