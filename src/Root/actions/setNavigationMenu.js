import { makeActionCreator } from '@ec-oem/ec.oem.oa3.mux.core/utility';
export const SET_NAVIGATION_MENU = "SET_NAVIGATION_MENU";
export const SET_NAVIGATION_MENU_STATUS = "Core/SET_NAVIGATION_MENU_STATUS";

export const NavigationMenuStatus = { PENDING: "PENDING", SUCCESS: "SUCCESS", FAILED: "FAILED" };
export const setNavigationMenuStatus = makeActionCreator(SET_NAVIGATION_MENU_STATUS, true, "status");
export const setNavigationMenu = makeActionCreator(SET_NAVIGATION_MENU, true, "navigationMenu");