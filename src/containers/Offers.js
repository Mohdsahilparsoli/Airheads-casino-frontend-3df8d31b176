import React, { useState, useEffect } from "react";
import "../styles/Offers.scss";

import OffersCards from "../components/offers/offersCards";
import { offersCardsMockData } from "../mockData/offersCardsMockData";

const Offers = () => {

  const [firstRowData, setFirstRowData] = useState([]);
  const [secondRowData, setSecondRowData] = useState([]);

  const handleData = () => {
    let offersCount = offersCardsMockData.length;
    let middle = Math.ceil(offersCount / 2);

    setFirstRowData(offersCardsMockData.slice(0, middle));
    setSecondRowData(offersCardsMockData.slice(middle, offersCount));
  }

  useEffect(() => {
    handleData();
  }, [])
  
  return (

    <div className="offers">
      
      <div className="offer">
        {firstRowData.map((offer, i) => {
          return (
            <OffersCards key={offer.id} offerData={offer} />
          )
        })}
      </div>

      <div className="offer">
        {secondRowData.map((offer, i) => {
          return ( 
            <OffersCards key={offer.id} offerData={offer} />
          )
        })}
      </div>

    </div>
  )
}

export default Offers;