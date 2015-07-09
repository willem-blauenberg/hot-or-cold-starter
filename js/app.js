
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});


/*
//NEW GAME

1- computerRandom 1-100
2- input userNumber id=userGuess button id=guessButton
  2.1-input userName guessArray
3- check computerRandom vs userNumber
  3.1- check computerRandom vs userNumber proximity

*/
//////// DECLARE GLOBAL VARIABLES

var userNumGuess;
var guessArray = [];
var numberOfGuesses;
var computerNumber;
var difference;
//////// COMPUTER GENERATE RANDOM NUMBER

function computerRandom() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
}
computerRandom();

//////// GETTING INPUT + CHECK BUTTON IF isNaN + ADD VALUE TO guessArray
    
function guessButtonOnClick(){
  userNumGuess = document.getElementById('userGuess').value;
  userNumGuess = parseInt(userNumGuess);
  userNumGuess = parseFloat(userNumGuess);
  if (isNaN(userNumGuess) ) { 
    alert('Please, only numbers from 1 to 100'); 
    userNumGuess = 0;
  }
  console.log("The user guessed last: " + userNumGuess);
  /////// TRYING TO SEPARATE NULL GUESSES FROM THE CORRECTONES
  //Object.keys(guessArray).slice('0');
  //delete guessArray[0];
  guessArray.push(userNumGuess);
  console.log("The user array: " + guessArray);
  numberOfGuesses = Object.keys(guessArray).length;
  console.log("Number of guesses " + numberOfGuesses)

  // FUNCTIONS TO CHECK VALUES
  function checkValues(){

    // FUNCTIONS WHICH VALUE IS BIGGER
    function userBigger(){      
      difference =  Math.abs(userNumGuess - computerNumber);      
    }
    function compBigger(){
      difference = Math.abs(computerNumber - userNumGuess)
    }
    // CONDITIONALS COMPARISON VALUES
    if (userNumGuess === computerNumber) {
      alert("EUREKA!")
      //STOP GAME --> input and button stop working + change LABEL
    }
    if (userNumGuess > computerNumber) { userBigger();}
    if (computerNumber > userNumGuess) { compBigger();}
    console.log("The difference bewteen them is: " + difference)
    if (difference < 10) {console.log('less than 10 and less than 20');}
      else if (difference >= 10 && difference < 20) {console.log('10 or more than 10 and less than 20');}
      else if (difference >= 20 && difference < 30) {console.log('20 or more than 20 and less than 30');}
      else if (difference >= 30 && difference < 40) {console.log('30 or more than 30 and less than 40');}
      else if (difference >= 40 && difference < 50) {console.log('40 or more than 40 and less than 50');}
      else if (difference >= 50 && difference < 60) {console.log('50 or more than 50 and less than 60');}
      else if (difference >= 60 && difference < 70) {console.log('60 or more than 60 and less than 70');}
      else if (difference >= 70 && difference < 80) {console.log('70 or more than 70 and less than 80');}
      else if (difference >= 80 && difference < 90) {console.log('80 or more than 80 and less than 90');}
      else if (difference >= 90) {console.log('90 or more than 90');}
  }
  

  checkValues();

}

/////// COUNT NUMBER OF USER GUESSES

/////// CHECK userNumGuess vs computerNumber



















