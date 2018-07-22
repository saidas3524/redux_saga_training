import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import './scss/microsoft-oem-doc-styles.scss';

import { ReactAI } from "./AppInsights";
// ReactAI.init({ instrumentationKey: '718f69c0-4d9d-476b-9184-c53e94bc1498' }); this for dev 
ReactAI.init({ instrumentationKey: 'ce22d47d-061e-419b-a3b1-5b64a96f753d' });



import { getStore } from './getStore';


import { RootAppComponent as App } from './Root';


const store = getStore();
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render((
    <Provider store={store}>
            <App />
    </Provider>
), document.getElementById('root'));


