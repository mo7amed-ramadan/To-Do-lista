// priority dropdown
//  Definition of variable
var dropDown = document.querySelectorAll(".priority");
var priority = document.getElementById("selected");
var high = document.getElementById("high");
var highValue = high.innerHTML;
var medium = document.getElementById("medium");
var mediumValue = medium.innerHTML;
var low = document.getElementById("low");
var lowValue = low.innerHTML;
// for each click on select show options
dropDown.forEach((dropDown) => {
  const select = dropDown.querySelector(".select");
  const selected = document.getElementById("selected");
  const caret = dropDown.querySelector(".caret");
  const list = dropDown.querySelector(".list");
  const options = dropDown.querySelectorAll(".list li");
  // when you click on select the list will be open
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    list.classList.toggle("list-open");
    caret.classList.toggle("caret-rotate");
  });
  //your selected option will show in select field
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      list.classList.remove("list-open");
      if (selected.innerHTML == highValue) {
        selected.style.color = "red";
      } else if (selected.innerHTML == mediumValue) {
        selected.style.color = "#FFD300";
      } else {
        selected.style.color = "green";
      }
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
// add and remove tasks
// variables
var taskVal = document.getElementById("add-tasks");
var dateVAl = document.getElementById("task-date");
var priorityVal = document.getElementById("selected");
var descriptionVal = document.getElementById("task-description");
var addButton = document.getElementById("add-button");
var home = document.getElementById("your-tasks");
const cardContainer = document.getElementById("card-container");
// when you click on add button
addButton.addEventListener("click", () => {
  // create element of card
  let card = document.createElement("div");
  let cardHead = document.createElement("div");
  let taskName = document.createElement("div");
  let doneNot = document.createElement("div");
  let correct = document.createElement("div");
  let wrong = document.createElement("div");
  let taskDate = document.createElement("div");
  let taskPriority = document.createElement("div");
  let taskDescription = document.createElement("div");
  // put values that selected to card
  let taskContent = taskVal.value;
  let dateContent = dateVAl.value;
  let priorityContent = priorityVal.innerHTML;
  let descriptionContent = descriptionVal.value;
  correct.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  wrong.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
  card.setAttribute("id", "card");
  cardHead.classList.add("card-head");
  taskName.setAttribute("id", "taskName");
  doneNot.classList.add("done-or-not");
  correct.setAttribute("id", "correct");
  wrong.setAttribute("id", "wrong");
  taskDate.setAttribute("id", "taskDate");
  taskPriority.setAttribute("id", "taskPriority");
  taskDescription.setAttribute("id", "taskDescription");
  //put the content in the card and put the card to home section
  home.appendChild(card);
  card.appendChild(cardHead);
  cardHead.appendChild(taskName);
  taskName.innerText = taskContent;
  cardHead.appendChild(doneNot);
  doneNot.appendChild(correct);
  doneNot.appendChild(wrong);
  card.appendChild(taskDate);
  taskDate.innerHTML = "<i class='fa-solid fa-clock'></i>" + dateContent;
  card.appendChild(taskPriority);
  taskPriority.innerHTML = priorityContent;
  card.appendChild(taskDescription);
  taskDescription.innerText = descriptionContent;
  // Store card in local storage
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(card.outerHTML);
  localStorage.setItem("cards", JSON.stringify(cards));
});
// Load cards from local storage on page load
const cards = JSON.parse(localStorage.getItem("cards")) || [];
cards.forEach((cardHTML) => {
  const card = document.createElement("div");
  card.innerHTML = cardHTML;
  cardContainer.appendChild(card);
});
// correct and wrong button effect
var wrong = document.querySelectorAll("#wrong");
var correct = document.querySelectorAll("#correct");
// for every click on correct button will do this effect
correct.forEach(function (element) {
  var index = Array.from(correct).indexOf(element);
  // get the corresponding taskName and card
  var taskName = document.querySelectorAll("#taskName")[index];
  var card = document.querySelectorAll("#card")[index];
  // add click event listener
  element.addEventListener("click", () => {
    alert("your tasks is done");
    // update style of the corresponding taskName and card
    taskName.style.textDecoration = "line-through";
    card.style.color = "gray";
  });
});
// for every click on wrong button will do this effect
wrong.forEach(function (element) {
  element.addEventListener("click", () => {
    // get the index of the corresponding card and remove it from the array
    const index = Array.from(wrong).indexOf(element);
    if (index >= 0) {
      cards.splice(index, 1);
      localStorage.setItem("cards", JSON.stringify(cards));
      alert("you will remove the task");
      var removeCard = document.getElementById("card");
      removeCard.style.display = "none";
    }
  });
});
// when client click on burger icon the side show will appear
var burgerIcon = document.getElementById("bar");
var closeIcon = document.getElementById("close-bar");
var sideBar = document.getElementById("sidebar");
burgerIcon.onclick = function () {
  sideBar.style.display = "block";
  sideBar.style.position = "absolute";
  sideBar.style.backgroundColor = "#FFF";
  sideBar.style.height = "100%";
  sideBar.style.borderRadius = "0 0 20px 0";
  sideBar.style.left = "0";
  sideBar.style.top = "0";
  burgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  closeIcon.style.position = "absolute";
  closeIcon.style.left = "240px";
  closeIcon.style.top = "15px";
};
closeIcon.onclick = function () {
  sideBar.style.display = "none";
  closeIcon.style.display = "none";
  burgerIcon.style.display = "block";
};
