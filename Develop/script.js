// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");
var passwordfinal = [];


// function generatePassword() {
  var specialStore = window.confirm(
    "Do you want your password to include special characters? (Ok for yes, cancel for no)"
  );
  var sizeStore = window.prompt(
    "How long do you want your password? (Between 8 and 128)"
  );
  var caseStore = window.confirm(
    "Do you want upper and lowercase characters (Ok for yes, cancel for no)"
  );
  var numbersStore = window.confirm(
    "Do you want numbers in your password? (Ok for yes, cancel for no)"
  );
  var specialYN = null; 
  var caseYN = null; 
  var numberYN = null; 
  
 
  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWX";
  var uppercaseArray = uppercaseString.split("");

  var lowercaseString = "abcdefghijklmnopqrstuvwx";
  var lowercaseArray = lowercaseString.split("");

  var numberString = "1234567890";
  var numberArray = numberString.split("");

  var specialString = "!@#$%^&*()?_-";
  var specialArray = specialString.split("");




  function generate(sizeStore, specialStore, caseStore, numbersStore) {
    var charCodes = lowercaseCharCodes;
    if (specialYN) {
      charCodes = charCodes.concat(specialCharCodes);
    }
    if (caseYN) {
      charcodes = charCodes.concat(uppercaseCharCodes);
    }
    if (numberYN) {
      charCodes = charCodes.concat(numberCharCodes);
    }
    console.log(uppercaseLetters);

    for (var i = 0; i < sizeStore; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * sizeStore)];
      passwordfinal.push(string.fromCharCode(characterCode));
      passwordText.textContent = passwordfinal;
      console.log("THIS IS THE PASSWORD SO FAR",passwordfinal)
    }
  }


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
