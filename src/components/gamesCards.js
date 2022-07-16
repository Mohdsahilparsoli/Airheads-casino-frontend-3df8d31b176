import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/Colors.scss";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { useDispatch } from "react-redux";
import { setCurrentGame } from "../store/games/gamesActions";
import PropTypes from "prop-types";

const useStyles = makeStyles({

  game: {
    position: "relative",
    height: "14rem",

    "&:hover": {

      "& $gameLabel": {
        opacity: ".95"   
      }
         
    }
  },

  gameImg: {
    width: "100%",
    height: "100%",
    maxHeight: "14rem",
  },

  gameJackpot: {
    position: "absolute",
    left: "0",
    right: "0",
    top:"0",
    
    display: "flex",
    justifyContent: "space-between",
  },

  jpInner: {
    textTransform: "uppercase",
    textAlign: "center",
    padding: "0 5px 2px",
    zIndex: "15",
    color: "#fff",
    background: colors.jpInnerBgColor,
  },

  jpLabel: {
    texTransform: "uppercase",
    textAlign: "center",
    padding: "0 5px 2px",
    zIndex: "15",
    color: "#fff",
  },

  gameLabel: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom:"0",
    maxWidth: "100%",
    height: "14.01rem",
    opacity: "0",
    transition: ".5s ease",
    background: colors.smallGamesHoverColor,
    textAlign: "center",
    zIndex: "20",
  },

  labelText: {
    textDecoration: "none",
    position: "relative",
    top: "3.5rem",
    color: "#fff !important",
    font: "1.375rem/1.625rem Open Sans, sans-serif",

    "&:hover": {
      textDecoration: "underline"
    }
  },

  labelIcon: {
    position: "relative",
    top: "3.5rem",

    "& .MuiSvgIcon-fontSizeLarge": {
      "fontSize": "7rem"
    }
  }
});

export default function GamesCards({ data, type }, context) {

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDemoClick = (gameName) => {
    dispatch(setCurrentGame(gameName))
  } 

  return (
    <>    
      {data.map((item, i) => {
        return (

          <div key={item.id} className={classes.game}> 
            <img className={classes.gameImg} src={item.game} alt={item.title} title={item.title} />

            <div className={classes.gameJackpot}>
              { item.gameJackpotInnerText && <span className={classes.jpInner}>{item.gameJackpotInnerText}</span> }
              { item.label && <span className={classes.jpLabel} 
                                style={{ 
                                  background: item.label === 'new' 
                                  ? colors.jpLabelNewColor 
                                  : item.label === 'hot' 
                                    ? colors.jpLabelHotColor
                                    : colors.jpLabelOffersColor 
                                }}
                              >
                                {item.label}
                              </span> } 
            </div>

            {type === 'games' && <div className={classes.gameLabel}>
              <div className={classes.labelIcon}>
              <Link style={{color: "#1e1b4d"}} to='/game'>
                <PlayCircleOutlineIcon 
                  onClick={() => handleDemoClick(item.gameName)} 
                  fontSize="large"
                />
                </Link>
              </div>

              <Link className={classes.labelText} to='/demoGame' onClick={() => handleDemoClick(item.gameName)} >
                {context.t("Demo")}
              </Link>

            </div>}
          </div>
        );
      })}
    </>
  );
}

GamesCards.contextTypes = {
  t: PropTypes.func.isRequired,
};

