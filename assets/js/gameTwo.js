//var gameTwoImages = ["assets/images/bg2x.jpg","#d9ebec"];
var gameTwoImages = [];
var gameTwoColor = ["#d9ebec"];
var gameTwoTimer = 11;
var counter;
var gameTwoEnded = false;
var gameTwoStar = false;
var brokeOne = false;
var brokeTwo = false;
var brokeThree = false;
var AnimateOneCounter;
var AnimateTwoCounter;
var AnimateThreeCounter;
var oneClicks = 0; 
var twoClicks = 0;
var threeClicks = 0;
var spriteLocation;
var backgroundS;

var breakPositions = ["","-174px -151px","-174px -296px","-174px -439px","-174px -560px"];

if (retina) {
	gameTwoImages = ["assets/images/bg2x.png","assets/images/gameTwo/mainSprite@2x.png"];
	spriteLocation = "assets/images/gameTwo/mainSprite@2x.png";
	backgroundS = "305px 695px";
}
else {
	gameTwoImages = ["assets/images/bg2x.png","assets/images/gameTwo/mainSprite.png"];
	spriteLocation = "assets/images/gameTwo/mainSprite.png";
	backgroundS = "305px 695px";

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

	$( "#gameNavigation #gameArea" ).append( "<div id='gameTwo'><p>Start Game Instructions</p></div><div id='gameTwoElements'><div id='breakOneToy'></div><div id='breakTwoToy'></div><div id='breakThreeToy'></div><div id='breakOne'></div><div id='breakTwo'></div><div id='breakThree'></div><div id='breakMount'><div id='whiteSpace'></div></div></div>" );
	
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
	
	$("#gameTwoElements #breakMount").css({
				
			backgroundImage:"url(assets/images/gameTwo/breakMount.png)",
		    height: "144px",
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "82px",
		    width: "360px",
		    zIndex: "1"
			
		});
		
		$("#gameTwoElements #breakMount #whiteSpace").css({
			
			backgroundColor: "#f7f8f8",
		    height: "800px",
		    left: "0px",
		    opacity: "1",
		    position: "absolute",
		    top: "138px",
		    width: "360px",
		    zIndex: "1"
		
		});
	
	$("#breakOneToy").css({
	
		width: "92px",
		height:"107px",
		top:"310px",
		left:"35px",
		position:"absolute",
		background: 'url('+ spriteLocation +') no-repeat scroll -28px -108px rgba(0, 0, 0, 0)',
		backgroundSize: backgroundS,
		zIndex: "2"

	});
	
	$("#breakTwoToy").css({
	
		width: "92px",
		height:"107px",
		top:"187px",
		left:"136px",
		position:"absolute",
		background: 'url('+ spriteLocation +') no-repeat scroll -28px -226px rgba(0, 0, 0, 0)',
		backgroundSize: backgroundS,
		zIndex: "2"

	});
	
	$("#breakThreeToy").css({
	
		width: "115px",
		height:"77px",
		top:"337px",
		left:"193px",
		position:"absolute",
		background: 'url('+ spriteLocation +') no-repeat scroll -22px -18px rgba(0, 0, 0, 0)',
		backgroundSize: backgroundS,
		zIndex: "2"

	});
    
	breakElements = [whatElement={
			part:"breakOne",
			index:"3",
			sL:"24px",
			sT:"298px",
			color:"white",
			width:"118px",
			height:"118px",
			zIndex:"3"
			},whatElement={
			part:"breakTwo",
			index:"3",
			sL:"118px",
			sT:"180px",
			color:"white",
			width:"118px",
			height:"118px",
			zIndex:"3"
			},whatElement={
			part:"breakThree",
			index:"3",
			sL:"190px",
			sT:"299px",
			color:"white",
			width:"118px",
			height:"118px",
			zIndex:"3"
			}]
	
	for(f=0;f<=2;f++){
		
		$('#gameTwoElements '+'#'+breakElements[f].part).css({

				"width":breakElements[f].width,
				"height":breakElements[f].height,
				"top":breakElements[f].sT,
				"left":breakElements[f].sL,
				"backgroundColor":breakElements[f].color,
				"background": 'url('+ spriteLocation +') no-repeat scroll -174px -7px rgba(0, 0, 0, 0)',
				"backgroundSize": backgroundS,
				"position":"absolute",
				"opacity":"1",
				"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
				"zIndex":breakElements[f].index
			
		})
			
	}
 
	$("#gameTwo").show();
	$("#gameInstructionBg").show();
	setTimeout(gameTwoStart, 5000);

}

