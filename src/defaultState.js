import { fromJS } from 'immutable'


// TODO... finalize value list
export const defaultState = {
  

    form: null,
    app: fromJS({
        user: null,
        currentUser: null
    })
};