import React from "react";
import "../styles/Main.scss";

import SubMenu from "../components/SubMenu";
import GamesCards from "../components/gamesCards";
import { gamesMockData } from "../mockData/gamesMockData";

const Games = (props) => {
  
  return (
    <>
      <SubMenu {...props}/>
      
      <div className="smallGamesCards">
        <GamesCards data={gamesMockData} type='games' {...props}/>
      </div>
    </>
  )
}

export default Games;