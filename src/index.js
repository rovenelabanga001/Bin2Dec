const binaryForm = document.getElementById("convert-form");
const outputContainer = document.getElementById("decimal-container");

binaryForm.addEventListener("submit", (e) => {
  const binaryInput = document.getElementById("number-input");
  const errorMessage = document.getElementById("error-message");
  const inputValue = binaryInput.value;

  outputContainer.textContent = " ";

  //check if the value is exactly 8 characters
  if (inputValue.length !== 8) {
    e.preventDefault();
    errorMessage.textContent = "Input must be exactly 8 characters";
    errorMessage.style.display = "block";
    outputContainer.textContent = "";
    return;
  }
  //check if the value contains only 0 or 1
  else if (!/^[01]+$/.test(inputValue)) {
    e.preventDefault();
    errorMessage.textContent = "Input must be only 0s or 1s";
    errorMessage.style.display = "block";
    outputContainer.textContent = "";
    return;
  } else {
    errorMessage.style.display = "none";
  }

  const outputValue = binaryToDecimal(inputValue);
  outputContainer.textContent = `Decimal value: ${outputValue}`;
  e.preventDefault();
});

function binaryToDecimal(binaryString) {
  if (!/^[01]+$/.test(binaryString)) {
    throw new Error("Input must be only 0s or 1s");
  }

  return parseInt(binaryString, 2);
}
