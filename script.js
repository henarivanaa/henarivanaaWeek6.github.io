var usaButton = document.getElementById("usa");
var ukButton = document.getElementById("uk");
var ausButton = document.getElementById("aus");
var skButton = document.getElementById("sk");
var franceButton = document.getElementById("france");
var chinaButton = document.getElementById("china");
var plus = 0;
var timeText = document.getElementById("chosen");

const usaTime = () => {
  plus = -12;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
const ukTime = () => {
  plus = -7;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
const ausTime = () => {
  plus = -8;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
const skTime = () => {
  plus = 2;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
const franceTime = () => {
  plus = -6;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
const chinaTime = () => {
  plus = 1;
  timeText.innerText = "YOUR CHOSEN LOCATION CURRENT TIME IS";
};
usaButton.addEventListener("click", usaTime);
ukButton.addEventListener("click", ukTime);
ausButton.addEventListener("click", ausTime);
skButton.addEventListener("click", skTime);
franceButton.addEventListener("click", franceTime);
chinaButton.addEventListener("click", chinaTime);

const showCurrentTime = () => {
  var clock = document.getElementById("clock");
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours + plus < 0) {
    hours += 24 + plus;
  } else {
    hours += plus;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ":" + minutes + ":" + seconds;
  clock.innerText = clockTime;
};

showCurrentTime();
var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

var reset = document.getElementById("resetButton")
const resetClock = () => {
    plus = 0;
    timeText.innerText = "YOUR LOCATION CURRENT TIME IS";
    showCurrentTime()
}
reset.addEventListener("click",resetClock)
