let displayVal = document.querySelector(".display");
result = displayVal.textContent;

function operate(val1, val2, operand) {
  let firstValue = Number(val1);
  let secondValue = Number(val2);

  if (operand === "*") {
    return firstValue * secondValue;
  }
  if (operand === "/") {
    return firstValue / secondValue;
  }
  if (operand === "+") {
    return firstValue + secondValue;
  }
  if (operand === "-") {
    return firstValue - secondValue;
  }
}
//alert(operate(3,9,"+"))

function updateDisplay(number) {
  if (displayVal.textContent === "0") {
    displayVal.textContent = "";
  }
  if((number !== ".") || (!displayVal.textContent.includes("."))){
    displayVal.append(number);
  }
}
