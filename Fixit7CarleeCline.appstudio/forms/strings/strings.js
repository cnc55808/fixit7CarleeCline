let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")
let upperCaseString = quoteString.toUpperCase(quoteString)
console.log(`Upper case string is: ${upperCaseString}`)

let authorString = (`-Henry Ford`)
let completeString = (quoteString + authorString)
let found = completeString.includes("Henry")
 console.log(found)
if (found = true)
  console.log("Henry was in the quote string.")
else
 console.log("Henry was not in the quote string.")


//TO LOWERCASE
secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
lowerCaseString = secondQuote.toLowerCase(secondQuote)
console.log(`Lower case string is: ${lowerCaseString}`)


//ADDS 10 to user input number
userNumber = prompt("Please enter a number.")
addTen = +userNumber + 10 //use +userNumber to turn the string into a number so it doesn't just concatinate 
console.log(`The number ${userNumber}, + 10 is ${addTen}`)
