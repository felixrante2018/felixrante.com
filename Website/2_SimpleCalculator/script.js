let currentValue = '';

function appendValue(value) {
  currentValue += value;
  document.getElementById('result').value = currentValue;
}

function clearResult() {
  currentValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(currentValue);
    document.getElementById('result').value = result;
    currentValue = result.toString();
  } catch (error) {
    alert('Invalid expression');
    clearResult();
  }
}