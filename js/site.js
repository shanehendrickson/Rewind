// Get string from the form on the page
// - controller function -
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);

  displayString(revString);
}

// Reverse the string
// - logic function -
function reverseString(userString) {
  let revString = [];

  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];    
  }

  return revString;

}

// Display the reversed string
// - view function -
function displayString(revString) {
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`

  document.getElementById("alert").classList.remove("invisible");
}
