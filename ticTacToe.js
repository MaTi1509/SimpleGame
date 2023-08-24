const item1Symbol = document.querySelector("#item1Symbol");
const item1Button = document.querySelector("#item1");
const item2Symbol = document.querySelector("#item2Symbol");
const item2Button = document.querySelector("#item2");
const item3Symbol = document.querySelector("#item3Symbol");
const item3Button = document.querySelector("#item3");
const item4Symbol = document.querySelector("#item4Symbol");
const item4Button = document.querySelector("#item4");
const item5Symbol = document.querySelector("#item5Symbol");
const item5Button = document.querySelector("#item5");
const item6Symbol = document.querySelector("#item6Symbol");
const item6Button = document.querySelector("#item6");
const item7Symbol = document.querySelector("#item7Symbol");
const item7Button = document.querySelector("#item7");
const item8Symbol = document.querySelector("#item8Symbol");
const item8Button = document.querySelector("#item8");
const item9Symbol = document.querySelector("#item9Symbol");
const item9Button = document.querySelector("#item9");
const resetButton = document.querySelector("#resetButton");
const resetColor = document.querySelector(".symbolItem");
const winText = document.querySelector("#winText");
const gameInfo = document.querySelector("#gameInfo");
const winInfo = document.querySelector("#winInfo");
const text = document.querySelector("#text");
const player2 = document.querySelector(".player2");
const player1 = document.querySelector(".player1");
const player1Counter = document.querySelector(".player1Counter");
const player2Counter = document.querySelector(".player2Counter");
let winPlayer;
let moveCounter = 0;
let counter1 = 0;
let isWin = false;
let Player1Points = 0;
let Player2Points = 0;

const symbols = ["X", "O"];
let currentIndex = Math.floor(Math.random() * symbols.length);
let currentSymbol = symbols[currentIndex];
console.log(currentSymbol);

function toggleSymbol() {
  currentIndex = 1 - currentIndex;
  currentSymbol = symbols[currentIndex];
  return currentSymbol;
}

function checkForWin() {
  const linesToCheck = [
    [item1Symbol, item2Symbol, item3Symbol],
    [item4Symbol, item5Symbol, item6Symbol],
    [item7Symbol, item8Symbol, item9Symbol],
    [item1Symbol, item4Symbol, item7Symbol],
    [item2Symbol, item5Symbol, item8Symbol],
    [item3Symbol, item6Symbol, item9Symbol],
    [item1Symbol, item5Symbol, item9Symbol],
    [item3Symbol, item5Symbol, item7Symbol]
  ];

  for (const line of linesToCheck) {
    if (
      line.every((symbol) => symbol.textContent === currentSymbol) &&
      (currentSymbol === "X" || currentSymbol === "O")
    ) {
      console.log("Wygrana");
      isWin = true;
      if (currentSymbol === "X") {
        console.log("wygrał gracz 2");
        winPlayer = "Gracz 2";
        Player2Points++;
        player2Counter.textContent = Player2Points;
      } else {
        console.log("wygrał gracz 1");
        winPlayer = "Gracz 1";
        Player1Points++;
        player1Counter.textContent = Player1Points;
      }
      return; 
    }
  }

  if (moveCounter >= 9) {
    gameInfo.style.display = "block";
  } else {
    console.log("Próbuj dalej pedale");
  }
}


function setSymbol(itemButton, itemSymbol) {
  itemButton.addEventListener("click", () => {
    itemSymbol.textContent = currentSymbol;
    itemSymbol.style.color = "black";
    counter1 = 1;
    moveCounter++;
    console.log("move counter = " + moveCounter);
    checkForWin();
    if (moveCounter >= 9) {
      gameInfo.style.display = "block";
    } else if (isWin === true) {
      winInfo.style.display = "block";
      text.textContent = `🥳 Wygrał ${winPlayer} 🥳`;
    }
    toggleSymbol();
  });
}

function resetSymbol() {
  const itemSymbols = [
    item1Symbol,
    item2Symbol,
    item3Symbol,
    item4Symbol,
    item5Symbol,
    item6Symbol,
    item7Symbol,
    item8Symbol,
    item9Symbol,
  ];
  const fillSymbols = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9"];

  for (let index = 0; index < itemSymbols.length; index++) {
    itemSymbols[index].textContent = fillSymbols[index];
    itemSymbols[index].style.color = "white";
  }
  toggleSymbol();
}

function closeGameInfo() {
  resetSymbol();
  moveCounter = 0;
  gameInfo.style.display = "none";
  isWin = false;
}

function closeWinInfo() {
  resetSymbol();
  moveCounter = 0;
  winInfo.style.display = "none";
  isWin = false;
}

setSymbol(item1Button, item1Symbol);
setSymbol(item2Button, item2Symbol);
setSymbol(item3Button, item3Symbol);
setSymbol(item4Button, item4Symbol);
setSymbol(item5Button, item5Symbol);
setSymbol(item6Button, item6Symbol);
setSymbol(item7Button, item7Symbol);
setSymbol(item8Button, item8Symbol);
setSymbol(item9Button, item9Symbol);
