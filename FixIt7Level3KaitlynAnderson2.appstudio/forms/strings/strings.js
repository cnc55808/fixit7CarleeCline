let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")
let upperCaseString = quoteString.toUpperCase(quoteString)
  alert(`Upper case string is: ${upperCaseString}`)

let authorString = (`-Henry Ford`)
let completeString = (quoteString + authorString)
let found = completeString.includes("Henry")
if (found = true)
  alert("Henry was in the quote string.")
else
 alert("Henry was not in the quote string.")
 
 
 
secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
lowerCaseString = secondQuote.toLowerCase(secondQuote)
  alert(`Lower case string is: ${lowerCaseString}`)



userNumber = prompt("Please enter a number.")
addTen = +userNumber + 10 
  alert(`The number ${userNumber}, + 10 is ${addTen}`)