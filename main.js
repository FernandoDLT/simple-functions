// EASY
// Create a function that subtracts  two numbers and alerts the difference
function subTwoAlertDiff(n1, n2) {
    let diff = n1 - n2

    alert(diff)
}
subTwoAlertDiff(9, 6)
subTwoAlertDiff(2000, 677)

// Create a function that divides three numbers and console logs the quoteient

function divThreeConsoleQuot(num1, num2, num3) {
    console.log(num1 / num2 / num3)
}
divThreeConsoleQuot(12, 4, 3)

// Create a function that multiplies three numbers and returns the product
function multiplyThreeRetProduct (n1, n2, n3) {
    return n1 * n2 * n3
}
let returnNum = multiplyThreeRetProduct(1, 5, 10)
console.log(returnNum)

// Medium
// Create a function that takes in three numbers. 
// Add the first two number and return the remainder
// of dividing the sum of the first two numbers by the third number
function sumAndRemainder(n1,n2,n3) {
    return (n1 + n2) % n3
}
console.log(sumAndRemainder(100, 5, 10))

// HARD
// Create a function that takes in 4 numbers. 
// Multiply the first 2 numbers. If the product is greater than 100,
// add the sum of the last two numbers and console log the value.
// If the product is less than 100, subtract the difference of the last two and console log the value.
// if the product is 100, multiply the first 3 numbers together and alert
// the remainder of dividing the fourth number
