// VARIABLES //

const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const letters = document.getElementsByTagName('button');
const ul = phrase.firstElementChild;
let playerScore = 0;
let wrongGuesses = 0;

// ARRAY //
const phrases = [
  'we will cross that bridge when we come to it',
  'a penny for your thoughts',
  'birds of a feather flock together',
  'once in  a blue moon',
  'the early bird gets the worm',
];

// LISTEN FOR THE START GAME BUTTON TO BE PRESSED //
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
    const randomPhraseSelected = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhraseSelected);

});

// RETURN A RANDOM PHRASE FROM AN ARRAY //
function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor( Math.random() * arr.length );
    return arr[randomPhrase].split("");
}
// ADDS THE LETTERS OF A STRING TO THE DISPLAY //

const addPhraseToDisplay = (arr) => {
  for ( let i = 0; i < arr.length; i++ ) {
    const listItem = document.createElement('li');
    listItem.textContent = arr[i];
    ul.appendChild(listItem);
    if (arr[i] !== " " ) {
      listItem.className = "letter";
    } else {
      listItem.className = "space";
    }
  }
}

// CHECK IF A LETTER IS IN THE PHRASE //
const checkLetterSelected = (letterSelected) => {
  const checkLetter = ul.children;
  let match = null;
  for ( let i = 0; i < checkLetter.length; i++ ) {
    if (letterSelected === checkLetter[i].textContent) {
      checkLetter[i].classList.add('show');
      match = checkLetter[i].textContent;
    }
  }
  return match;
}

// LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED //
keyboard.addEventListener('click', e => {

  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    button.className = 'chosen';
    button.disable = 'true';
    checkLetter(button.textContent);

    if (letterFound == null) {
           selectedButton.disabled = true;
           selectedButton.classList.add('disabled');
           const imgLI = document.querySelectorAll("[src='images/liveHeart.png']");
           if ( imgLI.length >= 1 ) {
               imgLI[0].src = "images/lostHeart.png";
           }
           missed++;
       } else {
           selectedButton.classList.add('chosen');
       }

  }


});

// CHECK IF THE GAME HAS BEEN WON OR LOST //
const checkWin = () => {
    const liLetter = document.querySelectorAll('li.letter');
    const liShow = document.querySelectorAll('li.show');
    if (liLetter.length === liShow.length) {
        h2Header.style.display = 'none';
        overlay.style.display = 'flex';
        overlay.className = ('win');
        overlay.firstElementChild.textContent = "You won!";
        overlay.firstElementChild.style.background = 'none';
        startButton.textContent = "Reset Game";
    } else if (missed > 4) {
        h2Header.style.display = 'none';
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        overlay.firstElementChild.textContent = "Better luck next time!";
        overlay.firstElementChild.style.background = 'none';
        startButton.textContent = "Reset Game";
    }
}










// misc //
