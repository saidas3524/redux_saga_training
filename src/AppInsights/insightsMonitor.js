//var assign = require('lodash.assign');
//var foreach = require('lodash.foreach');

function monitor(params) {
    return function (store) {
        return function (next) {
            return function (action) {
                next(action);
                if (shouldTrackAction(action)) {
                    trackAction(action, params);
                }
            }
        }
    }
}

function shouldTrackAction(action) {
    if (action.trackAction != undefined && !action.trackAction) {
        return false;
    }
    return window.appInsights;
}

function trackAction(action, params) {
    window.appInsights.trackEvent(action.type, buildProps(action, params));
}

function buildProps(action, params) {
    var copy = {...action};//assign({}, action);

    // if (action.meta.appInsights.trackPayload === false) {
    //     return assign({}, { type: action.type }, params.globals);
    // }
    if (params !== undefined && params !== null) {
        params.exclude.forEach(e=>{delete copy[e];})
        // foreach(params.exclude, function (e) {
        //     delete copy[e];
        // });
    }

    return {...copy,...params.globals}//assign({}, copy, params.globals);
}

module.exports = {
    insightsMonitor: monitor
};