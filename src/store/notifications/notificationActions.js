import * as constants from "./notificationConstants";

export const setNotificationMessage = (string) => ({
  type: constants.SET_NOTIFICATION_MESSAGE,
  payload: string,
});

export const setShowNotificationMessage = (boolean) => ({
    type: constants.SET_SHOW_NOTIFICATION_MESSAGE,
    payload: boolean,
  });
