//to display project number from one up to 100
const targetNumber = 100; // The target number you want to count up to
  const counterElement = document.getElementById("counter");

  function countUp() {
    let currentNumber = parseInt(counterElement.textContent);
    if (currentNumber < targetNumber) {
      currentNumber++;
      counterElement.textContent = currentNumber;
      setTimeout(countUp, 500);
    }
  }

  countUp();