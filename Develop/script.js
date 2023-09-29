// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // gen button HTML

let lengthMin = 8 ;
let lengthMax = 128 ;
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charSpecial = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // text box HTML

  passwordText.value = password;
}

//Write code here


function generatePassword () {

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

