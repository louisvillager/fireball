// Version 1.1
//
// 1.1 Changes:
// Converted vanilla JavaScript to jQuery.
// Added animation effects to selected die
// and number output.

// ---------
// VARIABLES
// ---------

// variable for number of dice being rolled
var numDice = 0;

// variable for sides on die
var numSides = 0;

// Roll! button
//const rollButton = document.getElementById('roll-dice');

// Die Image
var spectrum = ['r', 'o', 'y', 'g', 'b', 'v'];
var randColor;

// Outputs
var backColor = ['#8b1418', '#b04f24', '#eab430', '#5e823c', '#36727c','#543875'];
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

// Choose color on page load
$(document).ready(function () {
  randColor = colorPicker();
  // log selected color to console
  console.log(spectrum[randColor]);
});

// Change image of die depending on
// selection from drop-down
$('#die-sides').change(function () {
  numSides = $('#die-sides').val();
// Die image fades out and back in
// upon change
  if (numSides > 0) {
    $('#img-holder').fadeOut(150, function () {
      $('#selected-die').attr('src',
        'img/' + spectrum[randColor] + numSides + '.png');
    });
    $('#img-holder').fadeIn(350);
  } else {
    $('#selected-die').attr('src', 'img/init.png');
  }
});

// Roll! button click
$('#roll-dice').click(function () {
  numDice = Math.abs($('#num-dice').val());
  if (numDice && (numSides > 0)) {
    // Total value of dice rolled
    totalRoll = 0;
    $('#single-rolls').html(null);
    console.log($('#total-roll-id').html().val);
    for (let i = 0; i < numDice; i++) {
      //console.log(`rolling ${i+1} now`);
      singleRoll = rollDie(numSides);
      totalRoll += singleRoll;

      // Single rolls displayed
      var oneRoll = document.createElement('output');
      oneRoll.className = 'single-out';
      $('#single-rolls').append(oneRoll);
      oneRoll.innerHTML = singleRoll;
      oneRoll.style.backgroundColor = backColor[randColor];
      if (randColor == 2) {
        oneRoll.style.color = '#000';
      } else {
        oneRoll.style.color = '#f5db84';
      }
    }

    // Total displayed
    $('#total-roll-id').css('backgroundColor', backColor[randColor]);
    if (randColor == 2) {
      $('#total-roll-id').css('color', '#000');
    } else {
      $('#total-roll-id').css('color', '#f5db84');
    }

    if ($('#total-roll-id').html() > 0) {
      $('#number-out-id').hide('slide', 'swing', 250, function () {
        $('#total-roll-id').html(totalRoll);
      });
      $('#number-out-id').show('slide', 'swing', 400);
    } else {
      $('#total-roll-id').html(totalRoll);
    }

    //console.log($('#total-roll-id').html());

    // Test hide() animation on #hiding-test
    //let disp = window.getComputedStyle(document.getElementById('hiding-test'), null).
    //  getPropertyValue('display');
    //$('#hiding-test').hide('slide', 150);
    //$('#hiding-test').show('slide', 350);

    // Error Message - Fields not filled
  } else {
    if (numDice) {
      alert('Please choose the number of sides on dice.');
    } else {
      alert('Please input the number of dice to roll.');
    }
  }
});