function gameTwoStart(){
	
	$('#gameTwo').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	
	counter=setInterval(gameTwotimer, 1000);
	gameTwotimer();
	
	jQuery( "#gameTwoElements #breakOne" ).on( "tap", function() {
	
		oneClicks ++;
		
		$('#gameTwoElements '+'#'+breakElements[0].part).css({
		
			"background-position": breakPositions[oneClicks]
			//"top": breakTop[oneClicks]
		
		});
		
		if(oneClicks > 4){
		
			$("#gameTwoElements #breakOne").hide();
			brokeOne = true;
			animationToyOne();			
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakTwo" ).on( "tap", function() {
		
		twoClicks ++;
		
		$('#gameTwoElements '+'#'+breakElements[1].part).css({
		
			"background-position": breakPositions[twoClicks]
		
		});
		
		if(twoClicks > 4){
		
			$("#gameTwoElements #breakTwo").hide();
			brokeTwo = true;
			animationToyTwo();
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakThree" ).on( "tap", function() {
	
		threeClicks ++;
		
		$('#gameTwoElements '+'#'+breakElements[2].part).css({
		
			"background-position": breakPositions[threeClicks]
		
		});
		
		if(threeClicks > 4){
		
			$("#gameTwoElements #breakThree").hide();
			brokeThree = true;
			animationToyThree();
		}
		allBroken();
	});
	
}

function allBroken(){
	
	if (brokeOne === true && brokeTwo === true && brokeThree === true){
		
		animateGameWon();
		clearInterval(counter);
	}
	else{
		
		console.log("false");
		
	}
	
}

function animationToyOne(){
	
	oneAnimation = $("#breakOneToy");
	 
	TweenLite.to(oneAnimation, 0.5, {rotation:10});
	TweenLite.to(oneAnimation, 0.5, {rotation:-10,delay:0.5});
		
	AnimateOneCounter = setTimeout(function(){animationToyOne();},1000);	
	
}

function animationToyTwo(){
	
	TwoAnimation = $("#breakTwoToy");
	 
	TweenLite.to(TwoAnimation, 0.5, {rotation:10});
	TweenLite.to(TwoAnimation, 0.5, {rotation:-10,delay:0.5});
		
	AnimateTwoCounter = setTimeout(function(){animationToyTwo();},1000);	
	
}

function animationToyThree(){
	
	ThreeAnimation = $("#breakThreeToy");
	 
	TweenLite.to(ThreeAnimation, 0.5, {rotation:10});
	TweenLite.to(ThreeAnimation, 0.5, {rotation:-10,delay:0.5});
		
	AnimateThreeCounter = setTimeout(function(){animationToyThree();},1000);	
	
}

function animateGameWon(){
	
	setTimeout(function(){
		
		gameTwoWon();
		
	},2000);
	
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

		 clearTimeout(AnimateOneCounter);
		 clearTimeout(AnimateTwoCounter);
		 clearTimeout(AnimateThreeCounter);
		 gameTwoEnded = true;
		 gameTwoStar = true;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $("#gameTwo").remove();
		 $("#gameTwoElements").remove();
		 
	}
	
function gameTwoLost(){

		 clearTimeout(AnimateOneCounter);
		 clearTimeout(AnimateTwoCounter);
		 clearTimeout(AnimateThreeCounter);
		 gameTwoEnded = true;
		 gameTwoStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#gameTwo").remove();
		 $("#gameTwoElements").remove();
		 
	}
