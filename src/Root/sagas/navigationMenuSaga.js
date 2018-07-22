import { take, call, put, apply } from "redux-saga/effects";
//import fetch from "isomorphic-fetch";
import { fromJS } from 'immutable';
//import MSAL_Wrapper from "../api/msal_wrapper"
import { SET_ACCESS_TOKEN, UPDATE_PLATFORM_PROGRAM, setNavigationMenu, setCurrentUser, setAuthorizedRouteStatus, AuthorizedRoutesStatus, setAuthorizedRoutes } from '../actions';
import { InvokeUrl, InvokeCachedUrl } from '@ec-oem/ec.oem.oa3.mux.core/utility';
import { AlertsTypes } from '@ec-oem/ec.oem.oa3.mux.core/Constants';
import { alertAddAction } from '@ec-oem/ec.oem.oa3.mux.core/actions';


function getRootWebSitePath() {
    const { origin, pathname, hash } = document.location;
    var applicationName = origin + pathname + hash;
    applicationName = applicationName.slice(0, -1);

    return applicationName;
}
function getOASitePath() {
    const { origin, pathname } = document.location;
    var applicationName = origin + "/#";

    return applicationName;
}
function trucateModernOA(s) {
    const [test, value] = s.split("/ModernOA/#");
    return value;
}
export function* navigationMenuSaga() {
    while (true) {
        try {
            const { platformProgram } = yield take(UPDATE_PLATFORM_PROGRAM);
            const responseC = yield call(InvokeCachedUrl, `OAModernApi/GetMuxNavigation?platformProgram=${platformProgram}`, 'GET');

            if (responseC.status == 200) {
                const data = yield apply(responseC, responseC.json);


                const rootUrl = getRootWebSitePath();
                const OAUrl = getOASitePath();
                var nonarray = [];
                var authorizerdRoutes = [];
                var updatedMenu = data
                    .Items
                    .map(function (d) {
                        var dinner1 = d
                            .Items
                            .map(function (d1) {
                                var dinner2 = d1
                                    .Items
                                    .map(function (d2) {
                                        var dinner3 = d2
                                            .Items
                                            .map(function (d3) {
                                                //Hardcoding to support links in new platform
                                                if (!d3.IsNavigable) {
                                                    if (d3.Paltform == "OAPlatform" || d3.Paltform == "OSPPlatform") {
                                                        // if (d2.DisplayText == "Pricing Rule Management")
                                                        //     return { text: d3.DisplayText, key: d3.ItemKey, href: rootUrl + d3.NaviationUri, platform: d3.Paltform, route: d3.NaviationUri, isCurrentPlatform: true };

                                                        return { text: d3.DisplayText, key: d3.ItemKey, href: OAUrl + d3.NaviationUri, platform: d3.Paltform, route: d3.NaviationUri };

                                                    }
                                                    else {
                                                        if ((d2.DisplayText == "Pricing Rule Management" && d3.Paltform=="OAWebPlatform")|| (d2.DisplayText == "Approval Management" && d3.Paltform=="OAWebPlatform")){
                                                            authorizerdRoutes.push(trucateModernOA(d3.NaviationUri));
                                                            return { text: d3.DisplayText, key: d3.ItemKey, href: rootUrl + d3.NaviationUri, platform: d3.Paltform, route: trucateModernOA(d3.NaviationUri), isCurrentPlatform: true };

                                                        }

                                                        return { text: d3.DisplayText, key: d3.ItemKey, href: data.PlatformServerMap[d3.Paltform] + d3.NaviationUri, platform: d3.Paltform, route: d3.NaviationUri };
                                                    }
                                                }
                                                else {
                                                    return null;
                                                }
                                            });

                                        var dinner3Filtered = dinner3.filter((d) => {
                                            return (d != null);
                                        })

                                        return { buttonText: d2.DisplayText, id: d2.ItemKey, key: d2.ItemKey, href: d2.NaviationUri, items: dinner3Filtered };
                                    });

                                var dinner2Filtered = dinner2.filter((d) => {
                                    return d.items.length > 0
                                })
                                return { buttonText: d1.DisplayText, id: d1.ItemKey, key: d1.ItemKey, href: d1.NaviationUri, items: dinner2Filtered };
                            });

                        var dinner1Filtered = dinner1.filter((d) => {
                            return d.items.length > 0
                        })
                        return { buttonText: d.DisplayText, id: d.ItemKey, key: d.ItemKey, items: dinner1Filtered }
                    });
                updatedMenu[0].items.unshift({ buttonText: 'Home', href: '/', key: 'home' });
                yield put(setNavigationMenu(updatedMenu[0].items));
                // if(authorizerdRoutes.indexOf("/Pricing/CreatePricingRule/")!==-1 || authorizerdRoutes.indexOf("/Pricing/SearchPricingRule/")!==-1 ){
                //     authorizerdRoutes.push("/Pricing/ViewPricingRule/");
                //     if(authorizerdRoutes.indexOf("/Pricing/CreatePricingRule/")!==-1) 
                //         authorizerdRoutes.push("/Pricing/EditPricingRule/");

                // }
                yield put(setAuthorizedRoutes(authorizerdRoutes));

                yield put(setAuthorizedRouteStatus(AuthorizedRoutesStatus.SUCCESS));


            } else if (responseC.status == 500) {
                const data = yield apply(responseC, responseC.json);
                yield put(alertAddAction({ type: AlertsTypes.ERROR, message: [data] }));
            } else {
                yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Failed to fetch platform program details."] }));
            }


        } catch (error) {
            console.log("navigationMenuSaga " + error);
            yield put(alertAddAction({ type: AlertsTypes.ERROR, message: ["Internal Error Occurred, Failed to fetch platform program details."] }));

        }
    }
}