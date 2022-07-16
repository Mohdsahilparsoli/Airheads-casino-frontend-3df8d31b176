import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";

import Button from "@material-ui/core/Button";
import CasinoIcon from "@material-ui/icons/Casino";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DialogTranslation from "../selectLanguage/selectLanguage";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setShowProfile } from "../../store/profile/profileActions";
import { setShowLogin} from "../../store/login/loginActions";

const Header = (props, context) => {
  const store = useSelector((state) => ({
    userLoggedIn: state.loggedInUser.userLoggedIn
  }));

  const dispatch = useDispatch();

  const onLoginClick = () => {
    // console.log('login click')
    dispatch(setShowLogin(true))
  }

  const onMyProfileClick = () => {
    dispatch(setShowProfile(true))
  }
  
  return (
    <div className="header">

      <div className="leftButtons">

      <Link to="/" style={{color: "#f82b4d", textDecoration: "none"}}>
        <Button className="casino" variant="outlined">
          <CasinoIcon />
            <div className="btnText">{context.t("Casino")}</div>
        </Button>
        </Link>
      </div>

      <div className="logo">
        LOGO
      </div>

      <div className="rightButtons">

        { !store.userLoggedIn 
          ?
            <>
            {/* <Link to="/login" style={{color: "#f82b4d", textDecoration: "none"}}> */}
              <Button className="login" onClick={onLoginClick}>
                <ExitToAppIcon />
                <div className="btnText">{context.t("Login")}</div>
              </Button>
              {/* </Link> */}

              <Link to="/registration" style={{color: "#f82b4d", textDecoration: "none"}}>
                <Button className="registration" variant="outlined" color="secondary">
                  <HowToRegIcon />
                  <div className="btnText">{context.t("Registration")}</div>
                </Button>
              </Link>

                <DialogTranslation />
              </>
          : 
            <>
              <Button className="registration" onClick={onMyProfileClick} variant="outlined" color="secondary">
                <HowToRegIcon />
                <div className="btnText">{context.t("My Profile")}</div>
              </Button>
            </>
        }

        
      </div>    
      
    </div>
  )
}

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;