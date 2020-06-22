// Assignment code here
var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var upperCaseEl = document.getElementById("uppercase");
var lowerCaseEl = document.getElementById("lowercase");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

// Objectb elements for password generation
var passwordItems = {
  lower: getRandomLowerCase(),
  upper: getRandomUpperCase(),
  numbers: getRandomNumber(),
  symbols: getRandomSymbol(),
};

// Add event listener to generate button
generateEl.addEventListener("click", function () {
  var isUpperCase = upperCaseEl.checked;
  var isLowerCase = lowerCaseEl.checked;
  var isNumber = numberEl.checked;
  var isSymbol = symbolEl.checked;
  var length = +lengthEl.value;

  passwordEl.innerText = generatePassword(isUpperCase, isLowerCase, isNumber, isSymbol, length);
});

// Function for generating the password
function generatePassword(upper, lower, number, symbol, length) {

  let generatedPassword = "";

  var optionsAmount = upper + lower + number + symbol;

  var optionsArr = [{ upper }, { lower }, { number }, { symbol }].filter(option => Object.values(option)[0]);

  if (optionsAmount === 0) {
    return " ";
  }

  for (var i = 0; i < length; i += optionsAmount) {
    optionsArr.forEach(option => {
      var passName = Object.keys(option)[0];
      console.log("passName: ", passName);

      generatedPassword += passwordItems[passName];
    });
  }

  var createdPassword = generatedPassword.slice(0, length);

  return createdPassword;
};

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
 
  var symbol = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{'];
  console.log(symbol[Math.floor(Math.random() * symbol.length)]);
  return symbol[Math.floor(Math.random() * symbol.length)];
}