// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPassword 
var userData = 0;
var userLength
var lowerCase
var upperCase
var numberCharacters
var specialCharacters
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseLetters = ["A","B","C","D","E",'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numericCharacters = ["0",'1','2','3','4','5','6','7','8',"9"]
var symbolCharacters = ["~",'`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?',"/"]
var lowerUpper = lowercaseLetters.concat(uppercaseLetters);
var lowerNumeric = lowercaseLetters.concat(numericCharacters);
var lowerSymbol = lowercaseLetters.concat(symbolCharacters);
var upperNumeric = uppercaseLetters.concat(numericCharacters);
var upperSymbol = uppercaseLetters.concat(symbolCharacters);
var numericSymbol = numericCharacters.concat(symbolCharacters);
var lowupNumeric = lowerUpper.concat(numericCharacters);
var lowupSymbol = lowerUpper.concat(symbolCharacters);
var upnumSymbol = upperNumeric.concat(symbolCharacters);
var combinedArray = lowupSymbol.concat(numericCharacters);
 

function generatePassword() {
  //Prompt with the criteria & gather their data inputs
  var userLength = prompt("Welcome to the password generator! Please input your desired length of password. NOTE: MUST CONTAIN BETWEEN 8-128 CHARACTERS.")
  if (userLength > 128) {
    var userLength = alert("ERROR: Password cannot contain more than 128 characters. Please try again.")
    generatePassword()
  } else if (userLength < 8) {
    var userLength = alert("ERROR: Password cannot contain less than 8 characters. Please try again.")
    generatePassword()
  } else {
    console.log(userLength)
  }
  var lowerCase = confirm("Would you like your password to contain lowercase letters?")
  
  var upperCase = confirm("Would you like your password to contain uppercase letters?")

  var numberCharacters = confirm("Would you like your password to contain numbers?")
 
  var specialCharacters = confirm("Would you like your password to contain special characters?")
  
  
  if (lowerCase == false && upperCase == false && numberCharacters == false && specialCharacters == false) {
    alert("ERROR: No password characters selected. Please try again.")
    generatePassword() 
  } else if (lowerCase == true && upperCase == false && numberCharacters == false && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
        console.log(output)
  }
  } else if (lowerCase == false && upperCase == true && numberCharacters == false && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
        console.log(output)
      }
  
  } else if (lowerCase == false && upperCase == false && numberCharacters == true && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
        console.log(output)
      }
  } else if (lowerCase == false && upperCase == false && numberCharacters == false && specialCharacters == true) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)]
        console.log(output)
      }
  } else if (lowerCase == true && upperCase == true && numberCharacters == false && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowerUpper[Math.floor(Math.random() * lowerUpper.length)]
        console.log(output)
      }
  } else if (lowerCase == true && upperCase == false && numberCharacters == true && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowerNumeric[Math.floor(Math.random() * lowerNumeric.length)]
        console.log(output)
      }
  } else if (lowerCase == true && upperCase == false && numberCharacters == false && specialCharacters == true) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowerSymbol[Math.floor(Math.random() * lowerSymbol.length)]
        console.log(output)
      }
  } else if (lowerCase == true && upperCase == true && numberCharacters == true && specialCharacters == false) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowupNumeric[Math.floor(Math.random() * lowupNumeric.length)]
        console.log(output)
      }  
  } else if (lowerCase == true && upperCase == true && numberCharacters == false && specialCharacters == true) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += lowupSymbol[Math.floor(Math.random() * lowupSymbol.length)]
        console.log(output)
      }
  } else if (lowerCase == false && upperCase == true && numberCharacters == true && specialCharacters == true) {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += upnumSymbol[Math.floor(Math.random() * upnumSymbol.length)]
        console.log(output)
      }
  } else {
      var output = ""
      for (var i = 0; i < userLength; i++) {
        output += combinedArray[Math.floor(Math.random() * combinedArray.length)]
        console.log(output)
      }
  }
  generatedPassword = output
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
