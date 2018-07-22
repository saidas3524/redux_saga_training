import { createSelector } from 'reselect'
export const navigationSelector = createSelector(    
    state => state.app.get(`navigationMenu`),
   navigationMenu=>navigationMenu
)