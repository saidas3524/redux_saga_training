import { fromJS } from 'immutable'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { RootReducers } from './Root';
import { CoreReducers } from '@ec-oem/ec.oem.oa3.mux.core'

const reducers = {...RootReducers,...CoreReducers};

export const combineAppReducers = (config) => {

    const defaultState = fromJS(Object.keys(config).reduce((a, key) => { a[key] = config[key](undefined, []); return a }, {}));
    return (state = defaultState, action) => {
        return Object.keys(config).reduce((state, key) => {
            const reducer = config[key];
            const previousState = state.get(key);
            const newValue = reducer(previousState, action);
            if (newValue === undefined) {
                throw new Error(`A reducer returned undefined when reducing key::"${key}"`);
            }
            return state.set(key, newValue);
        }, state);
    };
}


export const reducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    app: combineAppReducers(reducers),
    form: formReducer
});
