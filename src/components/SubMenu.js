import React from 'react';
import "../styles/SubMenu.scss";
import colors from "../styles/Colors.scss";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { setSearchGame } from "../store/games/gamesActions";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: "1rem",
    width: "30%",
    
    "& .MuiOutlinedInput-input": {
      padding: ".75rem"
    },

    "& .MuiIconButton-root": {
      padding: 0
    },

    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, 0) scale(.75)"
    },

    [theme.breakpoints.down('xs')]: {
      width: "100%",
      margin: "1rem",
      transition: "all .2s",
    }
  },

  button: {
    color: colors.colorWhite,
    background: colors.subMenuButton,
    marginRight: "1rem",
    padding: ".5rem 1rem",
    fontSize: "1rem",
    
    "&:hover": {
      background: colors.subMenuButtonHover,
    },
    
   [theme.breakpoints.down('xs')]: {
     display: "none"
    },
  },

  labelRoot: {
    fontSize: 15,
    top: "-7px"
  }
}));

const SubMenu = (props, context) => {
  const store = useSelector((state) => ({
    searchGame: state.changeGameData.searchGame
  }));

  const dispatch = useDispatch();
  const classes = useStyles();
  
  const handleChange = (e) => {
    dispatch(setSearchGame(e.target.value))
  };

  return (
    <div className="subMenu">
      <TextField
        className={classes.textField}
        id="search"
        label={context.t("Search games")}
        value={store.searchGame}
        onChange={handleChange}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          classes: {
            root: classes.labelRoot,
          }
        }}
      />

      <Button className={classes.button}>{context.t("Your cashier")}</Button>
    </div>
  );
}

SubMenu.contextTypes = {
  t: PropTypes.func.isRequired,
};


export default SubMenu;
