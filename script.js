
// setting variables for user input options
var generateBtn = document.querySelector("#generate");

var includesLength = document.querySelector("#lengthFromUser");
var includesUpper = document.querySelector("#upperCheckbox");
var includesLower = document.querySelector("#lowerCheckbox");
var includesNumber = document.querySelector("#numberCheckbox");
var includesSpecial = document.querySelector("#specialCheckbox");


//console.log(+includesLength.value);
//console.log(typeof includesLength.value);



generateBtn.addEventListener("click", function(event) {

  // setting variable to get current state of user selected options

  var length = +includesLength.value;
  var upper = includesUpper.checked;
  var lower = includesLower.checked;
  var number = includesNumber.checked;
  var special = includesSpecial.checked;

  // console.log(length,upper,lower, number, special);

   //assigns variable to text area display "to display the password"

   var passwordText = document.querySelector("#password");
 
   passwordText = writePassword (length, upper, lower, number, special);


  // calls writepassword function and passes all the arguments


});


function writePassword(incLength, incUpper, incLower, incNumber, incSpecial) {

  var password = "";
  
  //adding booleans,  converts true ===1 false === 0
  // 

  var typeCount= incUpper + incLower + incNumber + incSpecial;
  // console.log(typeof typeCount);
  // console.log(incUpper);

  //creating an array of objects where argument names = keys
  // and argument values = values   incLenth: true

  var typeArray =[{incUpper}, {incLower}, {incNumber}, {incSpecial}];

  // access the true false value in the objects
  // var key = typeArray[0];
  // key2 = key[Object.keys(key)[0]];

  // console.log(key2);


   
    for (var i=0; i < typeArray.length; i++){


    // assign array element to variable
    getLogic = typeArray[i];

    // access the value of the first objects property in order to test if it should be included

    getBoolValue = getLogic[Object.keys(getLogic)[0]];
    console.log(getBoolValue);



    };
};




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
 







// Add event listener to generate button
//AC - WHEN I click the button to generate a password




