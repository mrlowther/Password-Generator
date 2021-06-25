// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //my code
    // pwStr = prompt(`How many characters would you like your password to be?`);
    // convertStoI(pwStr);
 
    //existing code
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   
   passwordText.value = password;
   //passwordText.value = pw;
 }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);