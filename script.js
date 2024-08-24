function userInput() {
    let inputOne = document.getElementById('num1').value;
    let inputTwo = document.getElementById('num2').value;
    let chooseOperation = document.getElementById('operation').value;
    let numberInputOne = parseFloat(inputOne);
    let numberInputTwo = parseFloat(inputTwo);

    if (isNaN(numberInputOne) || isNaN(numberInputTwo)) {
        document.getElementById('result').innerHTML = "Invalid input. Please enter a number";
        return;
    }

    // Pass inputs to another function that will perform the operation
    calculate(numberInputOne, numberInputTwo, chooseOperation);
}

function calculate(num1, num2, operation) {
    let result;

    //Check the operation and performs the action
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
         case '*':
            result = num1 * num2;
            break;
        case '/':
            //Check if second number is 0
            if (num2 === 0) {
                document.getElementById('result').innerHTML = "Division by zero is not allowed";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerHTML = `Invalid operation selected! Please use one of the listed: "+", "-", "*". "/"`;
            return;
    }

    //Output the result
    document.getElementById('result').innerHTML = `The result of ${num1} ${operation} ${num2} is: ${result}`;
    
    // Animate the rocket after calculation
    animateRocket();
}

// This function will be called when the Calculate button is clicked
function handleCalculation() {
    userInput();
}

function animateRocket() {
    const rocket = document.getElementById('rocket');
    rocket.style.display = 'block';
    rocket.style.opacity = '1';
    rocket.style.animation = 'fly 3s ease-in-out';
    
    setTimeout(() => {
        rocket.style.opacity = '0';
        rocket.style.animation = 'none';
        setTimeout(() => {
            rocket.style.display = 'none';
        }, 1000);
    }, 3000);
}