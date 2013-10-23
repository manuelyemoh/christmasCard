
// SHAKE GAME //

var gameOneImages = ["assets/images/bg2x.jpg","#e0f4f3"];
var gameOneTimer = 11;
var counter;
var shakeCounter = 0;
var gameOneEnded = false;
var gameOneStar = false;
var snowDrop = 2;
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

function gameOneInit(){	
		gameOneTimer = 11;
		gameOneEnded = false;
		$( "#gameNavigation #gameArea" ).append( "<div id='gameOne'><p>Start Game Instructions</p></div><div id='gameOneElements'><div id='pants'></div><div id='mainPole'></div><div id='northPole'></div><div id='snowFrag0'></div><div id='snowFrag1'></div><div id='snowFrag2'></div><div id='snowFrag3'></div><div id='snowFrag4'></div><div id='shakeMount'><div id='whiteSpace'></div></div></div></div>" );
		
		$("#gameOne").css({	
		
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
		
		$("#gameOne p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameOneElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px"

		})
		
		$("#gameOneElements #shakeMount").css({
				
			backgroundImage:"url(assets/images/gameOne/shakeBot.png)",
		    height: "144px",
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "345px",
		    width: "360px",
		    zIndex: "1"
			
		});
		
		$("#gameOneElements #shakeMount #whiteSpace").css({
			
			backgroundColor: "white",
		    height: "800px",
		    left: "0px",
		    opacity: "1",
		    position: "absolute",
		    top: "138px",
		    width: "360px",
		    zIndex: "1"
		
		});
		
		shakeElements = [whatElement={
			part:"pants",
			index:"3",
			sL:"78px",
			sT:"108px",
			color:"blue",
			width:"95px",
			height:"110px",
			bPosL:"-7px",
			bPosT:"-284px"
			},whatElement={
			part:"mainPole",
			index:"2",
			sL:"118px",
			sT:"101px",
			color:"blue",
			width:"31px",
			height:"325px",
			bPosL:"-351px",
			bPosT:"-19px"
			},whatElement={
			part:"northPole",
			index:"2",
			sL:"185px",
			sT:"216px",
			color:"blue",
			width:"115px",
			height:"176px",
			bPosL:"-385px",
			bPosT:"-169px"
			},whatElement={
			part:"snowFrag0",
			index:"3",
			sL:"185px",
			sT:"210px",
			color:"blue",
			width:"38px",
			height:"21px",
			bPosL:"-388px",
			bPosT:"-22px"
			},whatElement={
			part:"snowFrag1",
			index:"3",
			sL:"221px",
			sT:"221px",
			color:"blue",
			width:"38px",
			height:"20px",
			bPosL:"-438px",
			bPosT:"-33px"
			},whatElement={
			part:"snowFrag2",
			index:"3",
			sL:"258px",
			sT:"227px",
			color:"blue",
			width:"40px",
			height:"40px",
			bPosL:"-388px",
			bPosT:"-53px"
			},whatElement={
			part:"snowFrag3",
			index:"3",
			sL:"115px",
			sT:"98px",
			color:"blue",
			width:"20px",
			height:"21px",
			bPosL:"-437px",
			bPosT:"-66px"
			},whatElement={
			part:"snowFrag4",
			index:"3",
			sL:"132px",
			sT:"99px",
			color:"blue",
			width:"15px",
			height:"21px",
			bPosL:"-465px",
			bPosT:"-66px"
			}];
		
		for(i=0;i<=7;i++){

			$('#gameOneElements '+'#'+shakeElements[i].part).css({

				"width":shakeElements[i].width,
				"height":shakeElements[i].height,
				"top":shakeElements[i].sT,
				"left":shakeElements[i].sL,
				"backgroundColor":shakeElements[i].color,
				"background": 'url('+ spriteLocation +') no-repeat scroll '+ shakeElements[i].bPosL +' '+ shakeElements[i].bPosT +' rgba(0, 0, 0, 0)',
				"backgroundSize": backgroundS+" "+backgroundS,
				"position":"absolute",
				"opacity":"1",
				"zIndex":shakeElements[i].index
			
			})
			
		}
		
		$('#gameOne').show();
		$("#gameInstructionBg").show();
		
		setTimeout(gameOneStart, 5000);

}

function gameOneStart(){
	
	$('#gameOne').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	counter=setInterval(gameOnetimer, 1000);
	gameOnetimer();
	
}

function gameOnetimer(){

		 gameOneTimer --;
		 $('#timerInside').animate({width:"-=30px"},500);
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
	
	$('#gameOneElements '+'#'+shakeElements[0].part).animate({top:"+=45px"}, function(){
		
		if (shakeCounter == 5){
		
			$('#gameOneElements '+'#'+shakeElements[0].part).css({
			
				"width":"105px",
				"top":"340px",
				"left":"85px",
				"background-position": "-107px -284px",
				"backgroundSize": backgroundS+" "+backgroundS
			})
		
		}
		
	});
	
	snowDrop++;
		 
		 switch(snowDrop){
			 
			 case 3:
			 
			 $('#gameOneElements '+'#'+shakeElements[3].part).animate({top:"+=100px",opacity: 0},1000);

			 break;
			 case 4:
			 
			 $('#gameOneElements '+'#'+shakeElements[4].part).animate({top:"+=100px",opacity: 0},1000);
			 break;
			 
			 case 5:
			 $('#gameOneElements '+'#'+shakeElements[5].part).animate({top:"+=100px",opacity: 0},1000);
			 break;
			 
			 case 6:
			 $('#gameOneElements '+'#'+shakeElements[6].part).animate({top:"+=100px",opacity: 0},1000);
			 break;
			 
			 case 7:
			 $('#gameOneElements '+'#'+shakeElements[7].part).animate({top:"+=100px",opacity: 0},1000);
			 break;
		 }
	
	if (shakeCounter == 5){
		
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

		 $('#gameOne').remove();
		 $('#gameOneElements').remove();

	}
	
function gameOneLost(){
		 gameOneEnded = true;
		 gameOneStar = false;
		 $("#resultsScreen").show();
		 	$('#gameOne').remove();
		 $('#gameOneElements').remove();
	}