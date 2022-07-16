import * as constants from "./profileConstants";

const initialState = {
  isShown: false,
};

export const myProfileLoad = (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.SET_SHOW_PROFILE: 
      return { ...state,  isShown: action.payload };

    default:
      return state;
  }
};

const initialStateUserProfile = {
  currentPage: 'Profile'
};

export const changeUserProfile = (state = initialStateUserProfile, action = {}) => {
  switch (action.type) {
    case constants.CURRENT_PROFILE_PAGE:
      return { ...state, currentPage: action.payload};
    default:
      return state;
  }
};