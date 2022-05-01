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
var specialCharacters = ["~",'`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?',"/"]
var output = []


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
    for (var i = 0; i < userLength; i++) {
    
    var output = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
    
    }
    console.log(output)
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
