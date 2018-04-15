var result;
var random1;
var random2;
var input;
var score;
score = 0;
var seconds = 10;


// random number generator
function getRandomInt(min, max) {
  random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  random2 = Math.floor(Math.random() * (max - min + 1)) + min;
  result = random1+random2;
  console.log(random1);
  console.log(random2);
  console.log(result);
  document.getElementById("demo").innerHTML = random1;
  document.getElementById("demo1").innerHTML = random2;
  document.getElementById("challengeStart").focus();
}

getRandomInt(0, 9);

//check answer
function checkAnswer() {
  var input = +document.getElementById("userInput").value; //"+" converts input to number
    console.log(input);
  if (input === result) {
    document.getElementById("correct").innerHTML = "correct!";
    score++;
    document.getElementById("numOfcorrectAnswers").innerHTML = "You have " + score + " correct answer(s)!";
    //alert if x number of correct answers under x minutes
    if (score === 3 && seconds > 0) {
      alert ("you made it!");
      var element = document.getElementById("test");
      element.classList.add("hide");
      var element = document.getElementById("testCountdown");
      element.classList.add("hide");
      var element = document.getElementById("congrats");
      element.classList.remove("hide");
      clearField();
    }
    // else if (seconds < 1) {
    //   alert ("too slow!")
    // };
  } else {
    document.getElementById("correct").innerHTML = "false!";
  };
  //if input field is not empty focus on next button
  if (document.getElementById("userInput").value != " ") {
    document.getElementById("nextButton").focus();
  }
}

//clear field
function clearField() {
  document.getElementById("userInput").value = " ";
  document.getElementById("correct").innerHTML = " ";
  getRandomInt(0, 9);
  document.getElementById("userInput").focus();
}

//submit answer on enter
document.getElementById("userInput").addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault()
  })

//fadeout challenge
function fadeOutEffect() {
  var fadeTarget = document.getElementById("challengeFadeOut");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity < 0.1) {
          clearInterval(fadeEffect);
      } else {
          fadeTarget.style.opacity -= 0.1;
      }
  }, 200);
     setTimeout(startCountdown, 3000);
}
document.getElementById("challengeStart").addEventListener('click', fadeOutEffect);

//delay start of countdown
function startCountdown() {
  var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];
  var element = document.getElementById("countdown");
  element.classList.remove("hide");
  //fadein countdown
  var timeleft = 5;
  var downloadTimer = setInterval(function(){
  timeleft--;
  console.log(timeleft);
  document.getElementById("countdown").textContent = timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);
  //call hideCountdown function with delay
  setTimeout(hideCountdown, 6000);
}

//hide countdown, show test questions
function hideCountdown() {
  var element = document.getElementById("countdown");
  element.classList.add("hide");
  var element = document.getElementById("test");
  element.classList.remove("hide");
  document.getElementById("userInput").focus();
  startTestCountdown();
}

//start test countdown
function startTestCountdown() {
  var element = document.getElementById("testCountdown");
  element.classList.remove("hide");
  var timeleft = 10;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("testCountdown").textContent = timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);
  setTimeout (timeIsUp, 10500);
}

function timeIsUp() {
  if (score <3) {
  alert('time is up')};
  seconds = 0;
  console.log(seconds);
}
