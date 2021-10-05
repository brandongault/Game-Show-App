// VARIABLES //

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
let playerScore = 0;
let wrongGuesses = 0;

// ARRAY //
const phrases = [
  'We will cross that bridge when we come to it',
  'A penny for your thoughts',
  'Birds of a feather flock together',
  'Once in  a blue moon',
  'The early bird gets the worm',
];

// LISTEN FOR THE START GAME BUTTON TO BE PRESSED //
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// RETURN A RANDOM PHRASE FROM AN ARRAY //
function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor( Math.random() * arr.length );
    return arr[randomPhrase].split("");
}
// ADDS THE LETTERS OF A STRING TO THE DISPLAY //
const addPhraseToDisplay = () => {

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
