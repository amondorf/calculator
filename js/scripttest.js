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
  document.getElementById("demo").innerHTML = random1;
  document.getElementById("demo1").innerHTML = random2;
  document.getElementById("challengeStart").focus();
}

getRandomInt(0, 9);


// var inputNumber = parseInt(input);
// console.log(inputNumber);

//check answer
function checkAnswer() {
  var input = +document.getElementById("userInput").value; //"+" converts input to number
  if (input == result) {
    console.log("correct");
    //show green check and hide again after 1sec.
    var element = document.getElementById("correct");
    element.classList.remove("hide");
    setTimeout(function() {
      var element = document.getElementById("correct");
      element.classList.add("hide");
    }, 1000);

    score++;
    document.getElementById("numOfcorrectAnswers").innerHTML = "You have " + score + " correct answer(s)!";
    //alert if x number of correct answers under x minutes
    if (score === 3 && seconds > 0) {
      setTimeout(function() {
        var element = document.getElementById("test");
        element.classList.add("hide");
        var element = document.getElementById("testCountdown");
        element.classList.add("hide");
        var element = document.getElementById("congratsColor");
        element.classList.add("congratsColor");
        var element = document.getElementById("congrats");
        element.classList.remove("hide");
      }, 1000);

      clearField();
    }
  } else {
    //show red cross and hide again after 1sec.
    var element = document.getElementById("false");
    element.classList.remove("hide");
    setTimeout(function() {
      var element = document.getElementById("false");
      element.classList.add("hide");
    }, 1000);
  };
  //if input field is not empty clearField
  if (document.getElementById("userInput").value != " ") {
      clearField();
  }
}

//clear field
function clearField() {
  document.getElementById("userInput").value = " ";
  // document.getElementById("correct").innerHTML = " ";
  getRandomInt(0, 9);
  document.getElementById("userInput").focus();
}

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
  }, 100);
     setTimeout(startCountdown, 1000);
}
document.getElementById("challengeStart").addEventListener('click', fadeOutEffect);

var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];
//delay start of countdown
function startCountdown() {
  var element = document.getElementById("countdown");
  element.classList.remove("hide");
  //fadein countdown
  var timeleft = 5;
  var downloadTimer = setInterval(function(){
  timeleft--;
  // console.log(timeleft);
  if (timeleft == 4) {
    element.style.color = colors[1];
  } else if (timeleft == 3) {
    element.style.color = colors[2];
  } else if (timeleft == 2) {
    element.style.color = colors[3];
  } else if (timeleft == 1) {
    element.style.color = colors[4];
  } else if (timeleft == 0) {
    element.style.color = colors[5];
  }
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
  document.getElementById("testCountdown").textContent = timeleft + " seconds";
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);
  setTimeout (timeIsUp, 10500);
}

function timeIsUp() {
  if (score <3) {
  alert('time is up')};
  seconds = 0;
}
