import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/Colors.scss";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl";

import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import { LoginPageNotifications } from "../../components/notifications/notificationService";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoginForm, setClearLoginForm, setLoggedInUser, setShowLogin} from "../../store/login/loginActions";
import { setShowNotificationMessage, setNotificationMessage } from "../../store/notifications/notificationActions";
import config from '../../config'

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },

  dialogRoot: {

    "& .MuiDialogTitle-root": {
      background: colors.headerColor
    },

    "& .MuiTypography-h6": {
      color: colors.colorWhite,
      fontWeight: 600
    },

    "& .MuiDialogContent-root .MuiDialogActions-root": {
      background: colors.lightGreyBgColor
    },

    "& .MuiButtonBase-root": {
      background: colors.headerColor,
      color: colors.colorWhite,

      "& .MuiButton-label": {
        fontWeight: 600
      },

      "&:disabled": {
        color: "black",
        background: colors.lightGreyBgColor,
      }
    },

    "& .MuiDialog-paperWidthSm": {
      width: "32rem"
    },

    "& .MuiDialog-paperScrollPaper": {
      height: "20rem"
    },

    
  }

}));

const LoginComponent = (props, context) => {
  const store = useSelector((state) => ({
    isLoginShown:                     state.changeLoginForm.isLoginShown,
    email:                     state.changeLoginForm.email,
    password:                 state.changeLoginForm.password,
    notificationMessage:      state.showNotification.notificationMessage,
    showNotificationMessage:  state.showNotification.showNotificationMessage
  }));

  const dispatch = useDispatch();
  const classes = useStyles();

  const [fieldValidator, setFieldValidator] = useState(true);
  const [formValidator, setFormValidator] = useState(true);
  
  const [error, setError] = useState({
    email: false,
    password: false
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (store.email.length > 0 && store.password.length > 0 && !fieldValidator) {
      setFormValidator(false);
    }

    if (
      store.email.length === 0 ||
      store.password.length === 0 ||
      fieldValidator
    ) {
      setFormValidator(true);
    }

  }, [fieldValidator, store.email.length, store.password.length]);

  const handleLoginClose = () => {
    // props.history.goBack();
    dispatch(setShowLogin(false));
    dispatch(setClearLoginForm());
  };

  const handleChange = event => {
    const field = event.target.id;
    const validators = inputFieldsValidators(field, event.target.value);
    const { errorCode, errorText } = validators;

    setFieldValidator(formErrorValidators({ ...error, [field]: errorCode }));

    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });

    dispatch(setLoginForm({field: event.target.id, value: event.target.value}))
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setShowLogin(false));
    dispatch(setShowNotificationMessage(false));

    let responseCode = 0;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: store.email,
        password: store.password
      })
    };

    fetch(`${config.API_URL}auth/signin`, requestOptions)
      .then((response) => {
        responseCode = response.status;
        return response.json();
      })
      .then(data => {
        if (responseCode !== 200) {
          data.errors.forEach(element => {
            throw new Error(element.message)
          });
        }

        // console.log(data)
        dispatch(setLoggedInUser({data, props}));
      })
      .catch(error => {
        dispatch(setShowNotificationMessage(true));
        dispatch(setNotificationMessage(error.message));
      })
  }
  
  return (
    <div>
      {store.showNotificationMessage ? (
        <LoginPageNotifications />
      ) : (
        ""
      )}
      <Dialog className={classes.dialogRoot} open={store.isLoginShown} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{context.t("Login")}</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <FormControl className={classes.formControl}>
              <TextField
                margin="normal"
                id="email"
                label={context.t("Email Address")}
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                value={store.email}
                onChange={handleChange}
                error={error.email}
                helperText={errorMessage.email}
                fullWidth
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                margin="normal"
                id="password"
                label={context.t("Password")}
                name="password"
                type="password"
                autoComplete="current-password"
                value={store.password}
                onChange={handleChange}
                error={error.password}
                helperText={errorMessage.password}
                fullWidth
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            {context.t("Cancel")}
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={formValidator}>
            {context.t("Enter")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

LoginComponent.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default LoginComponent;