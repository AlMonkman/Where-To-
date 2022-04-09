'use strict';

//global variables

let i = 0;

let destinationArray;

let form = document.getElementById('questionnaire');

let resultsDiv = document.getElementById('resultsDiv');

let answerOneValue = document.getElementById('answerOneValue');

let answerTwoValue = document.getElementById('answerTwoValue');

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
let buttonFunction = function (event) {
  event.preventDefault();
  getAnswer();
  generateNewQuestion();
  console.log(userAnswers);

}

form.addEventListener('submit', buttonFunction);

function generateNewQuestion() {
  let question = document.getElementById('Question');
  question.textContent = `${questionsArray[i]}`;
  let answerOne = document.getElementById('answerOne');
  answerOne.textContent = `${answerArrayOne[i]}`;
  answerOneValue.value = `${answerArrayOne[i]}`;
  let answerTwo = document.getElementById('answerTwo');
  answerTwo.textContent = `${answerArrayTwo[i]}`;
  answerTwoValue.value = `${answerArrayTwo[i]}`;
  i++;
  console.log(i);
  if (i === 3) {
    form.style.display = 'none';
    let anchor = document.createElement('a');
    anchor.href = 'results.html';
    resultsDiv.appendChild(anchor);
    let results = document.createElement('button');
    results.textContent = 'Click Here For Results!';
    anchor.appendChild(results);
  }



}

