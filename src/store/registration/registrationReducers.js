import * as constants from "./registrationConstants";

const initialState = {
  email: "",
  password: "",
  currency: "",
  country: ""
};

export const changeRegistrationForm = (state = initialState, action = {}) => {
  switch (action.type) {

    case constants.CHANHGE_REGISTRATION_FORM:
      return { ...state, [action.payload.field]: action.payload.value };

    case constants.CLEAR_REGISTRATION_FORM:
      return { ...state, email: "", password: "", currency: "", country: "" };

    default:
      return state;
  }
};

