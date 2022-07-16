import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import "../styles/Sidebar.scss";
import PropTypes from "prop-types";

const Sidebar = (props, context) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    // Pass on our props
    <div className="sidebar">
      <Menu 
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
        {...props}
      >

        <Link className="menu-item" to="/" onClick={() => closeMenu()}>
          {context.t("Home")}
        </Link>

        <Link className="menu-item" to="/cashier" onClick={() => closeMenu()}>
          {context.t("Cashier")}
        </Link>

        <Link className="menu-item" to="/games" onClick={() => closeMenu()}>
          {context.t("Games")} 
        </Link>

        <Link className="menu-item" to="/offers" onClick={() => closeMenu()}>
          {context.t("Offers")}
        </Link>

        <Link className="menu-item" to="/helpSupport" onClick={() => closeMenu()}>
          {context.t("Help/Support")}
        </Link>
      </Menu>
    </div>
    
  );
};

Sidebar.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Sidebar