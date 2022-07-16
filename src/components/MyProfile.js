import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/Colors.scss";

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Slider from '@material-ui/core/Slider';
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setShowProfile } from "../store/profile/profileActions";
import { getUserInfo, logoutUser } from "../store/login/loginActions";
import { setCurrentProfilePage } from "../store/profile/profileActions";
import { checkRequest } from "../store/authentication/tokenHandlerAction";

const useStyles = makeStyles({
  dialog: {
    background: colors.headerColor,
    position: 'absolute',
    right: "-1.5rem",
    top: "-1.5rem",
    width: "20rem",
    height: "100%",
  },

  title: {
    "& h2": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white", 
      fontWeight: "bold"
    }
  },

  closeBtn: {
    color: colors.colorWhite,
     
    "&:hover": {
      background: colors.headerBtnHover
    }
  },  

  icon: {
    color: colors.colorWhite,   
    fontSize: "5rem"
  },

  info: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid white",
    color: colors.white
  },

  balance: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid white",
    color: colors.white
  },

  profile: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid white",
    color: colors.white
  },

  profileBtn: {
    color: colors.headerBtnColor,
    fontSize: "1.2rem",
    fontWeight: "600",
     
    "&:hover": {
      background: colors.headerBtnHover
    }
  },

  profileSlider: {
    padding: "1rem .5rem",
    borderBottom: "1px solid white",
  },

  slider: {
    color: colors.headerBtnColor,
    height: 8,
    marginTop: "2rem",
   
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    "& .MuiSlider-valueLabel": {
      left: -6
    },
    "& .MuiSlider-track": {
      height: 8,
      borderRadius: 4,
    },
    "& .MuiSlider-rail": {
      height: 8,
      borderRadius: 4,
    },
  },  

  logout: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom:".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600"
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MyProfile = (props, context) => {
  const store = useSelector((state) => ({
    isShownProfile:   state.myProfileLoad.isShown,
    name:             state.loggedInUser.user_data.firstName + " " + state.loggedInUser.user_data.lastName,
    user_data:        state.loggedInUser.user_data
  }));

  const  [sliderValue, setSliderValue] = useState(25)

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(checkRequest(getUserInfo()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    dispatch(setShowProfile(false))
  }

  const handleLogOut = () => {
    dispatch(logoutUser());
    dispatch(setShowProfile(false));

    // auth.logout(); 
  }

  const onProfileBtnClick = () => {
    dispatch(setShowProfile(false));
    dispatch(setCurrentProfilePage('Profile'));
  }

  return (
    <>
      <Dialog
        classes={{
          paper: classes.dialog
        }}
        TransitionComponent={Transition}

        open={store.isShownProfile}
        onClose={handleClose}
      >
        <DialogTitle className={classes.title} id="form-dialog-title">
          <div>{context.t("My Profile")}</div>

          <Button className={classes.closeBtn} onClick={handleClose}>
            <CloseIcon fontSize="large"/>
          </Button>
        </DialogTitle>

        <DialogContent>
          <div className={classes.info}>
            <AccountCircleIcon className={classes.icon} />
            <span style={{color: "#fff"}}>{store.name}</span>
          </div>

          <div className={classes.balance}>
            <span style={{color: colors.headerBtnColor}}>
              {store.user_data.balance}
            </span>
            <span style={{color: colors.headerBtnColor}}>
              {store.user_data.currency}
            </span>
          </div>

          <div className={classes.balance}>
            <span style={{color: colors.headerBtnColor}}>
              {store.user_data.promo_balance}
            </span>
            <span style={{color: colors.headerBtnColor}}>
              {context.t("Bonus balance")}
            </span>
          </div>

          <div className={classes.balance}>
            <span style={{color: colors.headerBtnColor}}>
              {context.t("Wagering requirement")}: ×3
            </span>
          </div>

          <div className={classes.profileSlider}>
            <span style={{color: 'white'}}>{context.t("Bonus Completion")}:</span>

            <Slider
              value={sliderValue}
              step={5}
              valueLabelDisplay="on"
              max={100}
              min={0}
              className={classes.slider}
            />
          </div>

          <div className={classes.profile}>
            <Link to="/userProfile" style={{textDecoration: "none"}}>
              <Button className={classes.profileBtn} onClick={onProfileBtnClick} fontSize="big">{context.t("Profile")}</Button>
            </Link>
          </div>

          <div className={classes.logout}>
            <Link to="/" style={{textDecoration: "none"}}>
              <Button className={classes.profileBtn} onClick={handleLogOut}>
                {context.t("Logout")}
              </Button>
            </Link>
          </div>
        </DialogContent>

      </Dialog>
    </>
  )
}

MyProfile.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default MyProfile;