import * as constants from "./gamesConstants";

const initialGamesState = {
  currentGame: ''
}

export const changeGameData = (state = initialGamesState, action = {}) => {
  switch (action.type) {
    case constants.SET_CURRENT_GAME:
      return { ...state, currentGame: action.payload };

    default:
      return state;
  }
};

const initialSearchState = {
  searchGame: ''
}

export const searchGameData = (state = initialSearchState, action = {}) => {
  switch (action.type) {

    case constants.SET_SEARCH_GAME:
      return { ...state, searchGame: action.payload };

    default:
      return state;
  }
};