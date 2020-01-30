// Version 1.1
//
// 1.1 Changes:
// Converted vanilla JavaScript to jQuery
// Added animation effects to number output

// ---------
// VARIABLES
// ---------

// variable for number of dice being rolled
//const numInput = document.getElementById('num-dice');
var numDice = 0;

// variable for sides on die
//const sidesInput = document.getElementById('die-sides');
var numSides = 0;

// Roll! button
//const rollButton = document.getElementById('roll-dice');

// Die Image
//var dieImage = document.getElementById('selected-die');
var spectrum = ['r', 'o', 'y', 'g', 'b', 'v'];
var randColor;

// Outputs
var backColor = ['#8b1418', '#b04f24', '#eab430', '#5e823c', '#36727c','#543875'];
//const outputTotal = document.getElementById('total-roll');
//var rollByRoll = document.getElementById('single-rolls');
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
//document.addEventListener('DOMContentLoaded', (event) => {
$(document).ready(function () {
  randColor = colorPicker();
  console.log(spectrum[randColor]);
});

// Changing png of die depending on which
// one chosen from drop-down
//sidesInput.addEventListener('change', function(evt) {
$('#die-sides').change(function () {
  //numSides = sidesInput.value;
  numSides = $('#die-sides').val();
  if (numSides > 0) {
    //dieImage.setAttribute('src', 'img/' + spectrum[randColor] + numSides + '.png');
    //dieImage.setAttribute('alt', 'Selected die');
    $('#selected-die').slideUp(150).
      slideDown(250).
      attr({
      src: 'img/' + spectrum[randColor] + numSides + '.png',
      alt: 'Selected die'
    });
  } else {
    //dieImage.removeAttribute('src');
    //dieImage.removeAttribute('alt');
    $('#selected-die').removeAttr('src alt');
  }
});

// Roll! button click
//rollButton.addEventListener('click', function(evt) {
$('#roll-dice').click(function () {
  //numDice = Math.abs(numInput.value);
  numDice = Math.abs($('#num-dice').val());
  if (numDice && (numSides > 0)) {
    totalRoll = 0;
    //rollByRoll.innerHTML = '';
    $('#single-rolls').html(null);
    for (let i = 0; i < numDice; i++) {
      singleRoll = rollDie(numSides);
      totalRoll += singleRoll;

      // Total displayed
      //outputTotal.innerHTML = totalRoll;
      $('#total-roll').html(totalRoll);
      //outputTotal.style.backgroundColor = backColor[randColor];
      $('#total-roll').css('backgroundColor', backColor[randColor]);
      if (randColor == 2) {
        //outputTotal.style.color = '#000';
        $('#total-roll').css('color', '#000');
      } else {
        //outputTotal.style.color = '#f5db84';
        $('#total-roll').css('color', '#f5db84');
      }

      // Single rolls displayed
      var oneRoll = document.createElement('output');
      oneRoll.className = 'single-out';
      //rollByRoll.appendChild(oneRoll);
      $('#single-rolls').append(oneRoll);
      oneRoll.innerHTML = singleRoll;
      oneRoll.style.backgroundColor = backColor[randColor];
      if (randColor == 2) {
        oneRoll.style.color = '#000';
      } else {
        oneRoll.style.color = '#f5db84';
      }
    }

    // Error Message - Fields not filled
  } else {
    if (numDice) {
      alert('Please choose the number of sides on dice.');
    } else {
      alert('Please input the number of dice to roll.');
    }
  }
});