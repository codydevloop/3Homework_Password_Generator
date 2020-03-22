
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
 
   passwordText.innerHTML = writePassword (length, upper, lower, number, special);
   //console.log (passwordText);


  // calls writepassword function and passes all the arguments


});


function writePassword(incLength, incUpper, incLower, incNumber, incSpecial) {

  var password = "";
  
  // TESTING adding booleans,  converts true ===1 false === 0
  // var typeCount= incUpper + incLower + incNumber + incSpecial;
  // console.log(typeof typeCount);
  // console.log(incUpper);


  //  **creating an array of objects.  where the element names become the
  //  (object property names) & element values become (objet property values)

    var typeArray =[{incUpper}, {incLower}, {incNumber}, {incSpecial}];

  // TESTING var key = typeArray[0];
  // key2 = key[Object.keys(key)[0]];
  // console.log(key2);

  // **creating an array that will hold only the object types the user has chosen
  // to be used with the

    var userCondOptArray = [];

  // **loop through the array and access the true/false value from the 
  // objects in the array, build a new array 'userCondOptArray' that only contains
  // elements of objects whos value is true
   
    for (var i=0; i < typeArray.length; i++){

    // **assign array element to variable
      getLogic = typeArray[i];
    // **access true/false value and assign to variable
      getBoolValue = getLogic[Object.keys(getLogic)[0]];
      
    //build 'userCondtOptAray' with true values only
      if (getBoolValue===true) {
            
        userCondOptArray.push(typeArray[i]);

      }

      else {
        
      }

    };

    // array to collect arrays
    var arrayOfArrays =[];

    //  loops over user selection and creates an array of random 
    // arrays to call
     for (var i = 0; i < userCondOptArray.length; i++){

        var tempObject = userCondOptArray[i];

        if(Object.keys(tempObject)[0]==="incUpper"){
          arrayOfArrays.push(randomUpperCase);
        }
        else if (Object.keys(tempObject)[0]==="incLower"){
          arrayOfArrays.push(randomLowerCase);
        } 
        else if (Object.keys(tempObject)[0]==="incSpecial"){
          arrayOfArrays.push(randomSpecialCharCase);
        } 
        
        else if (Object.keys(tempObject)[0]==="incNumber"){
          arrayOfArrays.push(randomNumberCase);
        };  

     }

    // var password = arrayOfArrays[3];
    // console.log(password());



     var i = 0;
     var j = 0; 

    //  while loop, to loop through the arrayOfArrys function over and over
    // until the length count has been met

    if (incLength < 8 || incLength > 128 || arrayOfArrays.length<1) {
      alert("Please make sure you check some option and that your length is between 8-128");
      return password;
    } 
    else{
    
    
      while (i <= incLength){

            if (i <= incLength){

            
            var crazy = arrayOfArrays[j];
            temp = crazy();
            password = password + temp;
            i++;
            j++;
              if (j === arrayOfArrays.length){
                j=0;
              }
              
                    
            }
              

          };

      return password;
    }

};




  function randomLowerCase(){

    var random = String.fromCharCode(Math.floor(Math.random()*26 +97));
    return random;
    
  
  };
  
  
  
  function randomUpperCase(){
  
    var random = String.fromCharCode(Math.floor(Math.random()*26 +65));
    return random;
    
  
    };

  function randomNumberCase(){

    var random = String.fromCharCode(Math.floor(Math.random()*10 +48));
    return random;
    
  
    };
    
  
  function randomSpecialCharCase(){
  
    var random = String.fromCharCode(Math.floor(Math.random()*10 +48));
  
    var symbols = '!@#$%^&*(){}[]=+-_?<>/,.';
    random =symbols[Math.floor(Math.random() * symbols.length)];
    return random;
    
  
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




