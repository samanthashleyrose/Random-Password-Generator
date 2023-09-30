// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // gen button HTML

const charLower = "abcdefghijklmnopqrstuvwxyz";
const charUpper = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const charNum = "0123456789";
const charSpecial = "!@#$%^&*()";

// Write password to the #password input
function writePassword() { // value of writePassword listed in body below
  var password = generatePassword(); // generatePassword defined at line 22
  var passwordText = document.querySelector("#password"); // text box HTML

  passwordText.value = password; // creates value of the Text Box in HTML to become var password (which is defined on line 22) in JS
}

//Write code here

function generatePassword () {
  var passChoice = "";

  var passLength = prompt ("Please select desired length of password. Password must be between 8-128 characters.");
  if (passLength < 8 || passLength > 128) {
    prompt("Oops, try again! Password must be between 8-128 characters.");
  } else (passLength > 7 || passLength < 129)
    console.log(passLength)

  var passLower = confirm("Would you like to include lowercase letters? \n Select OK for YES\n Select CANCEL for NO")
  if (passLower === true) {
    passChoice += charLower;
    console.log(passLower);
  }
  

  var passUpper = confirm("Would you like to include uppercase letters? \n Select OK for YES\n Select CANCEL for NO")
  if (passUpper === true) {
    passChoice += charUpper;
    console.log(passUpper);
  }

  var passNum = confirm("Would you like to include numbers? \n Select OK for YES\n Select CANCEL for NO")
  if (passNum === true) {
    passChoice += charNum;
    console.log(passNum);
  }

  var passSpecial = confirm("Would you like to include special characters [ !@#$%^&*() ] ? \n Select OK for YES\n Select CANCEL for NO")
  if (passSpecial === true) {
    passChoice += charSpecial;
  } else (passSpecial === false)
    passChoice += charSpecial;
    console.log(passSpecial);
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

