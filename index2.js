
// Get the display element
const display = document.querySelector('.display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    processInput(value);
  });
});

// Function to process the input
function processInput(value) {
  switch (value) {
    case 'C':
      clearDisplay();
      break;
    case 'DEL':
      deleteCharacter();
      break;
    case '=':
      evaluateExpression();
      break;
    default:
      appendToDisplay(value);
      break;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character from the display
function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}

// Function to append the value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to evaluate the expression and display the result
// Function to evaluate the expression and display the result
function evaluateExpression() {
    try {
      let expression = display.value;
      
      // Replace '%' with '/100*' for correct percentage calculation
      expression = expression.replace('%', '/100');
  
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
