import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../../styles/Colors.scss";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PropTypes from "prop-types";

const useStyles = makeStyles({

  cardRoot: {
    maxWidth: "100%",
    marginBottom: "1rem",
    borderRadius: 0,

    "& .MuiCardContent-root": {
      padding: 0
    },

    "& .MuiCardActions-root": {
      padding: 0,

    "& a": {
        textDecoration: "none",
      }
    }
  },

  media: {
    height: 220
  },

  bonusType: {
    marginLeft: ".5rem",
    fontWeight: "600",
  },

  leftBtn: {
    width: "20%",
    margin: ".5rem",
    background: colors.greenBtnColor,
    fontWeight: "600",
    color: "#fff",
    

    "&:hover": {
      background: colors.greenBtnHover
    },
  },

});

export default function OffersCards({ offerData }, context) {
  const classes = useStyles();

  return (
    <>
      <Card key={offerData.id} className={classes.cardRoot}> 
        <CardContent>
          <CardMedia
            className={classes.media}
            image={offerData.offer}
          />

          <Typography className={classes.bonusType} component={'div'} fontWeight="fontWeightBold" variant="h6">
            {offerData.title}
          </Typography>
        </CardContent>
        
        <CardActions>

          <Link to='/offers'>
            <Button className={classes.leftBtn}>
              {context.t("MORE")}
            </Button>
          </Link>

        </CardActions>

      </Card>
    </>
  );
}

OffersCards.contextTypes = {
  t: PropTypes.func.isRequired,
};
