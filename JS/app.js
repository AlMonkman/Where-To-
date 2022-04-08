'use strict';

//global variables

let destinationArray;
// let questionnaire = document.getElementById(questionnaire);
let userAnswers = [];
//constructor function

function Destination(name, climate, budget, size) {
  this.name = name;
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
