var gameTwoImages = ["assets/images/bg2x.jpg","#d9ebec"];
var gameTwoTimer = 11;
var counter;
var gameTwoEnded = false;
var gameTwoStar = false;
var brokeOne = false;
var brokeTwo = false;
var brokeThree = false;
var oneClicks = 0;
var twoClicks = 0;
var threeClicks = 0;
var spriteLocation;
var backgroundS;

if (retina) {

	spriteLocation = "assets/images/mainSprite@2x.png";
	backgroundS = "500px";
}
else {

	spriteLocation = "assets/images/mainSprite.png";
	backgroundS = "500px";

}

function gameTwoInit(){

	gameTwoTimer = 11;
	gameTwoEnded = false;
	oneClicks = 0;
	twoClicks = 0;
	threeClicks = 0;
	brokeOne = false;
	brokeTwo = false;
	brokeThree = false;

	$( "#gameNavigation #gameArea" ).append( "<div id='gameTwo'><p>Start Game Instructions</p></div><div id='gameTwoElements'><div id='breakOne'></div><div id='breakTwo'></div><div id='breakThree'></div></div>" );
	
	$("#gameTwo").css({	
	
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
	
	$("#gameTwo p").css({
		
		margin: "0",
		padding: "0",
		position: "relative",
		top: "2px"
		
	});
	
	$("#gameTwoElements").css({

		width:"100%",
		height:"100%",
		position:"absolute",
		top:"0px",

	});
	
	$("#gameTwoElements #breakOne").css({
			
		width:"75px",
		height:"75px",
		top:"100px",
		left:"100px",
		backgroundColor:"white",
		position:"absolute"
		
	});
	
	$("#gameTwoElements #breakTwo").css({
		
		width:"75px",
		height:"75px",
		top:"200px",
		left:"100px",
		backgroundColor:"green",
		position:"absolute"
		
	});
	
	$("#gameTwoElements #breakThree").css({
			
		width:"75px",
		top:"300px",
		left:"100px",
		height:"75px",
		backgroundColor:"red",
		position:"absolute"
		
	});
 
	$("#gameTwo").show();
	$("#gameInstructionBg").show();
	$("#gameTwoElements #breakOne").hide();
	$("#gameTwoElements #breakTwo").hide();
	$("#gameTwoElements #breakThree").hide();
	setTimeout(gameTwoStart, 5000);

}

function gameTwoStart(){
	
	$('#gameTwo').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	$("#gameTwoElements #breakOne").show();
	$("#gameTwoElements #breakTwo").show();
	$("#gameTwoElements #breakThree").show();
	counter=setInterval(gameTwotimer, 1000);
	gameTwotimer();
	
	jQuery( "#gameTwoElements #breakOne" ).on( "tap", function() {
	
		oneClicks ++;
		if(oneClicks > 4){
		
			$("#gameTwoElements #breakOne").hide();
			brokeOne = true;
						
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakTwo" ).on( "tap", function() {
		
		twoClicks ++;
		if(twoClicks > 4){
		
			$("#gameTwoElements #breakTwo").hide();
			brokeTwo = true;
			
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakThree" ).on( "tap", function() {
	
		threeClicks ++;
		if(threeClicks > 4){
		
			$("#gameTwoElements #breakThree").hide();
			brokeThree = true;
			
		}
		allBroken();
	});
	
}

function allBroken(){
	
	if (brokeOne == true && brokeTwo == true && brokeThree == true){
		
		gameTwoWon();
		clearInterval(counter);
	}
	else{
		
		console.log("false");
		
	}
	
}

function gameTwotimer(){

		 gameTwoTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameTwoTimer <= 0)
		 {		 
			clearInterval(counter);
			gameTwoLost();

		 }
}

function gameTwoWon(){
		
		 gameTwoEnded = true;
		 gameTwoStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $("#gameTwo").remove();
		 $("#gameTwoElements").remove();
	}
	
function gameTwoLost(){
		
		 gameTwoEnded = true;
		 gameTwoStar = false;
		 $("#gameTwo").remove();
		 $("#gameTwoElements").remove();
		 
	}
