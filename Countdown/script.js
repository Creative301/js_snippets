// 2 Global variables
var secondsRemaining;
var intervalHandle;

function resetPage() {
  document.getElementById('inputArea').style.display='block';
}

function tick() {
  // grab the h1
  var timeDisplay = document.getElementById('time');

  // Turn seconds into mm:ss
  var min = Math.floor(secondsRemaining/60);
  var sec = secondsRemaining - (min*60);

  // Add a leading zero (as a string value) if seconds less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Concatenate with colon
  var message = min + ":" + sec;

  // Change the display
  timeDisplay.innerHTML = message;

  // Stop if down to zero
  if (secondsRemaining === 0) {
    alert('Done!');
    clearInterval(intervalHandle);
    resetPage();
  }

  // Substract from seconds remaining
  secondsRemaining--;
}

function starCountDown() {
  // Get contents of the 'minutes' text box
  var minutes = document.getElementById('minutes').value;

  // Check if NaN
  if (isNaN(minutes)) {
    alert('Please enter a number');
    return;
  }
  // Get the seconds
  secondsRemaining = minutes * 60;

  // Every seconds, call the 'tick' function
  intervalHandle = setInterval(tick, 1000);

  // Hide the form
}


// As soon as the page load
window.onload = function() {
  // Create input text box and give it id of "minutes"
  var inputMinutes = document.createElement('input');
  inputMinutes.setAttribute('id', 'minutes');
  inputMinutes.setAttribute('type', 'text');

  // Create a button
  var startButton = document.createElement('input');
  startButton.setAttribute('type', 'button');
  startButton.setAttribute('value', 'Start Countdown');
  startButton.addEventListener('click', starCountDown);

  // Add to the DOM, to the div called 'inputArea'
  document.getElementById('inputArea').appendChild(inputMinutes);
  document.getElementById('inputArea').appendChild(startButton);
}







































