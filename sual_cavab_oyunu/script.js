var questions = {
  q1: ["The sky is blue.", "t"],
  q2: ["There are 365 days in a year.", "t"],
  q3: ["There are 42 ounces in a pound.", "f"],
  q4: ["The Declaration of Independence was created in 1745.", "f"],
  q5: ["Bananas are vegetables.", "f"]
};

var score = 0;

var questionIndex = 0;

var questionArray = [
  questions.q1,
  questions.q2,
  questions.q3,
  questions.q4,
  questions.q5
];

function renderQuestion() {
  if (questionIndex <= questionArray.length - 1) {
    document.querySelector("#question").innerHTML =
      questionArray[questionIndex][0];
  } else {
    document.querySelector("#question").innerHTML = "Meglub Olduz!";
    document.querySelector("#score").innerHTML =
      "Oyun neticesi: " + score + "/" + questionArray.length;
  }
}

function updateScore() {
  document.querySelector("#score").innerHTML = "Netice: " + score;
}

renderQuestion();
updateScore();

document.onkeyup = function(event) {
  if (questionIndex === questionArray.length) {
    return;
  }
  var userInput = String.fromCharCode(event.which).toLowerCase();

  if (userInput === "t" || userInput === "f") {
    if (userInput === questionArray[questionIndex][1]) {
      alert("Dogru!");
      score++;
      updateScore();
    } else {
      alert("Sehv!");
    }
    questionIndex++;
    renderQuestion();
  }
};
