import * as constants from "./loginConstants";

const initialStateLoginForm = {
  isLoginShown: false,
  email: "",
  password: "",
};

export const changeLoginForm = (state = initialStateLoginForm, action = {}) => {
  switch (action.type) {

    // SET_SHOW_LOGIN

    case constants.CHANHGE_LOGIN_FORM:
      return { ...state, [action.payload.field]: action.payload.value };

    case constants.CLEAR_LOGIN_FORM:
      return { ...state, email: "", password: "" };

    case constants.SET_SHOW_LOGIN: 
      return { ...state,  isLoginShown: action.payload };

    default:
      return state;
  }
};

const userInitialState = {
  userLoggedIn: false,
  isLoading: false,
  token: '',
  refreshToken: '',
  user_data: {}
};
export const loggedInUser = (state = userInitialState, action = {}) => {
  switch (action.type) {
    case constants.SET_LOGGED_IN_USER:
      return {
        ...state,
        userLoggedIn: true,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        user_data: action.payload.data
      };

    case constants.UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case constants.UPDATE_LOGGED_IN:
      return userInitialState;

      case constants.REQUEST_USER_PENDING:
        return { ...state, isLoading: true };

      case constants.REQUEST_USER_SUCCESS:
        return { ...state, user_data: action.payload, isLoading: false };

      case constants.REQUEST_USER_FAILED:
        return { ...state, isLoading: false };

    default:
      return state;
  }
};

