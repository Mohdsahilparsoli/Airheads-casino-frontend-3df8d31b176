import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import "../../styles/UserProfile.scss"
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { inputFieldsValidators } from "../../validators/customInputValidators";
import { formErrorValidators } from "../../validators/formValidators";
import UserMenu from "./UserMenu";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/login/loginActions";
import { checkRequest } from "../../store/authentication/tokenHandlerAction";

const useStyles = makeStyles((theme) => ({
  formRoot: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr));",

    "& .MuiTextField-root": {
      margin: "10px",
      width: "95%",
    },
  }
}));


const UserProfile = (props, context) => {
  const store = useSelector((state) => ({
    user_data:        state.loggedInUser.user_data
  }));

  const dispatch = useDispatch();
  const classes = useStyles();

  const [form, setValues] = useState({
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    nickName: "",
    dateOfBirth: "",
    country: "",
    city: "",
    address: "",
    phone: ""
  });
  const [formValidator, setFormValidator] = useState(false);
  const [error, setError] = useState({
    id: null,
    email: false,
    firstName: false,
    lastName: false,
    nickName: false,
    dateOfBirth: false,
    country: false,
    city: false,
    address: false,
    phone: false
  });
  const [errorMessage, setErrorMessage] = useState({
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    nickName: "",
    dateOfBirth: "",
    country: "",
    city: "",
    address: "",
    phone: ""
  });

  useEffect(() => {
    dispatch(checkRequest(getUserInfo()));

    setValues({
      ...form,
      id:           store.user_data.id,
      email:        store.user_data.email,
      firstName:    store.user_data.firstName,
      lastName:     store.user_data.lastName,
      nickName:     store.user_data.username,
      dateOfBirth:  store.user_data.dob,
      country:      store.user_data.country,
      city:         store.user_data.city,
      address:      store.user_data.address,
      phone:        store.user_data.phone_number
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    store.user_data.id,
    store.user_data.email,
    store.user_data.firstName,
    store.user_data.lastName,
    store.user_data.username,
    store.user_data.dob,
    store.user_data.country,
    store.user_data.city,
    store.user_data.address,
    store.user_data.phone_number
  ]);

  const handleSubmit = () => {
    // console.log('handleSubmit')
  }

  const handleChange = (event) => {
    const field = event.target.id;
    const validators = inputFieldsValidators(field, event.target.value);
    const { errorCode, errorText } = validators;
    setFormValidator(formErrorValidators({ ...error, [field]: errorCode }));
    setError({ ...error, [field]: errorCode });
    setErrorMessage({ ...errorMessage, [field]: errorText });
    setValues({ ...form, [field]: event.target.value });
  }
  
  return (
    <div className="userProfile">
      <UserMenu />

      <div className="formControl">
        <form
          className={classes.formRoot}
          noValidate
          autoComplete="off"
        >

          <div>
            <h2>{context.t("Information")}</h2>
            <TextField
              error={error.nickName}
              helperText={errorMessage.nickName}
              id="nickName"
              label={context.t("Nickname")}
              value={form.nickName}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />
            <TextField
              error={error.firstName}
              helperText={errorMessage.firstName}
              id="firstName"
              label={context.t("First Name")}
              value={form.firstName}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.lastName}
              helperText={errorMessage.lastName}
              id="lastName"
              label={context.t("Last Name")}
              value={form.lastName}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.dateOfBirth}
              helperText={errorMessage.dateOfBirth}
              id="dateOfBirth"
              label={context.t("Date of birth")}
              value={form.dateOfBirth}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.email}
              helperText={errorMessage.email}
              id="email"
              label={context.t("Email Address")}
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />
          </div>

          <div>
            <h2>{context.t("Location")}</h2>

            <TextField
              error={error.country}
              helperText={errorMessage.country}
              id="country"
              label={context.t("Country")}
              value={form.country}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.city}
              helperText={errorMessage.city}
              id="city"
              label={context.t("City")}
              value={form.city}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.address}
              helperText={errorMessage.address}
              id="address"
              label={context.t("Address")}
              value={form.address}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />

            <TextField
              error={error.phone}
              helperText={errorMessage.phone}
              id="phone"
              label={context.t("Phone Number")}
              value={form.phone}
              onChange={handleChange}
              variant="outlined"
              labelwidth={120}
            />
          </div>

          <div>
            <h2>{context.t("Change Password")}</h2>

            <TextField
              id="currentPassword"
              label={context.t("Current Password")}
              type="password"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              id="newPassword"
              label={context.t("New Password")}
              type="password"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              id="confirmNewPassword"
              label={context.t("Confirm New Password")}
              type="password"
              variant="outlined"
              onChange={handleChange}
            />

          </div>
        </form>

        <Link to="/" className="submitLink">
          <Button className="submitBtn" onClick={handleSubmit}>{context.t("Submit")}</Button>
        </Link>
        
      </div>
    </div>
  )
}

UserProfile.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default UserProfile;