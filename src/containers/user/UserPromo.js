import React from "react";

import "../../styles/UserPromo.scss"

import UserMenu from "./UserMenu";
import BonusCard from "./BonusCard";
import { bonuses, flexibleSpins, freeBet } from "../../mockData/bonusTypesMockData"
import PropTypes from "prop-types";

const UserPromo = (props, context) => {

  return (
    <div className="userPromo">
      <UserMenu {...props}/>

      <div className="promoTitle">
        <h3>{context.t("GIFTS")}</h3>
      </div>

      <div className="giftOuter">
        <div className="gifts">
          <BonusCard data={bonuses} {...props}/>
        </div>
        <div className="giftFooter">
          {context.t("After using one gift, the rest of the group will not be available")}
        </div>
      </div>

      <div className="giftOuter">
        <div className="gifts">
          <BonusCard data={flexibleSpins} {...props}/>
        </div>
        <div className="giftFooter">
          {context.t("After using one gift, the rest of the group will not be available")}
        </div>
      </div>

      <div className="giftOuter">
        <div className="gifts">
          <BonusCard data={freeBet} {...props}/>
        </div>
        <div className="giftFooter">
          {context.t("After using one gift, the rest of the group will not be available")}
        </div>
      </div>
     
    </div>
  )
}

UserPromo.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default UserPromo;