import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { GET_USER_INFO, setUser } from './../actions';
import { InvokeUrl } from "@ec-oem/ec.oem.oa3.mux.core/utility";
import { AlertsTypes } from '@ec-oem/ec.oem.oa3.mux.core/Constants';
import { alertAddAction } from '@ec-oem/ec.oem.oa3.mux.core/actions';

const data = { "UserID": 2381996, "LastName": "Nettem", "FirstName": "Goutam Kumar", "UserName": "oemdevsnew@live.com", "CompanyName": "MICROSOFT (THAILAND) LTD KOMIN LINPHRACHAYA", "Email": "v-gonett@microsoft.com", "UserCustomerGroups": ["BNG", "CMT", "MDB", "MDR", "IEB", "MBL", "ODR", "ORL", "MIN", "ODM"], "HomeCompanyAccountGroupCode": "Z4IC", "Name": "Goutam Kumar Nettem" };
export function* userInfoSaga() {
    try {
         yield put(setUser(data));
        // yield put(alertAddAction({type:"information",message:"fetched user details"}));
        // const responseC = yield call(InvokeUrl, `OAModernApi/GetMuxUserInfo`, 'GET');

        // if (responseC.status == 200) {
        //     const data = yield apply(responseC, responseC.json);
        //     var user = fromJS(({ user: data }));
        //     yield put(setUser(user));

        // } else if (responseC.status == 500) {
        //     const data = yield apply(responseC, responseC.json);
        //     yield put(alertAddAction({ type: AlertsTypes.ERROR, message: [data] }));
        // } else {
        //     yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Failed to fetch user details."] }));
        // }


    } catch (error) {
        console.log("downloadDocumentSaga error:" + error);
        yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Internal Error Occurred, Failed to fetch user details."] }));

    }

}

