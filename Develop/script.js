// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");
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



// function generatePassword() {
  var specialStore = window.confirm(
    "Do you want your password to include special characters? (Ok for yes, cancel for no)"
  );
  var sizeStore = window.prompt(
    "How long do you want your password? (Between 8 and 128)"
  );
  var caseStore = window.confirm(
    "Do you want to include uppercase characters (Ok for yes, cancel for no)"
  );
  var numbersStore = window.confirm(
    "Do you want numbers in your password? (Ok for yes, cancel for no)"
  );
  var specialYN = null; 
  var caseYN = null; 
  var numberYN = null; 





  function generate(sizeStore, specialStore, caseStore, numbersStore) {
    if (specialStore) {
      characterCombine = lowercaseArray.concat(specialArray);
    }
    // if (caseYN) {
    //   charcodes = charCodes.concat(uppercaseCharCodes);
    // }
    // if (numberYN) {
    //   charCodes = charCodes.concat(numberCharCodes);
    // }
    // console.log(uppercaseLetters);


    // for (var i = 0; i < sizeStore; i++) {
    //   var selectingNumber = charCodes[Math.floor(Math.random() * sizeStore)];
    // }
  }


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
  var selectingNumber = characterCombine[Math.floor(Math.random() * sizeStore)];
  passwordfinal.push(selectingNumber);
}

var passwordDisplay = passwordfinal.join("");
console.log(passwordDisplay);

  // Prompt the user for the password critera -> password length between 8 and 128
  // lowercase, uppercase, numbers, special characters
  // 2. validate the input. ->
  // 3. Generate password with criteria.
  //  Display the password to the page.
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("I'M HERE!!!")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
