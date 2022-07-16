import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/Colors.scss";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import PropTypes from "prop-types";

const useStyles = makeStyles({

  cardRoot: {
    maxWidth: "100%",
    marginBottom: "1rem",

    "& .MuiCardContent-root": {
      padding: 0
    },

    "& .MuiCardActions-root": {
      padding: 0
    },

    "& .MuiCardActions-spacing": {
      "& > *": {
        marginLeft: 0
      }
    }
  },

  media: {
    height: 220
  },

  bonusType: {
    padding: ".5rem",
    marginLeft: ".5rem",
    fontWeight: "600",
  },

  bonusOffer: {
    marginLeft: ".5rem"
  },

  subTitle: {
    marginLeft: "1rem",
    fontWeight: "600",
  },

  subText: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

  text: {
    marginLeft: ".5rem",
    fontWeight: "600",
  },

  date: {
    marginRight: ".5rem",
    fontWeight: "600",
    color: "#fa8418"
  },

  leftBtn: {
    width: "50%",
    background: colors.greenBtnColor,
    borderRadius: 0,
    fontWeight: "600",
    color: "#fff",

    "&:hover": {
      background: colors.greenBtnHover
    },
  },

  rightBtn: {
    width: "50%",
    background: colors.redBtnColor,
    borderRadius: 0,
    fontWeight: "600",
    color: "#fff",

    "&:hover": {
      background: colors.redBtnHover
    },
  }
});

export default function OffersCards({ offerData }, context) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleRightBtnClick = () => {
    setExpanded(!expanded);
  }

  return (
    <>
      <Card key={offerData.id} className={classes.cardRoot}> 
        <CardContent>
          <CardMedia
            className={classes.media}
            image={offerData.offer}
          />

          <Typography className={classes.bonusType} component={'div'} fontWeight="fontWeightBold" variant="h5">
            {offerData.title}
          </Typography>

          <Collapse direction="down" in={expanded} collapsedHeight={offerData.to ? 45 : 70} timeout="auto">
            { offerData.subTitle && <Typography className={classes.subTitle} component={'div'}>
              {offerData.subTitle.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </Typography> }
            <Typography className={classes.bonusOffer} component={'div'} color="textSecondary">
              {offerData.text.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </Typography>
          </Collapse>

          {offerData.from && offerData.to && 
            <div className={classes.subText}>
              <div className={classes.text}>{context.t("Offer takes place")}</div>
              <div className={classes.date}>{context.t("from")} {offerData.from} {context.t("till")} {offerData.to} </div>
            </div>}
        </CardContent>
        
        <CardActions>
           <Button className={classes.leftBtn}>
            REGISTER
          </Button>
         <Button className={classes.rightBtn} onClick={handleRightBtnClick}>
            {!expanded ? context.t("MORE") : context.t("COLLAPSE")}
            {!expanded ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

OffersCards.contextTypes = {
  t: PropTypes.func.isRequired,
};
