var gameThreeImages = [];
var gameThreeColor = ["#c0dce6"];
var gameThreeTimer = 11;
var counter;
var countSuccess = 0;
var gameThreeLive = false;
var gameThreeEnded = false;
var gameThreeStar = false;
var currentlyDown = false;
var middleOne = false;
var middleTwo = false;
var middleThree = false;
var spriteLocation;
var backgroundS;

var snowManClick = new Howl({urls: ['assets/sounds/snowManClick.mp3', 'assets/sounds/snowManClick.ogg', 'assets/sounds/snowManClick.aac']});

if (retina) {
	gameThreeImages = ["assets/images/bg2x.png","assets/images/gameThree/mainSprite@2x.png"];
	inLocation = "assets/images/instructionImages@2x.png";
	spriteLocation = "assets/images/gameThree/mainSprite@2x.png";
	backgroundS = "346px 236px";
}
else {
	gameThreeImages = ["assets/images/bg2x.png","assets/images/gameThree/mainSprite.png"];
	inLocation = "assets/images/instructionImages.png";
	spriteLocation = "assets/images/gameThree/mainSprite.png";
	backgroundS = "346px 236px";

}

function gameThreeInit(){

	 gameThreeTimer = 11;
	 countSuccess = 0;
	 gameThreeEnded = false;
	 middleOne = false;
	 middleTwo = false;
	 middleThree = false;
	 
	 //$("#gameNavigation").append("<div id='previewIn'>");
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameThree'><p>"+mainCopy[4].lineOne+"</p><p><span>"+mainCopy[4].span+" "+"</span>"+mainCopy[4].lineTwo+"</p></div><div id='inImage'></div><div id='gameThreeElements'><div id='snowManBodyOne'></div><div id='snowManBodyTwo'></div><div id='snowManBodyThree'></div><div id='snowManMiddleOne'></div><div id='snowManMiddleTwo'></div><div id='snowManMiddleThree'></div><div id='snowManTopOne'></div><div id='snowManTopTwo'></div><div id='snowManTopThree'></div><div id='snowManMiddleOneHit'></div><div id='snowManMiddleTwoHit'></div><div id='snowManMiddleThreeHit'></div><div id='snowManTopOneHit'></div><div id='snowManTopTwoHit'></div><div id='snowManTopThreeHit'></div><div id='snowManMount'><div id='whiteSpace'></div></div></div>");
		
		/*$("#previewIn").css({	
		
			background: "url(assets/images/gameThree/previewInstructions.jpg)",
			backgroundSize:"360px 640px",
			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			left:"0px",
			zIndex:"9"
		
		});*/

		$("#gameThree").css({	
		
			top: "142px",
			width: "300px",
			color: "white",
			textAlign: "center",
			left: "11px",
			position: "absolute",
			zIndex:"10"
			
		});
		
		$("#gameThree p").css({
			
			fontFamily:"gerogia",
			letterSpacing:"0.5px",
			fontSize:"20px",
			lineHeigh:"23px",
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameThree p span").css({
			
			
			fontSize:"20px",
			fontWeight:"bold",
			color:"#f74a4a"
			
			
		});
		
		$("#gameThree p:last").css({
			
			top:"20px",
			letterSpacing:"0.7px"
	
		});
		
		$("#inImage").css({
			
			background:'url('+ inLocation +') no-repeat scroll -190px -76px',
			backgroundSize:"375px 233px",
			position:"absolute",
			left:"70px",
			top:"342px",
			width:"180px",
			height:"67px",
			zIndex:"11"
			
		});
		
		$("#gameThreeElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px"

		});
				
		$("#gameThreeElements #snowManMiddleOneHit").css({
				
			background: "url("+ spriteLocation +") -140px -17px ",
			backgroundSize: backgroundS,
			//backgroundColor:"blue",
		    height: "59px",
		    left: "-3px",
		    opacity: "0.1",
		    position: "absolute",
		    top: "147px",
		    width: "114px",
		    zIndex: "2"
			
		});
		
		$("#gameThreeElements #snowManMiddleTwoHit").css({
				
			background: "url("+ spriteLocation +") -143px -100px ",
			backgroundSize: backgroundS,
			//backgroundColor:"green",
		    height: "60px",
		    left: "106px",
		    opacity: "0.1",
		    position: "absolute",
		    top: "157px",
		    width: "107px",
		    zIndex: "2"
			
		});
		
		$("#gameThreeElements #snowManMiddleThreeHit").css({
				
			background: "url("+ spriteLocation +") -150px -180px ",
			backgroundSize: backgroundS,
			//backgroundColor:"red",
		    height: "53px",
		    left: "218px",
		    opacity: "0.1",
		    position: "absolute",
		    top: "185px",
		    width: "82px",
		    zIndex: "2"
			
		});
		
		$("#gameThreeElements #snowManTopOneHit").css({
				
			background: "url("+ spriteLocation +") -74px -4px ",
			backgroundSize: backgroundS,
			//backgroundColor:"blue",
		    height: "75px",
		    left: "19px",
		    opacity: "0",
		    position: "absolute",
		    top: "90px",
		    width: "67px",
		    zIndex: "2"
		    
		});
		
		$("#gameThreeElements #snowManTopTwoHit").css({
				
			background: "url("+ spriteLocation +") -76px -104px ",
			backgroundSize: backgroundS,
			//backgroundColor:"green",
		    height: "55px",
		    left: "133px",
		    opacity: "0",
		    position: "absolute",
		    top: "115px",
		    width: "55px",
		    zIndex: "2"
		    
		});
		$("#gameThreeElements #snowManTopThreeHit").css({
				
			background: "url("+ spriteLocation +") -77px -174px ",
			backgroundSize: backgroundS,
			//backgroundColor:"red",
		    height: "53px",
		    left: "236px",
		    opacity: "0",
		    position: "absolute",
		    top: "148px",
		    width: "53px",
		    zIndex: "2"
		    
		});
		
		$("#gameThreeElements #snowManMount").css({
				
			backgroundImage:"url(assets/images/gameThree/mountainBot.png)",
		    height: "59px",
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "208px",
		    width: "360px",
		    zIndex: "1"
			
		});
		
		$("#gameThreeElements #snowManMount #whiteSpace").css({
			
			backgroundColor: "white",
		    height: "800px",
		    left: "0px",
		    opacity: "1",
		    position: "absolute",
		    top: "53px",
		    width: "360px",
		    zIndex: "1"
			
		});
		
		/* - - -
		xL = Maximum Left
		XR = Maximum Right
		yT = Maximum Top
		yB = maximum Bottom
		sL = snapBack Left
		sT = snapBack Top
		color = Color
		width = Width
		height = Height
		- - - */
		
			snowBodyParts = [snowPart={
			part:"snowManTopOne",
			xL:"2",
			xR:"38",
			yT:"70",
			yB:"108",
			sL:"120px",
			sT:"290px",
			color:"blue",
			width:"67px",
			height:"75px",
			bPosL:"-74px",
			bPosT:"-4px"
			},snowPart={
			part:"snowManTopTwo",
			xL:"114",
			xR:"153",
			yT:"99",
			yB:"132",
			sL:"250px",
			sT:"270px",
			color:"pink",
			width:"55px",
			height:"55px",
			bPosL:"-76px",
			bPosT:"-104px"
			},snowPart={
			part:"snowManTopThree",
			xL:"225",
			xR:"259",
			yT:"135",
			yB:"155",
			sL:"185px",
			sT:"260px",
			color:"red",
			width:"53px",
			height:"53px",
			bPosL:"-77px",
			bPosT:"-174px"
			},snowPart={
			part:"snowManMiddleOne",
			xL:"-16",
			xR:"16",
			yT:"127",
			yB:"163",
			sL:"190px",
			sT:"340px",
			color:"blue",
			width:"114px",
			height:"59px",
			bPosL:"-140px",
			bPosT:"-17px"
			},snowPart={
			part:"snowManMiddleTwo",
			xL:"83",
			xR:"125",
			yT:"137",
			yB:"178",
			sL:"20px",
			sT:"340px",
			color:"green",
			width:"107px",
			height:"60px",
			bPosL:"-143px",
			bPosT:"-100px"
			},snowPart={
			part:"snowManMiddleThree",
			xL:"200",
			xR:"235",
			yT:"163",
			yB:"201",
			sL:"30px",
			sT:"270px",
			color:"red",
			width:"82px",
			height:"53px",
			bPosL:"-150px",
			bPosT:"-180px"
			},snowPart={
			part:"snowManBodyOne",
			sL:"10px",
			sT:"180px",
			color:"blue",
			width:"89px",
			height:"89px",
			bPosL:"-252px",
			bPosT:"-3px"
			},snowPart={
			part:"snowManBodyTwo",
			sL:"114px",
			sT:"190px",
			color:"green",
			width:"94px",
			height:"81px",
			bPosL:"-252px",
			bPosT:"-94px"
			},snowPart={
			part:"snowManBodyThree",
			sL:"220px",
			sT:"210px",
			color:"red",
			width:"65px",
			height:"55px",
			bPosL:"-265px",
			bPosT:"-179px"
			}];

			for(f=0;f<=8;f++){
			
				$('#gameThreeElements '+'#'+snowBodyParts[f].part).css({
					
					"width":snowBodyParts[f].width,
					"height":snowBodyParts[f].height,
					"top":snowBodyParts[f].sT,
					"left":snowBodyParts[f].sL,
					"backgroundColor":snowBodyParts[f].color,
					"background": 'url('+ spriteLocation +') '+ snowBodyParts[f].bPosL +' '+ snowBodyParts[f].bPosT +'',
					"backgroundSize": backgroundS,
					"position":"absolute",
					"opacity":"0.8",
					"zIndex":"2"

					
				});
				
			}	
		
		$("#gameThree").show();
		$("#gameInstructionBg").show();
		$("#startGame").css({
			display:"inline"
		})
		//setTimeout(gameThreeStart, 5000);
	
}

