// Assignment code here
var passwordEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var upperCaseEl = document.getElementById("uppercase");
var lowerCaseEl = document.getElementById("lowercase");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

var passwordItems = {
  lowerCase: getRandomLowerCase,
  upperCase: getRandomUpperCase,
  symbols: getRandomSymbol,
  numbers: getRandomNumber,
}

generateEl.addEventListener("click", function () {
  var length = +lengthEl.value;
  var isUpperCase = upperCaseEl.checked;
  var isLowerCase = lowerCaseEl.checked;
  var isNumber = numberEl.checked;
  var isSymbol = symbolEl.checked;

  passwordEl.innerText = writePassword(isUpperCase, isLowerCase, isNumber, isSymbol, length);
});





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
  var symbol = "!@#$%^&*()_-+={}[]:;,.<>/?"
  return symbol[Math.floor(Math.random() * symbol.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);