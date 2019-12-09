// ---------
// VARIABLES
// ---------

// variable for number of dice being rolled
const numInput = document.getElementById('num-dice');
var numDice = 0;

// variable for sides on die
const sidesInput = document.getElementById('die-sides');
var numSides = 0;

// Roll! button
const rollButton = document.getElementById('roll-dice');

// Die Image
var dieImage = document.getElementById('selected-die');
var spectrum = ['r', 'o', 'y', 'g', 'b', 'v'];
var randColor;

const outputTotal = document.getElementById('total-roll');
var rollByRoll = document.getElementById('single-rolls');
var singleRoll;
var totalRoll;

//----------
// FUNCTIONS
//----------

// Color Picker
var colorPicker = function () {
  return Math.floor(Math.random() * spectrum.length);
}

// Random Number Generator
var rollDie = function (x) {
  return (Math.floor(Math.random() * x) + 1);
}

//----------------
// EVENT LISTENERS
//----------------

// Load Page
document.addEventListener('DOMContentLoaded', (event) => {
  randColor = colorPicker();
  console.log(spectrum[randColor]);
});

// Changing png of die depending on which
// one chosen from drop-down
sidesInput.addEventListener('change', () => {
  numSides = sidesInput.value;
  if (numSides > 0) {
    dieImage.setAttribute('src', 'img/' + spectrum[randColor] + numSides + '.png');
    dieImage.setAttribute('alt', 'Selected die');
  } else {
    dieImage.removeAttribute('src');
    dieImage.removeAttribute('alt');
  }
})

// Roll! button click
rollButton.addEventListener('click', () => {
  numDice = Math.abs(numInput.value);
  if (numDice && (numSides > 0)) {
    totalRoll = 0;
    rollByRoll.innerHTML = '';
    for (let i = 0; i < numDice; i++) {
      singleRoll = rollDie(numSides);
      totalRoll += singleRoll;
      var oneRoll = document.createElement('output');
      oneRoll.className = 'single-out';
      rollByRoll.appendChild(oneRoll);
      oneRoll.innerHTML = singleRoll;
    }
    outputTotal.innerHTML = totalRoll;

  } else {
    if (numDice) {
      alert('Please choose the number of sides on dice.');
    } else {
      alert('Please input the number of dice to roll.');
    }
  }
})