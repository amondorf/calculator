var result;
var random1;
var random2;
var input;
var score;
score = 0;

document.getElementById("userInput").focus();

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
}

getRandomInt(0, 9);

//check answer
function checkAnswer() {
  var input = +document.getElementById("userInput").value; //"+" converts input to number
    console.log(input);
  if (input === result) {
    document.getElementById("correct").innerHTML = "correct!";
    score++;
    document.getElementById("numOfcorrectAnswers").innerHTML = "you have " + score + " right answer(s)!";
    // //alert if x number of correct answers under x minutes
    // if (score === 3 && seconds < 10) {
    //   alert ("you made it!");
    // } else if (score === 3 && seconds >= 10) {
    //   alert ("you have the required number of correct answers but you were too slow!")
    // };
    // console.log("minutes" + seconds);
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




//stopwatch as seen at https://jsfiddle.net/Daniel_Hug/pvk6p/

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
// timer();


/* Start button */
// start.onclick = function() {
//   timer();
//   document.getElementById("userInput").focus();
//   }

/* Stop button */
// stop.onclick = function() {
//     clearTimeout(t);
// }

/* Clear button */
// clear.onclick = function() {
//     setTimeout(function(){
//       h1.textContent = "00:00:00";
//       seconds = 0; minutes = 0; hours = 0;
//     }, 2000);
//   clearField();
// }
