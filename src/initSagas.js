import {RootSagas } from './Root';


const sagas = {...RootSagas};

export const initSagas = (sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};