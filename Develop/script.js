// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // gen button HTML

const length = "Password must be between 8-128 characters.";
const charLower = "Atleast 1 lowercase letter.";
const charUpper = "Atleast 1 uppercase letter.";
const charNum = "Atleast 1 number.";
const charSpecial = "Atleast 1 special character [ !@#$%^&*() ]";

// Write password to the #password input
function writePassword() { // value of writePassword listed in body below
  var password = generatePassword(); // generatePassword defined at line 24
  var passwordText = document.querySelector("#password"); // text box HTML

  passwordText.value = password; // creates value of the Text Box in HTML to become var password (which is defined on like 24) in JS
}

//Write code here



function generatePassword () {
  window.prompt("Please enter your desired password results. See criteria below:\n\n" + length +"\n" + charLower +"\n" + charUpper +"\n" + charNum +"\n"+ charSpecial);
  var passLength = "";
  if (passLength < 8 || passLength > 128) {
    prompt("Oops, Try Again! Password must be between 8-128 characters.");
  } else (passLength > 7 || passLength < 129);
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

