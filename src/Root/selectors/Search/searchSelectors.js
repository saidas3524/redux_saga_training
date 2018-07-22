import { createSelector } from 'reselect'
export const searchAndFilterDataSelector =(state,name)=> createSelector(
   state=>state.app.get("searchAndFilterData"),
   searchAndFilterData=> searchAndFilterData? searchAndFilterData.get(name): null
)(state);

export const searchAndFilterValueItemSelector =(state,name,Item)=> createSelector(
    state=>state.app.getIn(["searchAndFilterData",name]),
    searchAndFilterData=> searchAndFilterData? searchAndFilterData.get(Item): null
 )(state);