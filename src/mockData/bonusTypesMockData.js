import bonus from "../assets/bonus.jpg"
import flexibleSpinsImg from "../assets/flexibleSpins.jpg"
import lightFreebet from "../assets/lightFreebet.jpg"
import standardFreebet from "../assets/standardFreebet.jpg"
import highrollerFreebet from "../assets/highrollerFreebet.jpg"

export const bonuses = [
  {
    id: "1",
    title: "1-st deposit 100% Bonus",
    remaining: "24 hours",
    imageSrc: bonus,
    moreInfo: `\n
    1.Choose the gift\n
    2. Make a deposit over €10.00\n

    Max. bonus: €300.00\n
    
    Per cent: 100%\n
    
    Wager: 20\n
    
    The bonus can be wagered: in casino, in sportsbook\n
    
    Wager is accruing: on deposit + bonus\n
    
    Min. deposit: €10.00`
  },
  {
    id: "2",
    title: "3-rd deposit 100% Bonus",
    remaining: "12 hours",
    imageSrc: bonus,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a deposit over €10.00\n
    3. Activate gift '1-st deposit 100% Bonus'\n
    Max. bonus: €700.00\n

    Per cent: 100%\n

    Wager: 20\n

    The bonus can be wagered: in casino, in sportsbook\n

    Wager is accruing: on deposit + bonus\n

    Min. deposit: €10.00`
    
  }
];

export const flexibleSpins = [
  {
    id: "1",
    title: "2-nd deposit Flexible spins 50 EUR",
    remaining: "8 hours",
    imageSrc: flexibleSpinsImg,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a deposit over €99.00\n
    Game: Sakura Fortune\n

    Free spins quantity: 1\n

    Wager: 30\n

    Bet per spin: €50.00\n

    Wager is accruing: only on bonus`
  },
  {
    id: "2",
    title: "2-nd deposit Flexible spins 24 EUR",
    remaining: "12 hours",
    imageSrc: flexibleSpinsImg,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a deposit over €49.00\n
    Game: Sakura Fortune\n

    Free spins quantity: 1\n

    Wager: 30\n

    Bet per spin: €24.00\n

    Wager is accruing: only on bonus`
    
  },
  {
    id: "3",
    title: "2-nd deposit Flexible spins 10 EUR",
    remaining: "24 hours",
    imageSrc: flexibleSpinsImg,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a deposit over €19.00\n
    Game: Sakura Fortune\n

    Free spins quantity: 1\n

    Wager: 30\n

    Bet per spin: €10.00\n

    Wager is accruing: only on bonus`
    
  }
];

export const freeBet = [
  {
    id: "1",
    title: "Light Freebet",
    remaining: "8 hours",
    imageSrc: lightFreebet,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a Single type bet in Sports Betting\n
    Bet conditions:\n
     - Minimum bet amount of €15.00\n
     - Minimum bet coefficient 1.75\n
     - The bet has to be calculated to receive a prize\n
     - Free bet amount: €15.00\n

    Free bet type: The free bet amount is subtracted from the winnings\n

    Validity after activation in hours: 5\n

    Section: Sport\n

    Maximum odd: 5.0\n

    Minimum odd: 1.1\n

    Wagering requirement: 30\n

    Wagering requirement is accruing: only on bonus`
  },
  {
    id: "2",
    title: "Standard Freebet",
    remaining: "12 hours",
    imageSrc: standardFreebet,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a Single type bet in Sports Betting\n
    Bet conditions:\n
     - Minimum bet amount of €30.00\n
     - Minimum bet coefficient 1.75\n
     - The bet has to be calculated to receive a prize\n
    Free bet amount: €30.00\n
    
    Free bet type: The free bet amount is subtracted from the winnings\n
    
    Validity after activation in hours: 5\n
    
    Section: Sport\n
    
    Maximum odd: 5.0\n
    
    Minimum odd: 1.1\n
    
    Wagering requirement: 30\n
    
    Wagering requirement is accruing: only on bonus`
    
  },
  {
    id: "3",
    title: "Highroller Freebet",
    remaining: "24 hours",
    imageSrc: highrollerFreebet,
    moreInfo: `\n
    1. Choose the gift\n
    2. Make a Single type bet in Sports Betting\n
    Bet conditions:\n
    Minimum bet amount of €50.00\n
    Minimum bet coefficient 1.75\n
    The bet has to be calculated to receive a prize\n
    Free bet amount: €50.00\n

    Free bet type: The free bet amount is subtracted from the winnings\n

    Validity after activation in hours: 5\n

    Section: Sport\n

    Maximum odd: 5.0\n

    Minimum odd: 1.1\n

    Wagering requirement: 30\n

    Wagering requirement is accruing: only on bonus`
    
  }
];