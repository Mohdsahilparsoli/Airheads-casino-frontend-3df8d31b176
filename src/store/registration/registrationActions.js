import * as constants from "./registrationConstants";

export const setRegistrationForm = (object) => ({
  type: constants.CHANHGE_REGISTRATION_FORM,
  payload: object,
});

export const setClearRegistrationForm = () => ({
  type: constants.CLEAR_REGISTRATION_FORM,
});
