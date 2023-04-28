// Get DOM elements
const timeElement = document.querySelector("#time");
const wrapperElement = document.querySelector(".wrapper");
const btnElement = document.querySelector("#start");
const divContEL = document.querySelector(".divContainer");
const hElement = document.querySelector("#title");
const oderListEl = document.querySelector("#q-list");
const finishDiv = document.querySelector(".finish-section");
const finalScore = document.querySelector("#result");
const errMsg = document.querySelector("#errorSmg");
const initialInput = document.querySelector("#inputInitial");
const submitEl = document.querySelector(".btn.btn-primary.mb-2");
const responsDiv = document.querySelector("#response");
const finaPageEl = document.querySelector(".final-page");
const initialAndScore = document.querySelector("#staticEmail");
const firstPageEl = document.querySelector(".first-page");

// Create an array of questions
const questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title:
      "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
    choices: ["Inline", "Import", "External", "Internal"],
    answer: "Import",
  },
  {
    title: "How to create an array in js ?",
    choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],
    answer: "var A=[]",
  },
  {
    title:
      "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
    choices: [
      "getElementById(‘idname’)",
      "getElementsByClass(‘classname’)",
      "getElementsByTagName(‘tagname’)",
      "querySelectorAll()",
    ],
    answer: "querySelectorAll()",
  },
];

// Create next questions to be added to the HTML document dynamically
function displayQuestions() {
  const question = questions[i];
  const { title, choices } = question;
  hElement.textContent = title;
  oderListEl.innerHTML = "";
  choices.forEach((choice) => {
    const liTag = document.createElement("li");
    liTag.setAttribute("class", "all_li");
    const btn = document.createElement("button");
    btn.setAttribute("class", "all_btn");
    btn.textContent = choice;
    liTag.appendChild(btn);
    oderListEl.appendChild(liTag);
    divContEL.appendChild(oderListEl);
    btn.addEventListener("click", onclickHandler);
  });
}
