/* 
Activity: Contact manager
*/

// TODO: Complete the program
// https://stackoverflow.com/questions/24924032/how-to-loop-if-else-statements-javascript
// https://stackoverflow.com/questions/40606697/how-do-i-loop-back-to-the-prompt-if-answer-is-incorrect-javascript
// https://www.freecodecamp.org/forum/t/js-while-loop-problem/56346/5
// https://stackoverflow.com/questions/36375261/nested-while-loops-in-javascript
var greetings = "Welcome to your contacts manager!";
var choice1 = "1: List contacts";
var choice2 = "2: Add a contact";
var choice0 = "0: Quit";
var lists = "Here's the list of all your contacts:";
var contacts = [{firstName: 'John', lastName: 'Smith'}, {firstName: 'Jane', lastName:'Doe'}];
var runContact, choicesPrompt, addFirstName, addLastName, addFirstNameCapitalize, addLastNameCapitalize;

init();
input();

function input() {
  while(choicesPrompt === 1) {
    console.log(lists);
    listContacts();
    greetingChoices();
    runChoicesPrompt();

    while(choicesPrompt === 2) {
      addContact();
      greetingChoices();
      runChoicesPrompt();
    }

    if(choicesPrompt === 0) {
      runContact = false;
      break;
    }
  }
};

function greetingChoices() {
  console.log(choice1);
  console.log(choice2);
  console.log(choice0);
}

function runChoicesPrompt() {
  choicesPrompt = parseInt(prompt('Please enter your choice:')); 
}

function listContacts() {
  for (var i = 0; i < contacts.length; i++) {
    console.log("Last name: " + contacts[i].lastName + ", first name: " + contacts[i].firstName);
  }
} 

function addContact() {
  addFirstName = String(prompt("Please enter your First Name"));
  addFirstNameCapitalize = addFirstName.charAt(0).toUpperCase() + addFirstName.slice(1);
  addLastName = String(prompt("Please enter your Last Name"));
  addLastNameCapitalize = addLastName.charAt(0).toUpperCase() + addLastName.slice(1);
  contacts.push({firstName: addFirstNameCapitalize, lastName: addLastNameCapitalize});
  console.log("Contact added");
}

function init() {
  runContact = true;
  console.log(greetings);
  greetingChoices();
  runChoicesPrompt();
}