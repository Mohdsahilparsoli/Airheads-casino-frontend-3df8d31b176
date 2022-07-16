import * as constants from "./profileConstants";

export const setShowProfile = (boolean) => ({
  type: constants.SET_SHOW_PROFILE,
  payload: boolean
});

export const setCurrentProfilePage = (string) => ({
  type: constants.CURRENT_PROFILE_PAGE,
  payload: string,
});