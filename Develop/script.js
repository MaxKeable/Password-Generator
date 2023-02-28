// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var specialStore = window.prompt(
    "Do you want your password to include special characters?",
    "Yes"
  );
  var sizeStore = window.prompt(
    "How long do you want your password? (Min 8 characters Max 128)",
    "Example: 8"
  );
  var caseStore = window.prompt(
    "Do you want upper and lowercase characters",
    "Yes/No"
  );
  var numbersStore = window.prompt(
    "Do you want numbers in your password?",
    "Yes/No"
  );

  if (
    specialStore === "Yes" ||
    specialStore === "yes" ||
    specialStore === "YES"
  ) {
    var specialYN = true;
  } else if (
    specialStore === "no" ||
    specialStore === "No" ||
    specialStore === "NO" ||
    specialStore == null
  ) {
    special = false;
  }

  if (caseStore === "Yes" || caseStore === "yes" || caseStore === "YES") {
    var caseYN = true;
  } else if (
    caseStore === "no" ||
    caseStore === "No" ||
    caseStore === "NO" ||
    caseStore == null
  ) {
    caseYN = false;
  }

  if (
    numbersStore === "Yes" ||
    numbersStore === "yes" ||
    numbersStore === "YES"
  ) {
    var numberYN = true;
  } else if (
    numbersStore === "no" ||
    numbersStore === "No" ||
    numbersStore === "NO" ||
    numbersStore == null
  ) {
    numberYN = false;
  }

  var uppercaseCharCodes = arrayLowToHigh(65, 90);
  var lowercaseCharCodes = arrayLowToHigh(97, 122);
  var numberCharCodes = arrayLowToHigh(48, 57);
  var specialCharCodes = arrayLowToHigh(33, 47)
    .concat(arrayLowToHigh(58, 64))
    .concat(arrayLowToHigh(91, 96))
    .concat(arrayLowToHigh(123, 126));

  function generate(sizeStore, specialStore, caseStore, numbersStore) {
    var charCodes = lowercaseCharCodes;
    if (specialYN) {
      charCodes = charcodes.concat(specialCharCodes);
    }
    if (caseYN) {
      charcodes = charcodes.concat(uppercaseCharCodes);
    }
    if (numberYN) {
      charCodes = charcodes.concat(numberCharCodes);
    }

    var passwordfinal = [];
    for (var i = 0; i < sizeStore; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * sizeStore)];
      passwordfinal.push(string.fromCharCode(characterCode));
    }
  }

  function arrayLowToHigh(low, high) {
    var array = [];
    for (var i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }


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
