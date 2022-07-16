import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setNotificationMessage, setShowNotificationMessage } from "../../store/notifications/notificationActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export function LoginPageNotifications() {

  const store = useSelector(state => ({
    notificationMessage: state.showNotification.notificationMessage,
    showNotificationMessage: state.showNotification.showNotificationMessage
  }));
  const dispatch = useDispatch();



  const vertical = "top";
  const horizontal = "right";

  const handleClose = () => {
    dispatch(setNotificationMessage(''))
    dispatch(setShowNotificationMessage(false))
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={store.showNotificationMessage}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {store.notificationMessage}
      </Alert>
    </Snackbar>
  );
}
