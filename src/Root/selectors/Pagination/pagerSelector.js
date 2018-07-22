import { createSelector } from 'reselect'
export const pagerSelector = createSelector(
   state=>state.app.get("pager"),
   pager=>pager
)

export const lastPageSelector = createSelector(
    state=>state.app.get("paginationInfo"),
    paginationInfo=>paginationInfo? paginationInfo.get("endPage"): paginationInfo
 )


 export const paginationIndexes = createSelector(
    state=>state.app.get("paginationIndexes"),
    paginationIndexes=>paginationIndexes
 )