function gameThreeStart(){

	$('#gameThree').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	$("#inImage").remove();
	counter=setInterval(gameThreetimer, 1500);
	gameThreetimer();
	
	for(i=0;i<=5;i++){
	
		$('#'+snowBodyParts[i].part).on( "vmousedown", function (e){
		
			 currentlyDown = true;
			 
		});
		
		$('#'+snowBodyParts[i].part).on( "vmousemove", function (event){
			
			if(currentlyDown === true){
				
				currentId = $(this).attr('id');
				x = event.pageX - $('#gameArea').offset().left-35;
				y = event.pageY - $('#gameArea').offset().top-35;
				$('#'+currentId).css("left",x);
				$('#'+currentId).css("top",y);
				$('#'+currentId).css("z-index",10000);
		    }
		    else{
			    
			    //do nothing
			    
		    }
	
		});
		
		$('#'+snowBodyParts[i].part).on( "vmouseup", function (event){
		
			currentlyDown = false;
			currentId = $(this).attr('id');
			$('#'+currentId).css("z-index",3);
			
			for(l=0;l<=5;l++){
			
			if(currentId == snowBodyParts[l].part){
				
				console.log("left -->"+parseFloat($('#'+currentId).css("left")));
				console.log("top -->"+parseFloat($('#'+currentId).css("top")));

				if(parseFloat($('#'+currentId).css("left")) >= snowBodyParts[l].xL && parseFloat($('#'+currentId).css("left")) <= snowBodyParts[l].xR && parseFloat($('#'+currentId).css("top")) >= snowBodyParts[l].yT && parseFloat($('#'+currentId).css("top")) <= snowBodyParts[l].yB){
				
					switch(currentId){
						
						case "snowManTopOne":
							if(middleOne === true){
								
								positionHit(currentId);
								
							}else{
								
								positionReset(currentId);
								
							}
								
						break;
						case "snowManTopTwo":
							if(middleTwo === true){
								
								positionHit(currentId);
								
							}else{
								
								positionReset(currentId);
								
							}
						break;
						case "snowManTopThree":
							if(middleThree === true){
								
								positionHit(currentId);
								
							}else{
								
								positionReset(currentId);
								
							}
						break;
						case "snowManMiddleOne":
							middleOne = true;
							positionHit(currentId);
							$("#snowManTopOneHit").css({
								opacity:"0.1"
							});
							
						break;
						case "snowManMiddleTwo":
							middleTwo = true;
							positionHit(currentId);
							$("#snowManTopTwoHit").css({	
								opacity:"0.1"
							});
							
						break;
						case "snowManMiddleThree":
							middleThree = true;
							positionHit(currentId);
							$("#snowManTopThreeHit").css({			
								opacity:"0.1"
							});
						break;
						
						
					}
					
				}
				else{
				
					$('#'+currentId).animate({top:snowBodyParts[l].sT,left:snowBodyParts[l].sL}, 200);
				
				}
				
			}
			
			}
			
		});
	
	}
	
}

