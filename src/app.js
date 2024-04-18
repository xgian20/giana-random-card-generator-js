/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function numberSelector() {
    const numberArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indexChooser = Math.floor(Math.random() * numberArray.length);
    return numberArray[indexChooser];
  }

  function suitSelector() {
    const suitArray = ["♦", "♥", "♣", "♠"];
    const suitChooser = Math.floor(Math.random() * suitArray.length);
    return suitArray[suitChooser];
  }

  function suitColor(suit) {
    if (suit === "♥" || suit === "♦") {
      return "red";
    } else {
      return "black";
    }
  }

  function resizeCard() {
    let height = prompt("Enter the height of the card in pixels:");
    let width = prompt("Enter the width of the card in pixels:");
    const card = document.querySelector(".playing-card");
    if (height && width) {
      card.style.height = `${height}px`;
      card.style.width = `${width}px`;
    } else {
      alert("Both height and width must be entered!");
    }
  }

  let randomValues = numberSelector();
  let randomSuits = suitSelector();
  let color = suitColor(randomSuits);

  const topCornerHTML = document.querySelector(".topcorner");
  topCornerHTML.innerHTML = randomSuits;
  topCornerHTML.style.color = color;

  const bottomCornerHTML = document.querySelector(".bottomcorner");
  bottomCornerHTML.innerHTML = randomSuits;
  bottomCornerHTML.style.color = color;

  const cardCenterHTML = document.querySelector(".cardnumber");
  cardCenterHTML.innerHTML = randomValues;

  const button = document.querySelector(".buttonMessage");
  button.addEventListener("click", function() {
    window.location.reload();
  });

  const resizeButton = document.createElement("button");
  resizeButton.textContent = "Resize Card";
  resizeButton.addEventListener("click", resizeCard);
  document.body.appendChild(resizeButton);

  setTimeout(function() {
    window.location.reload();
  }, 10000);
};
