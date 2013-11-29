//var gameTwoImages = ["assets/images/bg2x.jpg","#d9ebec"];
var gameTwoImages = [];
var gameTwoColor = ["#d9ebec"];
var gameTwoTimer = 11;
var counter;
var gameTwoLive = false;
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

var iceHit = new Howl({urls: ['assets/sounds/iceHit.mp3', 'assets/sounds/iceHit.ogg', 'assets/sounds/iceHit.aac']});
var iceCrack = new Howl({urls: ['assets/sounds/iceCracked.mp3', 'assets/sounds/iceCracked.ogg', 'assets/sounds/iceCracked.aac']});

var breakPositions = ["","-174px -151px","-174px -296px","-174px -439px","-174px -560px"];

if (retina) {
	gameTwoImages = ["assets/images/bg2x.png","assets/images/gameTwo/mainSprite@2x.png"];
	spriteLocation = "assets/images/gameTwo/mainSprite@2x.png";
	inLocation = "assets/images/instructionImages@2x.png";
	backgroundS = "305px 695px";
}
else {
	gameTwoImages = ["assets/images/bg2x.png","assets/images/gameTwo/mainSprite.png"];
	spriteLocation = "assets/images/gameTwo/mainSprite.png";
	inLocation = "assets/images/instructionImages.png";
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
	
	//$("#gameNavigation").append("<div id='previewIn'>");

	$( "#gameNavigation #gameArea" ).append( "<div id='gameTwo'><p>"+mainCopy[6].lineOne+"</p><p>"+mainCopy[6].lineThree+"<span> "+ mainCopy[6].span+" "+"</span>"+mainCopy[6].lineTwo+"</p></div><div id='inImage'></div><div id='gameTwoElements'><div id='breakOneToy'></div><div id='breakTwoToy'></div><div id='breakThreeToy'></div><div id='breakOne'></div><div id='breakTwo'></div><div id='breakThree'></div><div id='breakMount'><div id='whiteSpace'></div></div></div>" );
	
	/*$("#previewIn").css({	
		
			background: "url(assets/images/gameTwo/previewInstructions.jpg)",
			backgroundSize:"360px 640px",
			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			left:"0px",
			zIndex:"9"
		
		});*/
	
	$("#gameTwo").css({	
		
			top: "141px",
			width: "282px",
			color: "white",
			textAlign: "center",
			left: "18px",
			position: "absolute",
			zIndex:"10"
			
		});
		
		$("#gameTwo p").css({
			
			fontFamily:"gerogia",
			letterSpacing:"0.5px",
			fontSize:"20px",
			lineHeigh:"23px",
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameTwo p span").css({
			
			
			fontSize:"20px",
			fontWeight:"bold",
			color:"#f74a4a"
			
			
		});
		
		$("#gameTwo p:last").css({
			
			top:"22px",
			letterSpacing:"0.7px",
			width:"270px",
			lineHeight:"23px",
			left:"5px"
			
	
		});
		
		$("#inImage").css({
			
			background:'url('+ inLocation +') no-repeat scroll -0px -150px',
			backgroundSize:"375px 233px",
			position:"absolute",
			left:"70px",
			top:"342px",
			width:"180px",
			height:"78px",
			zIndex:"11"
			
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
	$("#startGame").css({
			display:"inline"
		})
	//setTimeout(gameTwoStart, 5000);

}

function gameTwoStart(){
	
	$('#gameTwo').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	$("#inImage").remove();
	
	counter=setInterval(gameTwotimer, 1000);
	gameTwotimer();
	
	jQuery( "#gameTwoElements #breakOne" ).on( "tap", function() {
	
		oneClicks ++;
		iceHit.play();
		
		$('#gameTwoElements '+'#'+breakElements[0].part).css({
		
			"background-position": breakPositions[oneClicks]
			//"top": breakTop[oneClicks]
		
		});
		
		if(oneClicks > 4){
		
			$("#gameTwoElements #breakOne").hide();
			brokeOne = true;
			animationToyOne();	
			iceCrack.play();		
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakTwo" ).on( "tap", function() {
		
		twoClicks ++;
		iceHit.play();
		
		$('#gameTwoElements '+'#'+breakElements[1].part).css({
		
			"background-position": breakPositions[twoClicks]
		
		});
		
		if(twoClicks > 4){
		
			$("#gameTwoElements #breakTwo").hide();
			brokeTwo = true;
			animationToyTwo();
			iceCrack.play();
		}
		allBroken();
	});
	
	jQuery( "#gameTwoElements #breakThree" ).on( "tap", function() {
	
		threeClicks ++;
		iceHit.play();		
		$('#gameTwoElements '+'#'+breakElements[2].part).css({
		
			"background-position": breakPositions[threeClicks]
		
		});
		
		if(threeClicks > 4){
		
			$("#gameTwoElements #breakThree").hide();
			brokeThree = true;
			animationToyThree();
			iceCrack.play();
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
		 gameTwoLive = true;
		 gameTwoTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameTwoTimer <= 0)
		 {		 
			clearInterval(counter);
			gameTwoLost();

		 }
}

function gameTwoWon(){
		 gameTwoLive = false;
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
		 gameTwoLive = false;
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