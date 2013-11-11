var tabletGameImages = ["assets/images/bg2x.jpg","#e0f4f4"];
var tabletGameEnded = false;
var spriteLocation;
var backgroundS;
var countSuccess = 0;
var currentlyDown = false;

if (retina) {
	//console.log('retina');
	spriteLocation = "assets/images/mainSprite@2x.png";
	backgroundS = "1500px";
}
else {
	//console.log('notRetina');
	spriteLocation = "assets/images/mainSprite.png";
	backgroundS = "1500px";

}

function tabletGameInit(){
	
	$( "#gameNavigation #gameArea" ).append( "<div id='tabletGame'><p>Start Game Instructions</p></div><div id='tabletGameElements'></div></div>" );
		
		$("#tabletGame").css({	
		
			top: "40%",
			width: "100px",
			zIndex: "4",
			color: "white",
			textAlign: "center",
			backgroundColor: "blue",
			marginLeft: "-50px",
			left: "50%",
			position: "absolute",
			zIndex:"7"
			
		});
		
		$("#tabletGame p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#tabletGameElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",

		});
	
		$("#tabletGame").show();
		$("#gameInstructionBg").show();
		//setTimeout(tabletGameStart, 500);
	
}

function tabletGameStart(){
	
		$("#tabletGame").hide();
		$("#gameInstructionBg").hide();
		$('#timerInside').animate({width:"298px"},0);
		$('#timer').show();


}


function tabletGameWon(){
		

		 
}
	
function tabletGameLost(){


		 
}