import React from "react";
import "../styles/Main.scss";

import SubMenu from "../components/SubMenu";
import GamesCards from "../components/gamesCards";
import SmallOffersCards from "../components/offers/smallOffersCards";
import PropTypes from "prop-types";

import { smallGamesCardsMock } from "../mockData/smallGamesCardsMockData";
import { gamesMockData } from "../mockData/gamesMockData";
import { smallOffersCardsMockData } from "../mockData/smallOffersCardsMockData";

import { useSelector } from "react-redux";

const MainInitialPage = (props, context) => {
  const store = useSelector((state) => ({
    searchGame: state.searchGameData.searchGame
  }));

  const filteredGames = gamesMockData.filter((type) => {
    return type.gameName.toLowerCase().includes(store.searchGame) && store.searchGame !== '';
  });

  return (
    <>
      <SubMenu {...props}/>      

      <div className="searchGamesCards">
        {filteredGames.length === 0 && store.searchGame !== ''
          ? <div className="notFound">{context.t("Sorry, nothing is found")}</div> 
          : <GamesCards data={filteredGames} type='games' {...props}/>}
      </div>
      
      <div className="smallGamesCards">
        <GamesCards data={smallGamesCardsMock} type='games' {...props}/>
      </div>

      <div className="smallOffers">
        {smallOffersCardsMockData.map((offer, i) => {
          return (
            <SmallOffersCards key={offer.id} offerData={offer} />
          )
        })}
      </div>

      <div className="smallGamesCards">
        <GamesCards data={smallGamesCardsMock} type='games' {...props}/>
      </div>
    </>
  );
}

MainInitialPage.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default MainInitialPage;
