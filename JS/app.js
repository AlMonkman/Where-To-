'use strict';

//global variables

let destinationArray;
let form = document.getElementById('questionnaire');
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
  new Destination('Ha Long Bay, Vietnam', 'tropical', '', ''),
  new Destination('Maldives', 'tropical', '', ''),
  new Destination('Pink Lake, Australia', 'tropical', '', ''),
  new Destination('Bora Bora', 'tropical', '', ''),
  new Destination('Whistler, British Columbia', 'frigid', '', ''),
  new Destination('Saariselka, Finland', 'frigid', '', ''),
  new Destination('Harbin City, China', 'frigid', '', ''),
  new Destination('Nagano, Japan', 'frigid', '', ''),
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

form.addEventListener('submit', function(event) {
  event.preventDefault();

  getAnswer();
  console.log(userAnswers);

});

// function generateNewQuestion() {
//   document.getElementById()
// }

// let nextQuestion = function() {
//   while (/*form exists*/) {
//     form.removeChild(form.firstChild);
//   } 
//   nextQuestion();
// };
