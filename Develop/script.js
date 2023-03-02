// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Generates a random password
function generatePassword() {

// setting up all variables and arrays
var passwordfinal = [];
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWX";
var uppercaseArray = uppercaseString.split("");

var lowercaseString = "abcdefghijklmnopqrstuvwx";
var lowercaseArray = lowercaseString.split("");

var numberString = "1234567890";
var numberArray = numberString.split("");

var specialString = "!@#$%^&*()?_-";
var specialArray = specialString.split("");
var characterCombine = lowercaseArray;

// creating widow popups to store information and storing in variables
var specialStore = window.confirm(
    "Do you want your password to include special characters? (Ok for yes, cancel for no)"
  );
  var sizeStore = window.prompt(
    "How long do you want your password? (Between 8 and 128)"
  );
// Adding logic so that a password length between 8 and 128 can be used
  if (sizeStore < 8 || sizeStore > 128) {
    window.alert("Oops... please choose a number between 0 and 128")
    sizeStore = window.prompt(
      "How long do you want your password? (Between 8 and 128)"
    )
  } else if (sizeStore >= 8 && sizeStore <= 128) {
    
  };

  var caseStore = window.confirm(
    "Do you want to include uppercase characters (Ok for yes, cancel for no)"
  );
  var numbersStore = window.confirm(
    "Do you want numbers in your password? (Ok for yes, cancel for no)"
  );

// concating all arrays together dependent on the inputs from user
  if (specialStore) {
  characterCombine = characterCombine.concat(specialArray);
} else if (specialStore === false){
  characterCombine = characterCombine;
};


if (caseStore) {
  characterCombine = characterCombine.concat(uppercaseArray);
} else if (caseStore === false){
  characterCombine = characterCombine;
};

if (numbersStore) {
  characterCombine = characterCombine.concat(numberArray);
} else if (numbersStore === false){
  characterCombine = characterCombine;
};

for (var i = 0; i < sizeStore; i++) {
  var selectingNumber = characterCombine[Math.floor(Math.random() * characterCombine.length)];
  passwordfinal.push(selectingNumber);
}

// Displaying finished password to html and console
var passwordDisplay = passwordfinal.join("");
console.log(passwordDisplay);

return passwordDisplay; 

  // Prompt the user for the password critera -> password length between 8 and 128
  // lowercase, uppercase, numbers, special characters
  // 2. validate the input. ->
  // 3. Generate password with criteria.
  //  Display the password to the page.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
