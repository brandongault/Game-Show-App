// VARIABLES //

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementByClassName('btn_reset');
let playerScore = 0;
let wrongGuesses = 0;
let randomPhrase = Math.floor( Math.random() * phrases.length );

// ARRAY //
const phrases [
  'We will cross that bridge when we come to it',
  'A penny for your thoughts',
  'Birds of a feather flock together',
  'Once in  a blue moon',
  'The early bird gets the worm',
];

// LISTEN FOR THE START GAME BUTTON TO BE PRESSED //
startButton.addEventListener('click', () => {
  if () {
    hideOverlay.style.display = 'block';
  } else {
    hideOverlay.style.display = 'none'
});

// RETURN A RANDOM PHRASE FROM AN ARRAY //
const getRandomPhraseAsArray = arr => {

}
// ADDS THE LETTERS OF A STRING TO THE DISPLAY //
const addPhraseToDisplay => {

}
// CHECK IF A LETTER IS IN THE PHRASE //
const checkLetter = button => {

}
// CHECK IF THE GAME HAS BEEN WON OR LOST //
const checkWin = () => {

}

// LISTEN FOR THE ONSCREEN KEYBOARD TO BE CLICKED //
qwerty.addEventListener('click', e => {

});
