import React from "react";
import { Link } from "react-router-dom";
import "../../styles/LoginBar.scss";

import Button from "@material-ui/core/Button";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PropTypes from "prop-types";

const LoginBar = (props, context) => {

  const onLoginClick = () => {
    // console.log('login click')
  }
  
  return (
    <div className="loginBar">
      <Link to="/login" className="login">
        <Button style={{color: "#f82b4d", width: "100%"}} variant="outlined" onClick={onLoginClick}>
          <ExitToAppIcon />
          <div className="btnText">{context.t("Login")}</div>
        </Button>
      </Link>

      
      <Button className="registration" variant="outlined" color="secondary">
        <HowToRegIcon />
        <div className="btnText">{context.t("Registration")}</div>
      </Button>
    </div>
  )
}

LoginBar.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default LoginBar;