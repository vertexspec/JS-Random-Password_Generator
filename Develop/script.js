// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character & Value Arrays
var numericalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","@","$", "?","%", "&", ",", "*", "+", "-", ".", "/", "<", ">","^","~",",",";",":",];
var alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declarations
var confirmLength = "";
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmUpperCaseLetters;
var confirmLowerCaseLetters;

// Prompt for Number of Characters Wanted in Password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password?"));

  // Loop if answer is outside the parameters
  while(confirmLength <= 7 || confirmLength >=129) {
    alert("Password length must be between 8-128 Please Re-enter Password Length Request")
    var confirmLength = (prompt("How many characters would you like in your password?"));
  }

    // Confirming with User how many characters that the Password will have
    alert(`Your Password will contain ${confirmLength} characters`);
    
  // 
  var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacters = confirm("Click OK to confirm if you would like to include numerical characters");
  var confirmLowerCaseLetters = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCaseLetters = confirm("Click OK to confirm if you would like to include uppercase characters");

    // Loop if answer is outside the parameters of not meeting one selection criteria
    while(confirmUpperCaseLetters === false && confirmLowerCaseLetters === false && confirmSpecialCharacters === false && confirmNumericCharacters === false) {
      alert("You must choose at least one parameter");
      var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacters = confirm("Click OK to confirm if you would like to include numerical characters");
      var confirmLowerCaseLetters = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCaseLetters = confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    // Assigning an action to parameters if selected or not and to be merged with passwordCharacters variable
    var passwordCharacters = []
      
    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }

    if (confirmNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(numericalValues)
    }
      
    if (confirmLowerCaseLetters) {
      passwordCharacters = passwordCharacters.concat(alphabetLowerCase)
    }

    if (confirmUpperCaseLetters) {
      passwordCharacters = passwordCharacters.concat(alphabetUpperCase)
    }

      console.log(passwordCharacters)

      // Empty String to be fulfilled based on criteria selection
      var passwordGenerated = ""
      
      for (var i = 0; i < confirmLength; i++) {
        passwordGenerated = passwordGenerated + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(passwordGenerated)
      }
      return passwordGenerated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


