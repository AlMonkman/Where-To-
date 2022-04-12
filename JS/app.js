'use strict';

//global variables

let i = 0;

let destinationArray;

let form = document.getElementById('questionnaire');

let resultsButton = document.getElementById('results');

let resultsDiv = document.getElementById('resultsDiv');

let resultsPage = document.getElementById('resultsPage');

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
  this.src = `Img/${name}.${fileExtension}`;
}

destinationArray = [
  new Destination('Ha Long Bay', 'Tropical', 'Affordable', 'Solo'),
  new Destination('Maldives', 'Tropical', 'Expensive', 'Family', 'jpeg'),
  new Destination('Pink Lake', 'Tropical', 'Affordable', 'Family'),
  new Destination('Bora Bora', 'Tropical', 'Expensive', 'Solo'),
  new Destination('Whistler', 'Frigid', 'Expensive', 'Family'),
  new Destination('Saariselka', 'Frigid', 'Expensive', 'Solo'),
  new Destination('Harbin City', 'Frigid', 'Affordable', 'Family'),
  new Destination('Nagano', 'Frigid', 'Affordable', 'Solo')
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

};


if(form) {
  form.addEventListener('submit', buttonFunction);
}

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
    results.setAttribute('id', 'resultsButton');
    anchor.appendChild(results);
    localStorage.setItem('userData', JSON.stringify(userAnswers));
  }



}

let resultsButtonFunction = function (event) {
  event.preventDefault();
  console.log('im working');
  showResults();
};

if (resultsButton) {
  resultsButton.addEventListener('click', resultsButtonFunction);
}



function showResults() {
  userAnswers = JSON.parse(localStorage.getItem('userData'));
  resultsButton.display = 'none';
  console.log(userAnswers);

  for (let i = 0; i < destinationArray.length; i++) {
    if (userAnswers[0] === destinationArray[i].climate
      && userAnswers[1] === destinationArray[i].budget
      && userAnswers[2] === destinationArray[i].size) {
      let h1 = document.createElement('h1');
      h1.textContent = `${destinationArray[i].name} is your top Where To? destination!`;
      resultsPage.appendChild(h1);
      let img = document.createElement('img');
      img.src = destinationArray[i].src;
      resultsPage.appendChild(img);
      let p = document.createElement('p');
      p.textContent = `${destinationArray[i].name} is a beautiful place to visit for a ${destinationArray[i].size} trip. The ${destinationArray[i].climate} climate is no joke, so pack accordingly! It is part of our ${destinationArray[i].budget} package.`;
      resultsPage.appendChild(p);
      resultsButton.style.display = 'none';
    }
  }
}
