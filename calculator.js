
let firstNum = parseInt( prompt('Enter first number'))
let opSign = prompt('Enter a sign, (+,-,*,/)')
let secondNum = parseInt(prompt('Enter second number'))
let result= 0;

if (opSign === '+') {
    alert (result = firstNum + secondNum) 

} else if (opSign === '-') {
    alert (result = firstNum - secondNum) 

} else if (opSign === '*') {
    alert (result = firstNum * secondNum) 
    
} else if (opSign === '/') {
    alert (result = firstNum / secondNum) 
    
} else {
    alert('invalid sign, reload and try again')

}

