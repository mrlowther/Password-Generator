// Assignment Code
var generateBtn = document.querySelector("#generate");
//event.preventDefault();

//my global variables
var pwStr;
var incLow;
var incUp = true;
var incSpec = true;
var incNum = true;
//var tryAgain;
var numChoices;

//var minChar = 8;
//var maxChar = 128;

//create arrays for upper-case, lower-case, and special chars
var lowers = `abcdefghijklmnopqrstuvwxyz`;
var lowerCase = lowers.split(``);
var uppers = lowers.toUpperCase();
var upperCase = uppers.split(``);
var specs = `!@#$%^&*()_+-=<>?~`;
var specials = specs.split(``);
var nums = `1234567890`;
var numbers = nums.split(``);

var wantL = false;
var wantU = false;
var wantN = false;
var wantS = false;  

var count = 0;
var pwLength;
var pw = ``;

// Write password to the #password input
function writePassword() {
  
    //my code
    pwStr = prompt(`How many characters would you like your password to be?`);
    convertStoI(pwStr);
    low();
    console.log(`wantL is ${wantL}`);
    upp();
    console.log(`wantU is ${wantU}`);
    numbs();
    console.log(`wantN is ${wantN}`);
    spec();
    console.log(`wantS is ${wantS}`);
    
 
    //existing code
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   
   
   passwordText.value = password;
   //passwordText.value = pw;
   //console.log(`incLow = ${incLow}`);
   //console.log(`tryAgain is ${tryAgain}`);
 }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//my code

function generatePassword () {
  
  //var pw = ``;
  let numTypes = 0;

  //console.log(wantL);
  //console.log(wantU);
  //console.log(wantN);
  //console.log(wantS);
  if (wantL == true) {
    pw+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
    numTypes++;
  }
  if (wantU == true) {
    pw+= upperCase[Math.floor(Math.random() * upperCase.length)];
    numTypes++;
  }
  if (wantN == true) {
    pw+= numbers[Math.floor(Math.random() * numbers.length)];
    numTypes++;
  }
  if (wantS == true) {
    pw+= specials[Math.floor(Math.random() * specials.length)];
    numTypes++;
  }
  pwLength = pwLength - numTypes;


  for (let i=0; i<pwLength; i=count){
    var pick = Math.floor(Math.random() * 4);
    //console.log(`pick is ${pick}`);
    //console.log(pwLength);
  
    if(pick == 0 && wantL == true){
      pickL();
      //console.log(pw);
    }
    else if (pick == 1 && wantU == true){
      pickU();
      //console.log(pw);
    }
    else if(pick == 2  && wantS == true){
      pickS();
      //console.log(pw);
    }
    else if (pick == 3 && wantN == true) {
      pickN();
      //console.log(pw);
    }
  }
  return pw;
}

function convertStoI () {
  pwLength = parseInt(pwStr);
  //console.log(pwLength);
  //console.log(typeof(pwLength));
}
function pickL() {
  pw+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
  count++;
}
function pickU() {
  pw+= upperCase[Math.floor(Math.random() * upperCase.length)];
  count++;
}
function pickN() {
  pw+= numbers[Math.floor(Math.random() * numbers.length)];
  count++;
}
function pickS() {
  pw+= upperCase[Math.floor(Math.random() * specials.length)];
  count++;
}
function low() {
  YorN = prompt(`Would you like to include lowercase letters?`);
  if (YorN === `Y` || YorN === `y`) {
    wantL = true;
  }
}
function upp() {
  YorN = prompt(`Would you like to include uppercase letters?`);
  if (YorN === `Y` || YorN === `y`) {
    wantU = true;
  }
}
function numbs() {
  YorN = prompt(`Would you like to include numbers?`);
  if (YorN === `Y` || YorN === `y`) {
    wantN = true;
  }
}
function spec() {
  YorN = prompt(`Would you like to include special characters?`);
  if (YorN === `Y` || YorN === `y`) {
    wantS = true;
  }
}

// function low() {
//   let tryAgain;
//   YorN = prompt(`Would you like to include lowercase letters?`);
//   if (YorN === `Y` || YorN === `y` || YorN === `N` || YorN === `n`) {
//     tryAgain = false;
//   } 
//   else if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`){
//     tryAgain = true;
//   }
//   else if (YorN === null) {
//     tryAgain = false;
//   }

