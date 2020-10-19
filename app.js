var startTimerButton = document.querySelector(".startTimer");
var pauseTimerButton = document.querySelector(".pauseTimer");
var timerDisplay = document.querySelector(".timer");
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.color = "#28df99";
    timerDisplay.style.fontSize = "10rem";
    startTimerButton.classList.add("lighter");
    pauseTimerButton.classList.remove("lighter");
  }
}

function pauseTimer() {
  if (!difference) {
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove("lighter");
    pauseTimerButton.classList.add("lighter");
  } else {
    startTimer();
  }
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = "Start Timer!";
  timerDisplay.style.color = "grey";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove("lighter");
  pauseTimerButton.classList.remove("lighter");
}

function getShowTime() {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = updatedTime - startTime + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds =
    milliseconds < 100
      ? milliseconds < 10
        ? "00" + milliseconds
        : "0" + milliseconds
      : milliseconds;
  timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds + " ";
}
