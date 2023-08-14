const item1Symbol = document.querySelector('#item1Symbol');
const item1Button = document.querySelector('#item1');
const item2Symbol = document.querySelector('#item2Symbol');
const item2Button = document.querySelector('#item2');
const item3Symbol = document.querySelector('#item3Symbol');
const item3Button = document.querySelector('#item3');
const item4Symbol = document.querySelector('#item4Symbol');
const item4Button = document.querySelector('#item4');
const item5Symbol = document.querySelector('#item5Symbol');
const item5Button = document.querySelector('#item5');
const item6Symbol = document.querySelector('#item6Symbol');
const item6Button = document.querySelector('#item6');
const item7Symbol = document.querySelector('#item7Symbol');
const item7Button = document.querySelector('#item7');
const item8Symbol = document.querySelector('#item8Symbol');
const item8Button = document.querySelector('#item8');
const item9Symbol = document.querySelector('#item9Symbol');
const item9Button = document.querySelector('#item9');
const player2 = document.querySelector('.player2');
const player1 = document.querySelector('.player1');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

let symbols = ['X', 'O'];
let randomIndex = Math.floor(Math.random() * symbols.length);
let symbol = symbols[randomIndex];
console.log(symbol);

let isWin = false;

if(symbol === 'X'){
    player2.style.backgroundColor = '#FF4B4B';
    player2.style.borderColor = '#FF4B4B';
} else {
    player1.style.backgroundColor = '#0080FF';
    player1.style.borderColor = '#0080FF';
}

function setSymbol(itemButton, itemSymbol) {
    itemButton.addEventListener("click", () => {
        itemSymbol.textContent = symbol;
        itemSymbol.style.color = "black";
        counter1 = 1;
        checkForWin();
    });
}

function checkForWin() {
    if ((item1Symbol.textContent === symbol && item2Symbol.textContent === symbol && item3Symbol.textContent === symbol) && (symbol === 'X' || symbol === 'O'))
    {
        console.log("Wygrana");
        isWin = true;
        if (symbol === 'X'){
            player2.style.backgroundColor = '#FFD700';
            player2.style.borderColor = '#FFD700';
        } else {
            player1.style.backgroundColor = '#FFD700';
            player1.style.borderColor = '#FFD700';
        }
    } else {
        console.log("Próbuj dalej pedale");
    }
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
