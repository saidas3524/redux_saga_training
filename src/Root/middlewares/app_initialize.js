import { APP_INIT,getUserInfo } from "../actions";


import { setLanguagesAndLocalization } from "../actions";


const app_initialize = ({dispatch}) => next => action =>{

    if(action.type !== APP_INIT){
       return  next(action);
    }
    dispatch(setLanguagesAndLocalization());
    dispatch(getUserInfo());

}

export default app_initialize;