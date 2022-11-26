

// console.log("Prince Raj");

// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log (userName);
// console.log ("Welcome " + userName);



var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "Do You know my birthday?",
  answer: "10 dec"
}, {
  question: "Where do I live? ",
  answer: "kolkata"
}, {
  question: "What is my higher Qualification? ",
  answer: "MTECH"
}, {
  question: "What about my passion?",
  answer: "Coding"
}, {
  question: "What about my hobby? ",
  answer: "Astrology"
}, {
  question: "What do I want to became? ",
  answer: "web developer"
}, {
  question: "What is my height?",
  answer: "5feet 11inch"
}, {
  question: "What is my favorite sport? ",
  answer: "Cricket"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW PRINCE RAJ?");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");

    score = score + 1;



  } else {
    console.log("wrong!");


  }


  console.log("current score: " + score);


}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)

  }
  console.log("The Final Score is " + score);
}



function levelReached() {
  if (score < 2) {
    console.log("level Average" + "Try again");
  } else {
    console.log("level Good");
  }
}



welcome();
game();
levelReached();


