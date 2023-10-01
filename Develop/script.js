// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // gen button HTML

let passChoice = [];
let passLength = (8 > 128);
const charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const charNum = ['0','1','2','3','4','5','6','7','8','9'];
const charSpecial = ['!','@','#','$','%','^','&','*','(',')'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var promptResults = promptAnswers(); // returns true or false
  var passwordText = document.querySelector("#password"); // text box HTML

  if(promptResults) {
    var genPassword = generatePassword();
    passwordText.value = genPassword; // creates value of the Text Box in HTML to become var password (which is defined on line 33)
  } else {
    passwordText.value = ""; 
  }
}

function generatePassword() {
  var password = "";
  for (let i = 0; i < passLength; i++) {
    let random = Math.floor(Math.random() * passChoice.length);
    password = password + passChoice[random];
  }
  return password;
}

function promptAnswers() {
  passChoice = [];

  passLength = parseInt(prompt("Please select desired length of password. Password must be between 8-128 characters.")); // NaN = Not A Number, parseInt takes a string and returns a integer
  console.log(passLength);

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Oops! Password must be between 8-128 characters.");
    return false; 
  }

  if (confirm("Would you like to include lowercase letters? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charLower);
    console.log(true || false);
  }
  
 if (confirm("Would you like to include uppercase letters? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charUpper);
    console.log(true || false);
  }

  if (confirm("Would you like to include numbers? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charNum);
    console.log(true || false);
  }

 if (confirm("Would you like to include special characters [  !@#$%^&*()  ] ? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charSpecial);
    console.log(true || false);
  }
  return true;
}
