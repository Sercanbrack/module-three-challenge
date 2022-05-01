// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPassword 
function generatePassword() {

  //Prompt with the criteria
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
  


  return "Generated Password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
