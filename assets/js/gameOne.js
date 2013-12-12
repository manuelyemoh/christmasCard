
// SHAKE GAME //

var gameOneImages = [];
var gameOneColor = ["#C9E3F2"];
var gameOneTimer = 11;
var counter;
var shakeCounter = 0;
var gameOneLive = false;
var gameOneEnded = false;
var gameOneStar = false;
var snowDrop = 2;
var spriteLocation;
var backgroundS;

var shakeHit = new Howl({urls: ['assets/sounds/shakeSound.mp3', 'assets/sounds/shakeSound.ogg', 'assets/sounds/shakeSound.aac']});

if (retina) {

	gameOneImages = ["assets/images/bg2x.png","assets/images/gameOne/mainSprite@2x.png","assets/images/gameOne/shakeBot.png","assets/images/results/elfSantasPantsWin@2x.jpg","assets/images/results/signPostWin@2x.png","assets/images/results/pngElfLostHuff@2x.jpg","assets/images/results/signPostLost@2x.png"];
	spriteLocation = "assets/images/gameOne/mainSprite@2x.png";
	inLocation = "assets/images/instructionImages@2x.png";
	backgroundS = "277px 342px";
	
}
else {

	gameOneImages = ["assets/images/bg2x.png","assets/images/gameOne/mainSprite.png","assets/images/gameOne/shakeBot.png","assets/images/results/elfSantasPantsWin.jpg","assets/images/results/signPostWin.png","assets/images/results/pngElfLostHuff.jpg","assets/images/results/signPostLost.png"];
	spriteLocation = "assets/images/gameOne/mainSprite.png";
	inLocation = "assets/images/instructionImages.png";
	backgroundS = "277px 342px";
	
}

function gameOneInit(){	
		gameOneTimer = 11;
		gameOneEnded = false;
		shakeCounter = 0;
		snowDrop = 2;
		gameOneLive = false;
		gameOneStar = false;
		
		//$("#gameNavigation").append("<div id='previewIn'>");
		
		$( "#gameNavigation #gameArea" ).append( "</div><div id='gameOne'><p>"+mainCopy[7].lineOne+"</p><p><span>"+mainCopy[7].span+" "+"</span>"+mainCopy[7].lineTwo+"</p></div><div id='gameOneElements'><div id='pants'></div><div id='mainPole'></div><div id='northPole'></div><div id='snowFrag0'></div><div id='snowFrag1'></div><div id='snowFrag2'></div><div id='snowFrag3'></div><div id='snowFrag4'></div><div id='shakeMount'><div id='whiteSpace'></div></div></div></div>" );
		
		/*$("#previewIn").css({	
		
			background: "url(assets/images/gameOne/previewInstructions.jpg)",
			
			backgroundSize:"360px 640px",
			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			left:"0px",
			zIndex:"9"
		
		});*/
		
		$("#gameOne").css({	
		
			top: "124px",
			width: "300px",
			color: "white",
			textAlign: "center",
			left: "11px",
			position: "absolute",
			zIndex:"10"
			
		});
		
		$("#gameOne p").css({
			
			fontFamily:"gerogia",
			letterSpacing:"0.5px",
			fontSize:"20px",
			lineHeigh:"23px",
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameOne p span").css({
			
			fontSize:"20px",
			fontWeight:"bold",
			color:"#f74a4a"
			
		});
		
		$("#gameOne p:last").css({
			
			top:"20px",
			letterSpacing:"0.7px"
	
		});
		
		$("#gameOneElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",

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
			sL:"68px",
			sT:"108px",
			color:"blue",
			width:"95px",
			height:"110px",
			bPosL:"3px",
			bPosT:"-14px"
			},whatElement={
			part:"mainPole",
			index:"2",
			sL:"118px",
			sT:"101px",
			color:"blue",
			width:"31px",
			height:"325px",
			bPosL:"-231px",
			bPosT:"-10px"
			},whatElement={
			part:"northPole",
			index:"2",
			sL:"185px",
			sT:"216px",
			color:"blue",
			width:"120px",
			height:"176px",
			bPosL:"-10px",
			bPosT:"-126px"
			},whatElement={
			part:"snowFrag0",
			index:"3",
			sL:"185px",
			sT:"210px",
			color:"blue",
			width:"38px",
			height:"21px",
			bPosL:"-131px",
			bPosT:"-231px"
			},whatElement={
			part:"snowFrag1",
			index:"3",
			sL:"221px",
			sT:"221px",
			color:"blue",
			width:"38px",
			height:"20px",
			bPosL:"-181px",
			bPosT:"-242px"
			},whatElement={
			part:"snowFrag2",
			index:"3",
			sL:"253px",
			sT:"226px",
			color:"blue",
			width:"47px",
			height:"40px",
			bPosL:"-127px",
			bPosT:"-261px"
			},whatElement={
			part:"snowFrag3",
			index:"3",
			sL:"115px",
			sT:"98px",
			color:"blue",
			width:"20px",
			height:"21px",
			bPosL:"-182px",
			bPosT:"-274px"
			},whatElement={
			part:"snowFrag4",
			index:"3",
			sL:"132px",
			sT:"99px",
			color:"blue",
			width:"15px",
			height:"21px",
			bPosL:"-209px",
			bPosT:"-275px"
			}];
		
		for(i=0;i<=7;i++){

			$('#gameOneElements '+'#'+shakeElements[i].part).css({

				"width":shakeElements[i].width,
				"height":shakeElements[i].height,
				"top":shakeElements[i].sT,
				"left":shakeElements[i].sL,
				"backgroundColor":shakeElements[i].color,
				"background": 'url('+ spriteLocation +') no-repeat scroll '+ shakeElements[i].bPosL +' '+ shakeElements[i].bPosT +' rgba(0, 0, 0, 0)',
				"backgroundSize": backgroundS,
				"position":"absolute",
				"opacity":"1",
				"zIndex":shakeElements[i].index
			
			})
			
		}
		
		$('#gameOne').show();
		$("#gameInstructionBg").show();
		$("#startGame").css({
			display:"inline"
		})
		//setTimeout(gameOneStart, 5000);

}

function gameOneStart(){
	
	$('#gameOne').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	window.addEventListener('shake', shakeEventDidOccur, false);
	counter=setInterval(gameOnetimer, 1000);
	gameOnetimer();
	gameOneLive = true;
}

function gameOnetimer(){
	 gameOneTimer --;
	 $('#timerInside').animate({width:"-=30px"},1000);
	 if (gameOneTimer <= 0)
	 {		 
		 clearInterval(counter);
		 window.removeEventListener('shake', shakeEventDidOccur);
		 gameOneLost();
	 }
}

//define a custom method to fire when shake occurs.
function shakeEventDidOccur () {
		
	shakeCounter++
	shakeHit.play();
	
	$('#gameOneElements '+'#'+shakeElements[0].part).animate({top:"+=45px"}, function(){
		
		if (shakeCounter == 5){
		
			$('#gameOneElements '+'#'+shakeElements[0].part).css({
			
				"width":"105px",
				"top":"340px",
				"left":"85px",
				"background-position": "-115px -24px",
				"backgroundSize": backgroundS
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
		setTimeout(gameOneWon,3000);
		
		
	}
		
}

function gameOneWon(){
		 gameOneLive = false;
		 gameOneEnded = true;
		 gameOneStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $('#timer').hide();
		 $('#gameOne').remove();
		 $('#gameOneElements').remove();
		 

	}
	
function gameOneLost(){
		 gameOneLive = false;
		 gameOneEnded = true;
		 gameOneStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $('#gameOne').remove();
		 $('#gameOneElements').remove();
		 
	}