// set the time to zero
let quizTimer = 76;
let quizTimerCount;

// this is the quizTimer function which will start counting as soon as the quiz starts
function initQuizTimer() {
  quizTimerCount = setInterval(function () {
    quizTimer--;
    const timeReset = (timeElement.textContent = "Time: " + quizTimer);
    if (quizTimer <= 0) {
      clearInterval(quizTimerCount);
      timeElement.textContent = timeReset;
    }
  }, 1000);
}

// here is the event listener to start the quizTimer and hide the quiz button
document.addEventListener("click", function (event) {
  if (event.target === btnElement) {
    wrapperElement.style.display = "none";
    initQuizTimer();
    displayQuestions();
  }
});

// declare the index variable for the onclickHandler function
let i = 0;

// add a function to compare the answers and display each question as the buttons are clicked
function onclickHandler(event) {
  if (quizTimer <= 0) {
    clearInterval(quizTimerCount);
    divContEL.style.display = "none";
    renderFinalResult();
  }

  const answerText = event.target.textContent;
  if (answerText === questions[i].answer) {
    quizTimer = quizTimer;
    responsDiv.setAttribute("style", "color: green");
    responsDiv.textContent = "Correct";
  } else {
    responsDiv.setAttribute("style", "color: red");
    responsDiv.textContent = "Wrong";
    quizTimer -= 15;
  }

  if (i < questions.length - 1) {
    i++;
    setTimeout(function () {
      displayQuestions();
      responsDiv.textContent = "";
    }, 1000);
  } else {
    setTimeout(function () {
      responsDiv.textContent = "";
      renderFinalResult();
      clearInterval(quizTimerCount);
    }, 500);
    divContEL.innerHTML = "";
  }
}

// function to display user's final score
function renderFinalResult() {
  finishDiv.style.visibility = "visible";
  timeElement.textContent = "Time: " + quizTimer;
  const HighScores = quizTimer;
  localStorage.getItem(HighScores);
  finalScore.textContent = "Your final score is: " + HighScores;
  localStorage.setItem("HighScores", HighScores);
}

// function to show the last page
function renderLastPage() {
  const yourScore = localStorage.getItem("HighScores");
  const yourInitial = localStorage.getItem("Initial");
  if (yourScore && yourInitial === "") {
    return;
  }
  finishDiv.textContent = "";
  const finaPageEl = document.querySelector(".final-page");
  finaPageEl.style.visibility = "visible";
  const initialAndScore = document.querySelector("#staticEmail");
  initialAndScore.value = yourInitial + ": " + yourScore;
}

// this event listener submits the initial and final score to the local storage
document.addEventListener("submit", function (event) {
  event.preventDefault();
  const initialInput = document.querySelector("#inputInitial").value;
  if (initialInput === "") {
    errMsg.setAttribute("style", "color: red");
    errMsg.textContent = "Initial input field cannot be empty";
  } else {
    errMsg.textContent = "";
    localStorage.getItem(initialInput);
    localStorage.setItem("Initial", initialInput);
    renderLastPage();
  }
});

// this function will refresh the page and send the user back to the beginning page when the "Go Back" button is clicked
function init() {
  location.reload();
}

// this function will clear the initial and score displayed on the final page
function clearScore() {
  initialAndScore.value = "";
}
