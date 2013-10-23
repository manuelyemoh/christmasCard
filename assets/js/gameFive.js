var gameFiveImages = [["assets/images/gameFive/bg2x.jpg",false]];
var gameFiveTimer = 10;
var counter;
var gameFiveEnded = false;
var gameFiveStar = false;
var spriteLocation;
var backgroundS;

if (retina) {

	spriteLocation = "assets/images/mainSprite@2x.png";
	backgroundS = "750px";
}
else {

	spriteLocation = "assets/images/mainSprite.png";
	backgroundS = "750px";

}

function gameFiveInit(){

	gameFiveEnded = false;
	gameFiveTimer = 11;
	
	$( "#gameNavigation #gameArea" ).append( "<div id='gameFive'><p>Start Game Instructions</p></div><div id='gameFiveElements'> </div>" );
	
	$("#gameFive").css({	
		
			top: "40%",
			width: "100px",
			zIndex: "4",
			color: "white",
			textAlign: "center",
			backgroundColor: "blue",
			marginLeft: "-50px",
			left: "50%",
			position: "absolute",
			zIndex:"6"
			
		});
		
		$("#gameFive p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameFiveElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",

		});
		
		$("#gameFive").show();
		$("#gameInstructionBg").show();
		setTimeout(gameFiveStart, 5000);
	
}

function gameFiveStart(){
	
	$('#gameFive').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	counter=setInterval(gameFivetimer, 1000);
	gameFivetimer();
	
}

function gameFivetimer(){

		 gameFiveTimer --;
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameFiveTimer <= 0)
		 {		 
			 clearInterval(counter);
			 gameFiveLost();

		 }
}

function gameFiveWon(){
		
		 gameFiveEnded = true;
		 gameFiveStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();

	}
	
function gameFiveLost(){

		 gameFiveEnded = true;
		 gameFiveStar = false;
		 $("#resultsScreen").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();
		 
	}