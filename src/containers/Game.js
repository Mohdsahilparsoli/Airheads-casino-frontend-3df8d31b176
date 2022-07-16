import React from "react";
import { useSelector } from "react-redux";
import "../styles/Games.scss";

import Menu from "../components/Menu";

import goldaurGuardiansBig from "../assets/goldaurGuardiansBig.png";
import artemisVsMedusa from "../assets/artemisVsMedusa.jpg";
import gonzosQuestMEGAWAYS from "../assets/gonzosQuestMEGAWAYS.jpg";
import cirquesDeLaFortune from "../assets/cirquesDeLaFortune.jpg";
import irishPotLuck from "../assets/irishPotLuck.jpg";
import footballGloryclass from "../assets/footballGloryclass.jpg";
import reelHeist from "../assets/reelHeist.jpg";
import treasureMine from "../assets/treasureMine.jpg";
import avalon2 from "../assets/avalon2.jpg";
import fortunium from "../assets/fortunium.jpg";
import pandaWarrior from "../assets/pandaWarrior.jpg";
import dragonsLuckPowerReels from "../assets/dragonsLuckPowerReels.jpg";
import wolfGold from "../assets/wolfGold.jpg";
import buffaloKing from "../assets/buffaloKing.jpg";
import dragonsFire from "../assets/dragonsFire.jpg";
import whiteKing2 from "../assets/whiteKing2.jpg";
import conan from "../assets/conan.jpg";
import spaceWars from "../assets/spaceWars.jpg";
import jokerReelz from "../assets/jokerReelz.jpg";
import super12 from "../assets/super12.jpg";

const Game = (props) => {
  const store = useSelector((state) => ({
    currentGame: state.changeGameData.currentGame
  }));

  const getGame = () => { // Only for review purposes
    switch (store.currentGame) {
      case 'goldaurGuardians': return goldaurGuardiansBig;
      case 'artemisVsMedusa': return artemisVsMedusa;
      case 'gonzosQuestMEGAWAYS': return gonzosQuestMEGAWAYS;
      case 'cirquesDeLaFortune': return cirquesDeLaFortune;
      case 'irishPotLuck': return irishPotLuck;
      case 'footballGloryclass': return footballGloryclass;
      case 'reelHeist': return reelHeist;
      case 'treasureMine': return treasureMine;
      case 'avalon2': return avalon2;
      case 'fortunium': return fortunium;
      case 'pandaWarrior': return pandaWarrior;
      case 'dragonsLuckPowerReels': return dragonsLuckPowerReels;
      case 'wolfGold': return wolfGold;
      case 'buffaloKing': return buffaloKing;
      case 'dragonsFire': return dragonsFire;
      case 'whiteKing2': return whiteKing2;
      case 'conan': return conan;
      case 'spaceWars': return spaceWars;
      case 'jokerReelz': return jokerReelz;
      case 'super12': return super12;

      default: 
        return '';
    }
  }
  
  return (
    <div className="gameContainerOuter">
      {/* <Menu /> */}

      <div className="gameContainer">
        <img src={getGame()} alt={store.currentGame} title={store.currentGame} />
      </div>
    </div>
  )
}

export default Game;