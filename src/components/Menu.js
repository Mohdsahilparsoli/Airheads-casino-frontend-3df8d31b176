import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.scss";

import Button from '@material-ui/core/Button';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import CasinoIcon from '@material-ui/icons/Casino';
import PropTypes from "prop-types";

const Menu = (props, context) => {
  
  return (
    <div className="menu">
      <div className="menuInner">
        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<NewReleasesIcon />} >{context.t("Popular")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<NewReleasesIcon />} >{context.t("Favourites")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<NewReleasesIcon />} >{context.t("New Games")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Slots")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Jackpots")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Live Casino")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Tables")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Video Poker")}</Button>
        </Link>

        <Link to="/games" className="menuInnerLinkButton">
          <Button className="btn" startIcon={<CasinoIcon />}>{context.t("Others")}</Button>
        </Link>
      </div>
      
    </div>
  )
}

Menu.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Menu;