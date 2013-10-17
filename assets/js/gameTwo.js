var gameTwoImages = [["assets/images/gameTwo/bg2x.jpg",false]];
var gameTwoTimer = 10;
var counter;
var gameTwoEnded = false;
var gameTwoStar = false;
var brokeOne = false;
var brokeTwo = false;
var brokeThree = false;
var oneClicks = 0;
var twoClicks = 0;
var threeClicks = 0;

function gameTwoInit(){
	
	if(firstTimeArray[2] == true){
	
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
			position: "absolute"
			
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
		
	}else{
		
		$('#gameTwo').show();
		$("#gameInstructionBg").show();
		
	}

}

function gameTwoStart(){
	
	$('#gameTwo').hide();
	$("#gameInstructionBg").hide();
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
		
	}
	else{
		
		console.log("false");
		
	}
	
}

function gameTwotimer(){

		 gameTwoTimer --;
		 
		 $('#timer p').text(gameTwoTimer);
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
		 $("#gameTwoElements #breakOne").remove();
		 $("#gameTwoElements #breakTwo").remove();
		 $("#gameTwoElements #breakThree").remove();
	}
	
function gameTwoLost(){

		 gameTwoEnded = true;
		 gameTwoStar = false;
		 $("#resultsScreen").show();
		 $("#gameTwoElements #breakOne").remove();
		 $("#gameTwoElements #breakTwo").remove();
		 $("#gameTwoElements #breakThree").remove();
		 
	}
