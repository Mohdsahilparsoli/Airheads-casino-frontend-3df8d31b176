import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Footer.scss";
import Providers from "./Providers";
import Payments from "./Payments";

import facebook from "../../assets/media/facebook.png";
import instagram from "../../assets/media/instagram.png";
import twitter from "../../assets/media/twitter.png";
import youtube from "../../assets/media/youtube.png";
import PropTypes from "prop-types";

const Footer = (props, context) => {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item"><Link to="/" className="nav__link">{context.t("Affiliates")}</Link></li>
        <li className="nav__item"><Link to="/termsAndConditions
        " className="nav__link">{context.t("Terms and Conditions")}</Link></li>
        <li className="nav__item"><Link to="/contacts" className="nav__link">{context.t("Contacts")}</Link></li>
        <li className="nav__item"><Link to="/privacyPolicy" className="nav__link">{context.t("Privacy Policy")}</Link></li>
      </ul>

      <ul className="media">
        <li className="media__item">
          <img src={facebook} alt="facebook" />
          <Link to="/" className="media__link">Facebook</Link>
        </li>
        <li className="media__item">
          <img src={instagram} alt="instagram" />
          <Link to="/" className="media__link">Instagram</Link>
        </li>
        <li className="media__item">
          <img src={twitter} alt="twitter" />
          <Link to="/" className="media__link">Twitter</Link>
        </li>
        <li className="media__item">
          <img src={youtube} alt="youtube" />
          <Link to="/" className="media__link">Youtube</Link>
        </li>
      </ul>

      <div className="providers">
        <Providers />
      </div>

      <div className="payments">
        <Payments />
      </div>

      <p className="copyright">
        {'Copyright © '}
        <Link color="inherit" to="http://www.airheadventures.com/">
          Airhead Ventures 
        </Link>{'  '}
        {new Date().getFullYear()}
        {'.'}
        </p>
    </footer>
  );
}

Footer.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;
