'use strict';

//global variables

let i = 0;

let destinationArray = [];

let form = document.getElementById('questionnaire');

let userAnswers = [];

let questionsArray = ['What kind of budget are you working with for this trip?', 'How big of a group will you be traveling with?'];

let answerArrayOne = ['Affordable', 'Solo'];

let answerArrayTwo = ['Expensive', 'Family'];

//constructor function

function Destination(name, climate, budget, size, fileExtension = 'jpg') {
  this.name = name;
  this.climate = climate;
  this.budget = budget;
  this.size = size;
  this.src = `img/${name}.${fileExtension}`;
  destinationArray.push(this);
}

destinationArray = [
  new Destination('Ha Long Bay', 'tropical', '', ''),
  new Destination('Maldives', 'tropical', '', ''),
  new Destination('Pink Lake', 'tropical', '', ''),
  new Destination('Bora Bora', 'tropical', '', ''),
  new Destination('Whistler', 'frigid', '', ''),
  new Destination('Saariselka', 'frigid', '', ''),
  new Destination('Harbin City', 'frigid', '', ''),
  new Destination('Nagano', 'frigid', '', ''),
];

console.log(destinationArray);

function getAnswer() {
  let answers = document.getElementsByName('action');

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      userAnswers.push(answers[i].value);
    }
  }
}
let buttonFunction = function(event) {
  event.preventDefault();
  generateNewQuestion();
  getAnswer();
  console.log(userAnswers);

}

form.addEventListener('submit', buttonFunction);

function generateNewQuestion() {
  let question = document.getElementById('Question');
  question.textContent = `${questionsArray[i]}`;
  let answerOne = document.getElementById('answerOne');
  answerOne.textContent = `${answerArrayOne[i]}`;
  let answerTwo = document.getElementById('answerTwo');
  answerTwo.textContent = `${answerArrayTwo[i]}`;
  i++;
  console.log(i);
  if (i === 3) {
    form.style.display = 'none';
  }
 
  
}