//   if (YorN === `Y` || YorN === `y`) {
//     wantL = true;
//   }
// }

// function upp() {
//   let tryAgain;
//   YorN = prompt(`Would you like to include uppercase letters?`);
//   if (YorN === `Y` || YorN === `y` || YorN === `N` || YorN === `n`) {
//     tryAgain = false;
//   } 
//   else if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`){
//     tryAgain = true;
//   }
//   else if (YorN === null) {
//     tryAgain = false;
//   }

//   if (YorN === `Y` || YorN === `y`) {
//     wantU = true;
//   }
// }

// function numbs() {
//   let tryAgain;
//   YorN = prompt(`Would you like to include numbers?`);
//   if (YorN === `Y` || YorN === `y` || YorN === `N` || YorN === `n`) {
//     tryAgain = false;
//   } 
//   else if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`){
//     tryAgain = true;
//   }
//   else if (YorN === null) {
//     tryAgain = false;
//   }

//   if (YorN === `Y` || YorN === `y`) {
//     wantN = true;
//   }
// }

// function spec() {
//   //let tryAgain;
//   YorN = prompt(`Would you like to include special characters?`);
//   if (YorN === `Y` || YorN === `y` || YorN === `N` || YorN === `n`) {
//     tryAgain = false;
//   } 
//   else if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`){
//     tryAgain = true;
//   }
//   else if (YorN === null) {
//     tryAgain = false;
//   }

//   if (YorN === `Y` || YorN === `y`) {
//     wantS = true;
//   }
// }

  // while (tryAgain /*|| tryAgain !== null*/) {
  //   alert(`Please enter "Y" for yes or "N" for no.`);
  //   console.log(`tryAgain is ${tryAgain}`);
  //   low();
  // }
  // if (tryAgain == false) {
  //   return;
  // }


// function upp() {
//   YorN = prompt(`Would you like to include uppercase letters?`);
//   if (YorN === `Y` || YorN === `y` || YorN === `N` || YorN === `n`) {
//     tryAgain = false;
//   } 
//   else if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`){
//     tryAgain = true;
//   }
//   else if (YorN === null) {
//     tryAgain = null;
// }

//asks user to input Y or N again if the user does not enter Y, y, N, or n
// function verifyYesNo() {
//   while (tryAgain || tryAgain !== null) {
//     alert(`Please enter "Y" for yes or "N" for no.`);
//     console.log(`tryAgain is ${tryAgain}`);
//     low();
//   }
//   if (tryAgain == false) {
//     return;
//   }
// }

// function low(YorN) {
//   if (YorN !== `Y` || YorN !== `y` || YorN !== `N` || YorN !== `n`) {
//     alert(`Please enter a Y for yes or a N for no.`);
//   }
//   else if (YorN === `N` || `n`) {
//     incLow = false;
//   }
  
// }

//sets  incLow to false if user does not want lowercase numbers
// function low(YorN) {
//   while (YorN !== `Y` || YorNo !== `y` || YorN !== `N` || YorN !== `n`) {
//     alert(`Please enter Y for yes or N for no.`);
//     if (YorN === `N` || YorN === `n`) {
//       incLow = false;
//     }
//   }
// }

//asks user to input correct data for "Yes or No"
// function isYorN (YorN) {
//   while (YorN !== `Y` || `y` || `N` || `n`) {
//     alert(`Please enter Y for yes or N for no.`);
//   }
// }

//sets  incLow to false if user does not want lowercase numbers
// function low() {
//   YorN = prompt(`Would you like to include lowercase letters?`);
//   if (YorN === `Y` || YorN === `y`) {
//     incLow = true;
//   } 
//   else if (YorN === `N` || YorN === `n`) {
//     incLow = false;
//   }
//   else {
//     alert(`Please enter "Y" for yes or "N" for no.`);
//   }
//}
// console.log(`incLow = ${incLow}`);

//create an array of acceptable values
// var acceptedNums = [];
// for (let i=minChar-1; i<maxChar; i++) {
//   acceptedNums[i] = i;
// }

//tryAgain = null;
    //verifyYesNo();
    // upp();
    // verifyYesNo();

    // incLow = prompt(`Would you like to include lowercase letters?`);
    // low(incLow);
    // incUp = prompt(`Would you like to include uppercase letters?`);
    // incNum = prompt(`Would you like to include numbers?`);
    // incSpec = prompt(`Would you like to include special characters?`);