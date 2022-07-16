import React from "react";
import "../../styles/BonusCardMore.scss";
import colors from "../../styles/Colors.scss";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  moreSelectBtn: {
    background: colors.greenBtnColor,
      color: "#fff",
    
      "&:hover": {
        background: colors.greenBtnHover
      }
  }
}));

const BonusCardMore = (props, context) => {
  const {data} = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bonusCardMore">
      <Button className="moreBtn" onClick={handleClickOpen}>{context.t("More")}</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{data.title}</DialogTitle>
        <DialogContent>
          <DialogContentText component={'div'} id="alert-dialog-description">
            {data.moreInfo && data.moreInfo.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {context.t("Close")}
          </Button>
          <Button className={classes.moreSelectBtn} onClick={handleClose} color="primary">
            {context.t("Select")}
          </Button>
        </DialogActions>
      </Dialog>           
    </div>
  )
}

BonusCardMore.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusCardMore;