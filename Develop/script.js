// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // gen button HTML

let charLower = "abcdefghijklmnopqrstuvwxyz";
let charUpper = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
let charNum = "0123456789";
let charSpecial = "!@#$%^&*()";

// Write password to the #password input
function writePassword() { // value of writePassword listed in body below
  var password = generatePassword(); // generatePassword defined at line 24
  var passwordText = document.querySelector("#password"); // text box HTML

  passwordText.value = password; // creates value of the Text Box in HTML to become var password (which is defined on like 24) in JS
}

//Write code here

function generatePassword () {
  var passLength = prompt("Please select desired length of password. Password must be between 8-128 characters.");

  if (passLength < 8 || passLength > 128) {
    prompt("Oops, Try Again! Password must be between 8-128 characters.");
  } else (passLength > 7 || passLength < 129) 
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

