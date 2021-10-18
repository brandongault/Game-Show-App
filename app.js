// VARIABLES //

const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const letters = document.getElementsByTagName('button');
const ul = phrase.firstElementChild;
let missed = 0;


// ARRAY //
const phrases = [

  'hakunna matata',
  'avengers assemble',
  'autobots rollout',
  'gotta catch em all',
  'may the force be with you'
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
    button.disabled = 'true';
    let match = checkLetterSelected(button.textContent);
      console.log(match);
      if ( match === null) {
        const images = document.querySelectorAll('.tries img');
        if ( images.length >= 1 ) {
               images[missed].src = "images/lostHeart.png";
              }
               missed++;
        }
      }
        checkWin();
});

// CHECK IF THE GAME HAS BEEN WON OR LOST //
const checkWin = () => {
    const liLetter = document.querySelectorAll("li.letter");
    const liShow = document.querySelectorAll("li.show");
    const header = document.querySelector('h2');

    if (liLetter.length === liShow.length) {
          overlay.className = ('win');
          header.textContent = "You Won!";
          overlay.style.display = "flex";
          console.log(checkWin);
        } else if ( missed > 4 ) {
          overlay.className = ('lose');
          header.textContent = "You Lost. Try Again!"
          overlay.style.display = "flex"
        }
    }









// misc //
