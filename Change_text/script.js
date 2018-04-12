var messageArray = ["The true heart of California","Tours as diverse as California itself","Explore our world your way"];
var messageIndex = 0;

function deeperFunction() {
  // Perform loop
  for(var i = 0; i <500; i++) {
    // Generate random number
    var foo = i*(Math.random());
    var bar = foo;
  }
}

function simpleFunction() {
  deeperFunction();
  // Grab message index
  var newMessage = messageArray[messageIndex];
  var messageElement = document.getElementById('mainMessage');
  messageElement.innerHTML = newMessage;
  messageIndex++;
  if (messageIndex >= messageArray.length) {
    messageIndex = 0;
  }
}

function changeMessage() {
  simpleFunction();
}

// IIFE
(function() {

},setInterval(changeMessage, 2000));


