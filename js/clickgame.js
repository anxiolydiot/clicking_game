var startButton = document.getElementById("startBtn");
var imageElements = document.getElementsByTagName("img");
var totalScore = 0;
var seconds = 10;
var timer;
//start button triggers countdown and makes images clickable since the click listener sits in this function
startBtn.addEventListener("click", startGame);
//hide scoreboard
$("#scoreboard").hide();
//game Starts
function startGame() {
	var timer = setInterval(countDown, 1000); //variable holding a function that calls countDown() every second
	$(".jumbotron").slideUp(500);
  $("#scoreboard").fadeIn(500);
	for (var i = 0; i < imageElements.length; i++) { //looks through all image elements listening for a click. If clicked, calls addScore()
    imageElements[i].addEventListener("click", addScore);	
  }
};
	
function countDown(){	//only let timer countdown to zero
	if(seconds >= 0){
		$("#countdown").html(seconds);
		console.log(seconds);
		seconds--
	}else{
		clearInterval(timer);
		endGame();
		$("#countdown").html("");
		$("#startBtn").hide();
	}
}	

function addScore() { //ensures the images can only be clicked one time by controlling the "data-clicked" attribute
  var winMsg = "You clicked em all! YOU WIN!";
	var loseMsg = "Little Slow... Try again!";

  if (this.getAttribute("data-clicked") !== "true") { 
    totalScore++;	//point scored
    $("#totalScore").html(totalScore); //pointed updated in browswer
    this.setAttribute("data-clicked", "true");
    this.setAttribute("style", "opacity:0.5");
  }

  if(totalScore === 24){ //check score to see if player won
		$("#winOrLose").html(winMsg);
	}else{
		$("#winOrLose").html(loseMsg);
	}
}

function endGame() { // Time is up. Modal shows with final score
	$("#gameOverMessage").modal(); 
	$("#finalScore").html(totalScore);
}

$("#playAgain").click(function(){ //Provide clean option to play again
		window.location.reload();
	})



