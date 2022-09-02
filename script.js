let counterElement = document.getElementById("counter");
const minusButton = document.getElementById("minusbtn");
const plusButton = document.getElementById("plusbtn");
let counter = 0;

plusButton.addEventListener("click", function () {
  counter++;
  counterElement.innerText = counter;
  counterElement.style.animation = "plusanimation 0.5s";
});
minusButton.addEventListener("click", function () {
  counter--;
  counterElement.innerText = counter;
  counterElement.style.animation = "minusanimation 0.5s";
});

// repeat animation on click
