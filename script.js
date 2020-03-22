

// Assignment Code - geting value from box
var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", (e) {

  
});


var includesUpper = document.querySelector("#upperCheckbox");
var includesLower = document.querySelector("#lowerCheckbox");
var includesNumber = document.querySelector("#numberCheckbox");
var includesSpecial = document.querySelector("#specialCheckbox");
var includesLength = doNotTrack.querySelector("#lenthFromUser");



  //assigns variable to text area display "to display the password"
var passwordText = document.querySelector("#password");

// assgin

passwordText = writePassword (includesUpper, includesLower, includesNumber, includesSpecial, ncludesLength)

// Write password to the #password input element
function writePassword(includesUpper, includesLower, includesNumber, includesSpecial, ncludesLength) {


  //THEN I am presented with a series of prompts for password criteria






  function randomLowerCase(){

    var random = String.fromCharCode(Math.floor(Math.random()*26 +97));
    // return random;
    // alert("poop");
  
  };
  
  
  
  function randomUpperCase(){
  
    var random = String.fromCharCode(Math.floor(Math.random()*26 +65));
    // return random;
    // alert("poop");
  
    };

  function randomNumberCase(){

    var random = String.fromCharCode(Math.floor(Math.random()*10 +48));
    // return random;
    // alert("poop");
  
    };
    
  
  function randomSpecialCharCase(){
  
    var random = String.fromCharCode(Math.floor(Math.random()*10 +48));
  
    var symbols = '!@#$%^&*(){}[]=+-_?<>/,.';
    random =symbols[Math.floor(Math.random() * symbols.length)];
    // return random;
    // alert("poop");
  
    };
  
  
  
  


//   WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//AC -prompt for lenth - data validation answer between - 128


// data validation



// AC - WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// create elements with radio buttons

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Random function generators

// use browser character set and String.fromCharCode
// values 97 - 122 represent all lower case letters





// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

  //variable password= results for generatePassword - not declared
  var password = generatePassword();



  //dislplays our new password we generated
  passwordText.value = password;

}

// Add event listener to generate button
//AC - WHEN I click the button to generate a password



  




generateBtn.addEventListener("click", (e) {
  var pwLength = prompt("Enter passwork length.  (8-128)");
  alert("you crazy fool");;
  
});

