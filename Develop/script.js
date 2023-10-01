// ACTIVATES 'GENERATE PASSWORD' BUTTON //

var generateBtn = document.querySelector("#generate"); // HTML gen button
generateBtn.addEventListener("click", writePassword);

// VARIABLES THAT WILL BE REFERENCED THROUGHOUT THE FUNCTIONS //

let passChoice = [];
let passLength = (8 > 128);
const charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const charNum = ['0','1','2','3','4','5','6','7','8','9'];
const charSpecial = ['!','@','#','$','%','^','&','*','(',')'];

// GENERATES PROMPTS REGARDING PASSWORD CRITERIA //

function promptAnswers() {
  passChoice = [];

  passLength = parseInt(prompt("Please select desired length of password. Password must be between 8-128 characters.")); // parseInt takes a string and returns an integer -- in any case the user spells out a number (ex.nine), this wil be considered NaN. the if statement below ensures the system will not proceed with any NaN's.
  console.log(passLength); 
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Oops! Password must be between 8-128 characters.");
    return false; 
  }

  if (confirm("Would you like to include lowercase letters? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charLower);
    console.log(true || false); // will only print out 'true' value to console
  }
  
 if (confirm("Would you like to include uppercase letters? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charUpper);
    console.log(true || false); // will only print out 'true' value to console
  }

  if (confirm("Would you like to include numbers? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charNum);
    console.log(true || false); // will only print out 'true' value to console
  }

 if (confirm("Would you like to include special characters [  !@#$%^&*()  ] ? \n Select OK for YES\n Select CANCEL for NO")) {
    passChoice = passChoice.concat(charSpecial);
    console.log(true || false); // will only print out 'true' value to console
  }
  return true; // only 'true' values will be considered for the generated password
}

// GENERATES THE RANDOMNESS OF THE PASSWORD //

function generatePassword() {
  var password = "";
  for (let i = 0; i < passLength; i++) {
    let random = Math.floor(Math.random() * passChoice.length);
    password = password + passChoice[random];
  }
  return password;
}

// GENERATES THE PASSWORD INTO THE TEXT BOX //

function writePassword() {
  var promptResults = promptAnswers(); 
  var passwordText = document.querySelector("#password"); // HTML textbox

  if(promptResults) {
    var genPassword = generatePassword();
    passwordText.value = genPassword; // enters the value of password (line 57) into HTML text box
  } else { // used when incorrect value is entered into passLength prompt (line 22)
    passwordText.value = "Please try again :)"; // message is displayed in the textbox to encourage the user to click 'Generate Password' again
  }
}