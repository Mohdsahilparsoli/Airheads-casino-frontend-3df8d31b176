import React from "react";
import { Link } from 'react-router-dom'

import colors from "../../styles/Colors.scss";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setCurrentProfilePage } from "../../store/profile/profileActions";

const useStyles = makeStyles((theme) => ({
  profileButtons: {
    minHeight: "3.5rem",
    background: colors.colorWhite,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",

    "& > *": {
      textDecoration: "none",

      "&:hover": {
        background: "transparent",
        color: "#f82b4d !important"
      },

      "& > *": {
        fontWeight: "600",
      }      
    }
  },  
}));

const UserMenu = (props, context) => {
  const store = useSelector((state) => ({
    currentPage: state.changeUserProfile.currentPage,
  }));

  const dispatch = useDispatch();
  const classes = useStyles();

  const onBtnClick = (current) => {
    dispatch(setCurrentProfilePage(current));
  }

  return (
    <div className={classes.profileButtons}>
        <Link to="/userProfile">
          <Button 
            style={{color: store.currentPage === 'Profile' ? colors.headerBtnColor : "#7f7f7f"}}
            onClick={() => onBtnClick('Profile')}
          >
            {context.t("Profile")}
          </Button>
        </Link>
       

        <Link to="/userPromo">
          <Button 
            style={{color: store.currentPage === 'Promo' ? colors.headerBtnColor : "#7f7f7f"}}
            onClick={() => onBtnClick('Promo')}
          >
            {context.t("Promo")}
          </Button>
        </Link>

        <Button 
          style={{color: store.currentPage === 'Cashier' ? colors.headerBtnColor : "#7f7f7f"}}
          onClick={() => onBtnClick('Cashier')}
        >
          {context.t("Cashier")}
        </Button>

        <Link to="/userHistory">
          <Button 
            style={{color: store.currentPage === 'History' ? colors.headerBtnColor : "#7f7f7f"}}
            onClick={() => onBtnClick('History')}
          >
            {context.t("History")}
          </Button>
        </Link>
      </div>
  )
}

UserMenu.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default UserMenu;