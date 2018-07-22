import { take, call, put, apply } from "redux-saga/effects";
import { fromJS } from 'immutable';
//import MSAL_Wrapper from "../api/msal_wrapper"
import { GET_PLATFORM_PROGRAMS, SET_ACCESS_TOKEN, setPlatformPrograms, updatePlatformProgram } from '../actions';
import { InvokeUrl, InvokeCachedUrl } from "@ec-oem/ec.oem.oa3.mux.core/utility";
import { AlertsTypes } from '@ec-oem/ec.oem.oa3.mux.core/Constants';
import { alertAddAction } from '@ec-oem/ec.oem.oa3.mux.core/actions';

export function* platformProgramsSaga() {
    try {

        const { accessToken } = yield take(GET_PLATFORM_PROGRAMS);

        const response = yield call(InvokeCachedUrl, `OAModernApi/GetMuxPlatformPrograms`, 'GET');

        if (response.status == 200) {
            const data = yield apply(response, response.json);

            if (data) {
                var platformPrograms = data
                    .map(function (d) {
                        return { text: d.ProgramName, value: d.ProgramCode, selected: false };
                    });
                platformPrograms[0].selected = true;
                yield put(setPlatformPrograms(platformPrograms));
                yield put(updatePlatformProgram(platformPrograms[0].value));
            }
            else {
                yield put(setPlatformPrograms([]));
                yield put(updatePlatformProgram(null));
            }


        } else if (response.status == 500) {
            const data = yield apply(response, response.json);
            yield put(alertAddAction({ type: AlertsTypes.ERROR, message: [data] }));
        } else {
            yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Failed to fetch platform program details."] }));
        }
    } catch (error) {
        //MSAL_Wrapper.loginRedirect(); throw error;
        console.log("platformProgramsSaga " + error);
        yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Internal Error Occurred, Failed to fetch platform program details."] }));
        
    }
}