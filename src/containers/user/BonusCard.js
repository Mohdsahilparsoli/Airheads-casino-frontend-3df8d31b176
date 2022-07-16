import React from "react";

import "../../styles/BonusCard.scss";
import Button from '@material-ui/core/Button';
import BonusCardMore from "./BonusCardMore";
import PropTypes from "prop-types";

const BonusCard = (props, context) => {
  const {data} = props;

  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={item.id} className="gift">
            <div>{item.title}</div>
            <div className="giftView">
              <img src={item.imageSrc} alt='Bonus 100%' title='Bonus 100%' />
            </div>
            <div className="giftCounter">
              <div>{context.t("Remaining")}: </div>
              <span>{item.remaining}</span>
            </div>
            <div className="giftButtons">
              <BonusCardMore className="bonusCardMore" data={item} {...props}/>

              <Button className="bonusCardSelect" color="primary">{context.t("Select")}</Button>
            </div>
          </div>
        );
      })}
    </>
  )
}

BonusCard.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default BonusCard;