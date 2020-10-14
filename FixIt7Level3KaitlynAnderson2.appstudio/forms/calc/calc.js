function Calculate(num1,num2) {
return num1 + num2
}

let number1 = Number(prompt("Please enter your first number"))
let number2 = Number(prompt("Please enter your second number"))

let summedNumbers = Calculate(number1, number2)
alert(`The sum of ${number1} and ${number2} is ${summedNumbers}`)