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
  if (
    item1Symbol.textContent === currentSymbol &&
    item2Symbol.textContent === currentSymbol &&
    item3Symbol.textContent === currentSymbol &&
    (currentSymbol === "X" || currentSymbol === "O")
  ) {
    console.log("Wygrana");
    isWin = true;
    if (currentSymbol === "X") {
      console.log("wygrał gracz 2");
      winPlayer = "Gracz 2";
      Player2Points ++;
      player2Counter.textContent = Player2Points;
    } else {
      console.log("wygrał gracz 1");
      winPlayer = "Gracz 1";
      Player1Points ++;
      player1Counter.textContent = Player1Points;
    }
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
  item1Symbol.textContent = "P1";
  item1Symbol.style.color = "white";
  item2Symbol.textContent = "P2";
  item2Symbol.style.color = "white";
  item3Symbol.textContent = "P3";
  item3Symbol.style.color = "white";
  item4Symbol.textContent = "P4";
  item4Symbol.style.color = "white";
  item5Symbol.textContent = "P5";
  item5Symbol.style.color = "white";
  item6Symbol.textContent = "P6";
  item6Symbol.style.color = "white";
  item7Symbol.textContent = "P7";
  item7Symbol.style.color = "white";
  item8Symbol.textContent = "P8";
  item8Symbol.style.color = "white";
  item9Symbol.textContent = "P9";
  item9Symbol.style.color = "white";
  player1.style.backgroundColor = "#0080FF";
  player1.style.color = "white";
  player2.style.backgroundColor = "#FF4B4B";
  player2.style.color = "white";
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
