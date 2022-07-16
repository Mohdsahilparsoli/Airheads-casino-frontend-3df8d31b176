import * as constants from "./gamesConstants";

export const setCurrentGame = (string) => ({
  type: constants.SET_CURRENT_GAME,
  payload: string
});

export const setSearchGame = (string) => ({
  type: constants.SET_SEARCH_GAME,
  payload: string
});