import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

// import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable'
import createSagaMiddleware from 'redux-saga';

import { getQuery } from '@ec-oem/ec.oem.oa3.mux.core';
import { initSagas } from './initSagas';
import { reducer } from './combineReducers';
import { defaultState } from './defaultState';
import { insightsMonitor } from "./AppInsights";
import { app_initialize } from './Root';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PricingMiddlewares } from "./Pricing";




export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const params = {
        globals: {
            env: 'dev'
        },
        exclude: ['trackAction']
    };


    const middleWares = [insightsMonitor(params), app_initialize,...PricingMiddlewares, sagaMiddleware];
    //if (getQuery['logger']) { middleWares.push(logger)}
    const composables = [applyMiddleware(...middleWares)
    ];

    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
        var enhancer = compose(
            ...composables
        );
    }
    else {
        var enhancer = composeWithDevTools(...composables);

    }
    const store = createStore(
        reducer,
        defaultState,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};