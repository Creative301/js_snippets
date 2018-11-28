/* 
Activity: Contact manager
*/

// TODO: Complete the program
// https://stackoverflow.com/questions/24924032/how-to-loop-if-else-statements-javascript
// https://stackoverflow.com/questions/40606697/how-do-i-loop-back-to-the-prompt-if-answer-is-incorrect-javascript
// https://www.freecodecamp.org/forum/t/js-while-loop-problem/56346/5
var greetings = "Welcome to your contacts manager!";
var choice1 = "1: Lists contacts";
var choice2 = "2: Add a contacts ";
var choice0 = "0: Quit";
var lists = "Here's the list of all your contacts:";
var contacts = [{firstName: 'John', lastName: 'Smith'}, {firstName: 'Jane', lastName:'Doe'}];
var runContact = true;
var choicesPrompt = 0;
var choicesPromptArrayValue;
var choicesPromptArray = [];


init();
input();

function input() {
  while(choicesPrompt === 1) {
        console.log(lists);
        listContacts();
        greetingChoices();
        runChoicesPrompt();
  }
  runContact = false;
/*   while (choicesPrompt === 0) {
        // Quit the contact app when the user input 0 for the choice
        runContact = false;
      }   */   
};

function greetingChoices() {
  console.log(choice1);
  console.log(choice2);
  console.log(choice0);
}

function listContacts() {
  for (var i = 0; i < contacts.length; i++) {
    console.log("Last name: " + contacts[i].lastName + ", first name: " + contacts[i].firstName);
  }
} 

function runChoicesPrompt() {
  choicesPrompt = parseInt(prompt('Please enter your choice')); 
  // choicesPromptArray.push(choicesPrompt);
  // choicesPromptArrayValue = choicesPromptArray[choicesPromptArray.length-1];
  // console.log(choicesPromptArrayValue);
}

function init() {
  console.log(greetings);
  greetingChoices();
  runChoicesPrompt();
}