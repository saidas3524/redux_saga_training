import { createSelector } from 'reselect';
export const userSelector = createSelector(
   state=>state.get("userInfo"),
   userInfo=>userInfo
)
