'use strict';

//global variables

let destinationArray;
// let questionnaire = document.getElementById(questionnaire);
let userAnswers = [];
//constructor function

function Destination(name, climate, budget, size, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.climate = climate;
  this.budget = budget;
  this.size = size;
}

destinationArray = [
  new Destination(),
  new Destination(),
  new Destination(),
  new Destination(),
  new Destination(),
  new Destination(),
];

console.log(destinationArray);

// questionnaire.addEventListenter('submit' function(event) {

//   event.preventDefault();

//   let form = event.target;
//   let answer = form.answer;

//   userAnswers.push(answer);
//   generateNewQuestion();
// });

// function generateNewQuestion() {
//   document.getElementById()
// }

let resetForm = function() {
  while (/*form exists*/) {
    form.removeChild(form.firstChild);
  } nextQuestion();
};

let nextQuestion = function() {
  
}
