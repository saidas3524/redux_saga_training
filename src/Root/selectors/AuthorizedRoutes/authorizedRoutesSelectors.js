import { createSelector } from 'reselect'
export const authorizedRoutesSelector = createSelector(
   state=>state.app.get("authorizedRoutes"),
   authorizedRoutes=>authorizedRoutes
)

export const authorizedRouteStatusSelector = createSelector(
    state=>state.app.get("authorizedRouteStatus"),
    authorizedRouteStatus=>authorizedRouteStatus
 )