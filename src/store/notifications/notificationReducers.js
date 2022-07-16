import * as constants from "./notificationConstants";

const initialState = {
    notificationMessage: '',
    showNotificationMessage: false
  };
  
  export const showNotification = (state = initialState, action = {}) => {
    switch (action.type) {
      case constants.SET_NOTIFICATION_MESSAGE:
        return { ...state, notificationMessage: action.payload };
      case constants.SET_SHOW_NOTIFICATION_MESSAGE:
        return {...state, showNotificationMessage: action.payload}
      default:
        return state;
    }
  };
  