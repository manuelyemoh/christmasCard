
// SHAKE GAME //

var gameOneImages = [["assets/images/gameOne/bg2x.jpg",false]];
var gameOneTimer = 11;
var counter;
var shakeCounter = 0;
var gameOneEnded = false;
var gameOneStar = false;

function gameOneInit(){	
	
	if(firstTimeArray[1] == true){
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameOne'><p>Start Game Instructions</p></div>" );
		
		$("#gameOne").css({	
		
			top: "40%",
			width: "100px",
			zIndex: "4",
			color: "white",
			textAlign: "center",
			backgroundColor: "blue",
			marginLeft: "-50px",
			left: "50%",
			position: "absolute"
			
		});
		
		$("#gameOne p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$('#gameOne').show();
		$("#gameInstructionBg").show();
		setTimeout(gameOneStart, 5000);
		
	}else{
		
		$('#gameOne').show();
		$("#gameInstructionBg").show();
		
	} 

}

function gameOneStart(){
	
	$('#gameOne').hide();
	$("#gameInstructionBg").hide();
	$('#timer').show();
	counter=setInterval(gameOnetimer, 1000);
	gameOnetimer();
	
}

function gameOnetimer(){

		 gameOneTimer --;
		 
		 $('#timer p').text(gameOneTimer);
		 if (gameOneTimer <= 0)
		 {		 
			 clearInterval(counter);
			 window.removeEventListener('shake', shakeEventDidOccur, false);
			 gameOneLost();

		 }
}

window.addEventListener('shake', shakeEventDidOccur, false);

//define a custom method to fire when shake occurs.
function shakeEventDidOccur () {
		
	shakeCounter++
	alert("shake")
	if (shakeCounter == 5){
		//alert("shake 5");
		window.removeEventListener('shake', shakeEventDidOccur, false);
		clearInterval(counter);
		 gameOneWon();
	}
		
}

function gameOneWon(){
		
		 gameOneEnded = true;
		 gameOneStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
	}
	
function gameOneLost(){
		 gameOneEnded = true;
		 gameOneStar = false;
		 $("#resultsScreen").show();
		 
	}