var question1 = "";
var question1Answer = "";
var question2 = "";
var question2Answer = "";
var question3 = "";
var question3Answer = "";
var question4 = "";
var question4Answer = "";
var correctAnswers = 0;
var incorrectAnswers = 0;
var timeLeft = 5;

timeInterval = setInterval(timeRemaining, 1000);

function timeRemaining() {
  timeLeft--;
  $("#timeLeft").text(timeLeft);

  if (timeLeft === 0) {
    stop();
    alert("times up!");
    endQuiz();
  }
}

function stop() {
  clearInterval(timeInterval);
}

function resetAnswers() {
  var ele = document.getElementsByName("Question1");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }

  var ele = document.getElementsByName("Question2");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }

  var ele = document.getElementsByName("Question3");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }

  var ele = document.getElementsByName("Question4");
  for (var i = 0; i < ele.length; i++) {
    ele[i].checked = false;
  }
}

function endQuiz() {
  stop();

  question1 = $("input[name='Question1']:checked").val();
  if (question1 == "true") {
    question1Answer = "Question 1 was correct!";
    correctAnswers++;
  } else {
    question1Answer = "Question 1 was incorrect!";
    incorrectAnswers++;
  }

  question2 = $("input[name='Question2']:checked").val();
  if (question2 == "true") {
    question2Answer = "Question 2 was incorrect!";
    incorrectAnswers++;
  } else {
    question2Answer = "Question 2 was correct!";
    correctAnswers++;
  }

  question3 = $("input[name='Question3']:checked").val();
  if (question3 == "true") {
    question3Answer = "Question 3 was incorrect!";
    incorrectAnswers++;
  } else {
    question3Answer = "Question 3 was correct!";
    correctAnswers++;
  }

  question4 = $("input[name='Question4']:checked").val();
  if (question4 == "true") {
    question4Answer = "Question 4 was correct!";
    correctAnswers++;
  } else {
    question4Answer = "Question 4 was incorrect!";
    incorrectAnswers++;
  }

  resetAnswers();

  alert(
    question1Answer +
      "\n" +
      question2Answer +
      "\n" +
      question3Answer +
      "\n" +
      question4Answer +
      "\n" +
      "Correct: " +
      correctAnswers +
      "\n" +
      "incorrect: " +
      incorrectAnswers
  );
  correctAnswers = 0;
  incorrectAnswers = 0;
}

$(document).ready(function() {
  $("#endQuiz").click(function() {
    endQuiz();
  });
});