function positionHit(currentId){
	
	$('#'+currentId).hide();
	$('#'+currentId+"Hit").css("opacity","1");
	countSuccess ++;
	correctCounter();
	console.log("hit");
	snowManClick.play();
}

function positionReset(currentId){
	
	$('#'+currentId).animate({top:snowBodyParts[l].sT,left:snowBodyParts[l].sL}, 200);
	
}

function correctCounter(){

 	gameThreeLive = false;
	
	if(countSuccess == 6){
		
		clearInterval(counter);
		
		$("#gameThreeElements #snowManTopOneHit").css({
		
			"background-position": "-4px -4px"

		});
		
		$("#gameThreeElements #snowManTopTwoHit").css({
			
			"background-position": "-10px -104px"
 
		});
		$("#gameThreeElements #snowManTopThreeHit").css({
			
			"background-position": "-10px -174px"
		    
		});
		
		setTimeout(gameThreeWon,1500);
	}
	
}

function gameThreetimer(){
		 gameThreeLive = true;
		 gameThreeTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameThreeTimer <= 0)
		 {		 
			clearInterval(counter);
			gameThreeLost();

		 }
}

function gameThreeWon(){
		 gameThreeLive = false;
		 gameThreeEnded = true;
		 gameThreeStar = true;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $("#gameThree").remove();
		 $("#gameThreeElements").remove();
}
	
function gameThreeLost(){
		 gameThreeLive = false;
		 gameThreeEnded = true;
		 gameThreeStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#gameThree").remove();
		 $("#gameThreeElements").remove();
		 
}