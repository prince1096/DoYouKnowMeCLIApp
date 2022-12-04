

// console.log("Prince Raj");

// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// console.log (userName);
// console.log ("Welcome " + userName);



var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "Do You know my birthday?  \na.10 oct \nb.10 dec \nc.12 oct \nd.12 dec \nEnter your answer :",
  answer: "b"
}, {
  question: "Where do I live?   \na.Delhi \nb.Pune \nc.Patna \nd.Kolkata \nEnter your answer : ",
  answer: "d"
}, {
  question: "What is my higher Qualification?  \na.MBBS \nb.BTECH \nc.MTECH \nd.PHD \nEnter your answer : ",
  answer: "c"
}, {
  question: "What about my passion?  \na.Writing \nb.Coding \nc.Gymming \nd.Sports \nEnter your answer :",
  answer: "b"
}, {
  question: "What about my hobby?  \na.Playing Badminton \nb.Gymming \nc.Astrology \nd.Watching movie \nEnter your answer : ",
  answer: "c"
}, {
  question: "What do I want to became? \na.Teacher \nb.Youtuber \nc.BusinessMan \nd.WevDeloper \nEnter your answer : ",
  answer: "d"
}, {
  question: "Who is my favourite cricketer? \na.MSDhoni \nb.Virat Kohit \nc.Rohit Sharma \nd.Hardik Pandya \nEnter your answer :",
  answer: "d"
}, {
  question: "What is my favorite sport? \na.Football \nb.Cricket \nc.Badminton \nd.Volleyballa \nEnter your answer : ",
  answer: "b"
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


