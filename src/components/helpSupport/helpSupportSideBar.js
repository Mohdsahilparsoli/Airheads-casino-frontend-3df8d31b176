import React from "react";
import { Link } from "react-router-dom";

import "../../styles/HelpSupport.scss";
import colors from "../../styles/Colors.scss";

import PropTypes from "prop-types";

const HelpSupportSideBar = (props, context) => {
  const { current } = props;
  
  return (
    <>
      <div className="infoMenu">
        <Link className="menuItem" to="/termsAndConditions"
          style={{color: current === "termsAndConditions" 
          ? colors.supportMenuItemHoverColor 
          : ""}} 
        >
          {context.t("Terms and Conditions")}
        </Link>

        <Link className="menuItem" to="/privacyPolicy"
          style={{color: current === "privacyPolicy" 
          ? colors.supportMenuItemHoverColor 
          : ""}} 
        >
          {context.t("Privacy Policy")}
        </Link>

        <Link className="menuItem" to="/contacts"
          style={{color: current === "contacts" 
          ? colors.supportMenuItemHoverColor 
          : ""}} 
        >
          {context.t("Contacts")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Responsible Gaming")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Anti Fraud Tool")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Glossary")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Bonus Wagering")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Money-laundering protection requirement")}
        </Link>

        <Link className="menuItem" to="/helpSupport"
          style={{color: current === "faq" 
            ? colors.supportMenuItemHoverColor 
            : ""}} 
        >
          {context.t("FAQ")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Betting Rules")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Freebet Activation")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Cookie Policy")}
        </Link>

        <Link className="menuItem" to="/helpSupport">
          {context.t("Offers Terms and Conditions")}
        </Link>
      </div>
      
    </>
  )
}

HelpSupportSideBar.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default HelpSupportSideBar;