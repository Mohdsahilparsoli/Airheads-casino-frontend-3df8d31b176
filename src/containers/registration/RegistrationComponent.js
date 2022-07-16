import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/Colors.scss";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import { LoginPageNotifications } from "../../components/notifications/notificationService";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRegistrationForm, setClearRegistrationForm } from "../../store/registration/registrationActions";
import { setShowNotificationMessage } from "../../store/notifications/notificationActions";

const useStyles = makeStyles((theme) => ({
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
      height: "31rem"
    },

    
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },

  subTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

}));

const RegistrationComponent = (props, context) => {
  const store = useSelector((state) => ({
    email:                     state.changeRegistrationForm.email,
    password:                 state.changeRegistrationForm.password,
    currency:                 state.changeRegistrationForm.currency,
    country:                 state.changeRegistrationForm.country,
    notificationMessage:      state.showNotification.notificationMessage,
    showNotificationMessage:  state.showNotification.showNotificationMessage
  }));

  const dispatch = useDispatch();
  const classes = useStyles();

  const [fieldValidator, setFieldValidator] = useState(true);
  const [formValidator, setFormValidator] = useState(true);
  
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    currency: ""
  });

  const handleRegClose = () => {
    props.history.push('/');
    dispatch(setClearRegistrationForm());
  };

  const handleChange = event => {
    if (event.target.id === 'email' || event.target.id === 'password') {
      const field = event.target.name;
      const validators = inputFieldsValidators(field, event.target.value);
      const { errorCode, errorText } = validators;
  
      setFieldValidator(formErrorValidators({ ...error, [field]: errorCode }));
  
      setError({ ...error, [field]: errorCode });
      setErrorMessage({ ...errorMessage, [field]: errorText });
    }
    
    dispatch(setRegistrationForm({field: event.target.name, value: event.target.value}))

    if (store.email.length > 0 && store.password.length > 0  // TODO - move in useEffect later
      &&  (
            (store.country.length > 0 && event.target.name === 'currency')
            || ( store.currency.length > 0 && event.target.name === 'country')
            || (store.currency.length > 0 && store.country.length > 0)
          )
      && !fieldValidator) {
      setFormValidator(false);
    }
    if (store.email.length === 0 || store.password.length === 0 
      || fieldValidator) {
      setFormValidator(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setShowNotificationMessage(false));

    props.history.push('/login'); //TODO - temp
  }
  
  return (
    <div>
      {store.showNotificationMessage ? (
        <LoginPageNotifications />
      ) : (
        ""
      )}
      <Dialog className={classes.dialogRoot} open={true} onClose={handleRegClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{context.t("Registration")}</DialogTitle>
        <DialogContent>
          <div className={classes.subTitle}>
            <span>
              {context.t("If you have an account, please")} <Link to="/login">{context.t("log in")}</Link>
            </span>
          </div>
          <form noValidate autoComplete="off">
            <FormControl className={classes.formControl}>
              <TextField
                margin="normal"
                id="email"
                label={context.t("Email Address")}
                name="email"
                type="email"
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
                value={store.password}
                onChange={handleChange}
                error={error.password}
                helperText={errorMessage.password}
                fullWidth
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>Currency</InputLabel>
              <Select
                name="currency"
                value={store.currency}
                onChange={handleChange}
                labelWidth={80}
              >
                <MenuItem value={"eur"}>EUR - Euro</MenuItem>
                <MenuItem value={"usd"}>USD - United States Dollar</MenuItem>
                <MenuItem value={"gbp"}>GBP - Pound</MenuItem>
                <MenuItem value={"clp"}>Chilean peso</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel>{context.t("Country")}</InputLabel>
              <Select
                name="country"
                value={store.country}
                onChange={handleChange}
                labelWidth={80}
              >
                <MenuItem value={"bg"}>Bulgaria</MenuItem>
                <MenuItem value={"uk"}>United Kingdom</MenuItem>
                <MenuItem value={"it"}>Italy</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegClose} color="primary">
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

RegistrationComponent.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default RegistrationComponent;