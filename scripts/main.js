// variable for number of dice being rolled
const numInput = document.getElementById('num-dice');
var numDice = 0;

// variable for sides on die
const sidesInput = document.getElementById('die-sides');
var numSides = 0;

// Roll! button
const rollButton = document.getElementById('roll-dice');

const outputTotal = document.getElementById('total-roll');
var singleRoll;
var totalRoll;

// Random Number Generator
var rollDie = function (x) {
  return (Math.floor(Math.random() * x) + 1);
}

rollButton.addEventListener('click', () => {
  numDice = Math.abs(numInput.value);
  numSides = sidesInput.value;
  if (numDice && numSides) {
    totalRoll = 0;
    for (let i = 0; i < numDice; i++) {
      singleRoll = rollDie(numSides);
      console.log(singleRoll);
      totalRoll += singleRoll;
    }
    console.log(totalRoll);
    outputTotal.innerHTML = totalRoll;
  } else {
    alert('Please input the number of dice to roll.');
  }
})