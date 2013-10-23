var gameThreeImages = ["assets/images/bg2x.jpg","#c0dce6"];
var gameThreeTimer = 11;
var counter;
var countSuccess = 0;
var gameThreeEnded = false;
var gameThreeStar = false;
var currentlyDown = false;
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

function gameThreeInit(){

	 gameThreeTimer = 11;
	 countSuccess = 0;
	 gameThreeEnded = false;
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameThree'><p>Start Game Instructions</p></div><div id='gameThreeElements'><div id='snowManBodyOne'></div><div id='snowManBodyTwo'></div><div id='snowManBodyThree'></div><div id='snowManMiddleOne'></div><div id='snowManMiddleTwo'></div><div id='snowManMiddleThree'></div><div id='snowManTopOne'></div><div id='snowManTopTwo'></div><div id='snowManTopThree'></div><div id='snowManMiddleOneHit'></div><div id='snowManMiddleTwoHit'></div><div id='snowManMiddleThreeHit'></div><div id='snowManTopOneHit'></div><div id='snowManTopTwoHit'></div><div id='snowManTopThreeHit'></div><div id='snowManMount'><div id='whiteSpace'></div></div></div>");

		$("#gameThree").css({	
		
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
		
		$("#gameThree p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameThreeElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px"

		});
				
		$("#gameThreeElements #snowManMiddleOneHit").css({
				
			background: "url("+ spriteLocation +") -140px -67px ",
			backgroundSize: backgroundS+" "+backgroundS,
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
				
			background: "url("+ spriteLocation +") -143px -150px ",
			backgroundSize: backgroundS+" "+backgroundS,
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
				
			background: "url("+ spriteLocation +") -150px -230px ",
			backgroundSize: backgroundS+" "+backgroundS,
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
				
			background: "url("+ spriteLocation +") -74px -54px ",
			backgroundSize: backgroundS+" "+backgroundS,
			//backgroundColor:"blue",
		    height: "75px",
		    left: "19px",
		    opacity: "0.1",
		    position: "absolute",
		    top: "90px",
		    width: "67px",
		    zIndex: "2"
		    
		});
		
		$("#gameThreeElements #snowManTopTwoHit").css({
				
			background: "url("+ spriteLocation +") -76px -154px ",
			backgroundSize: backgroundS+" "+backgroundS,
			//backgroundColor:"green",
		    height: "55px",
		    left: "133px",
		    opacity: "0.1",
		    position: "absolute",
		    top: "115px",
		    width: "55px",
		    zIndex: "2"
		    
		});
		$("#gameThreeElements #snowManTopThreeHit").css({
				
			background: "url("+ spriteLocation +") -77px -224px ",
			backgroundSize: backgroundS+" "+backgroundS,
			//backgroundColor:"red",
		    height: "53px",
		    left: "236px",
		    opacity: "0.1",
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
			xL:"3",
			xR:"35",
			yT:"73",
			yB:"107",
			sL:"120px",
			sT:"290px",
			color:"blue",
			width:"67px",
			height:"75px",
			bPosL:"-74px",
			bPosT:"-54px"
			},snowPart={
			part:"snowManTopTwo",
			xL:"117",
			xR:"147",
			yT:"98",
			yB:"132",
			sL:"250px",
			sT:"270px",
			color:"pink",
			width:"55px",
			height:"55px",
			bPosL:"-76px",
			bPosT:"-154px"
			},snowPart={
			part:"snowManTopThree",
			xL:"220",
			xR:"252",
			yT:"129",
			yB:"164",
			sL:"185px",
			sT:"260px",
			color:"red",
			width:"53px",
			height:"53px",
			bPosL:"-77px",
			bPosT:"-224px"
			},snowPart={
			part:"snowManMiddleOne",
			xL:"-17",
			xR:"14",
			yT:"128",
			yB:"164",
			sL:"190px",
			sT:"340px",
			color:"blue",
			width:"114px",
			height:"59px",
			bPosL:"-140px",
			bPosT:"-67px"
			},snowPart={
			part:"snowManMiddleTwo",
			xL:"90",
			xR:"122",
			yT:"140",
			yB:"175",
			sL:"20px",
			sT:"340px",
			color:"green",
			width:"107px",
			height:"60px",
			bPosL:"-143px",
			bPosT:"-150px"
			},snowPart={
			part:"snowManMiddleThree",
			xL:"201",
			xR:"233",
			yT:"171",
			yB:"199",
			sL:"30px",
			sT:"270px",
			color:"red",
			width:"82px",
			height:"53px",
			bPosL:"-150px",
			bPosT:"-230px"
			},snowPart={
			part:"snowManBodyOne",
			sL:"10px",
			sT:"180px",
			color:"blue",
			width:"89px",
			height:"89px",
			bPosL:"-252px",
			bPosT:"-53px"
			},snowPart={
			part:"snowManBodyTwo",
			sL:"114px",
			sT:"190px",
			color:"green",
			width:"94px",
			height:"81px",
			bPosL:"-252px",
			bPosT:"-144px"
			},snowPart={
			part:"snowManBodyThree",
			sL:"220px",
			sT:"210px",
			color:"red",
			width:"65px",
			height:"55px",
			bPosL:"-265px",
			bPosT:"-229px"
			}];

			for(f=0;f<=8;f++){
			
				$('#gameThreeElements '+'#'+snowBodyParts[f].part).css({
					
					"width":snowBodyParts[f].width,
					"height":snowBodyParts[f].height,
					"top":snowBodyParts[f].sT,
					"left":snowBodyParts[f].sL,
					"backgroundColor":snowBodyParts[f].color,
					"position":"absolute",
					"opacity":"0.8",
					"zIndex":"2"
					
				});
				
				$('#gameThreeElements '+'#'+snowBodyParts[f].part).css("background", 'url('+ spriteLocation +') no-repeat scroll '+ snowBodyParts[f].bPosL +' '+ snowBodyParts[f].bPosT +' rgba(0, 0, 0, 0)');
				$('#gameThreeElements '+'#'+snowBodyParts[f].part).css("backgroundSize",backgroundS+" "+backgroundS);
				
			}		
		
		$("#gameThree").show();
		$("#gameInstructionBg").show();
		setTimeout(gameThreeStart, 5000);
	


}

function gameThreeStart(){

	$('#gameThree').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	
	for(i=0;i<=5;i++){
	
		$('#'+snowBodyParts[i].part).on( "vmousedown", function (e){
		
			 currentlyDown = true;
			 
		});
		
		$('#'+snowBodyParts[i].part).on( "vmousemove", function (event){
			
			if(currentlyDown == true){
				
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
					
					
					$('#'+currentId).hide();
					$('#'+currentId+"Hit").css("opacity","1");
					countSuccess ++;
					correctCounter();
					//console.log("hit");
					
				}
				else{
					
					$('#'+currentId).css("left",snowBodyParts[l].sL)
					$('#'+currentId).css("top",snowBodyParts[l].sT)
				}
				
			}
			
			}
			
		});
	
	}

	counter=setInterval(gameThreetimer, 1000);
	gameThreetimer();
	
}

function correctCounter(){
	
	if(countSuccess == 6){
		
		clearInterval(counter);
		
		$("#gameThreeElements #snowManTopOneHit").css({
		
			"background-position": "-4px -54px",

		});
		
		$("#gameThreeElements #snowManTopTwoHit").css({
			
			"background-position": "-10px -154px",	
 
		});
		$("#gameThreeElements #snowManTopThreeHit").css({
			
			"background-position": "-10px -224px",
		    
		});
		
		setTimeout(gameThreeWon,1500);
	}
	
}

function gameThreetimer(){

		 gameThreeTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameThreeTimer <= 0)
		 {		 
			clearInterval(counter);
			gameThreeLost();

		 }
}

function gameThreeWon(){
		
		 gameThreeEnded = true;
		 gameThreeStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $("#gameThree").remove();
		 $("#gameThreeElements").remove();
}
	
function gameThreeLost(){

		 gameThreeEnded = true;
		 gameThreeStar = false;
		 $("#resultsScreen").show();
		 $("#gameThree").remove();
		 $("#gameThreeElements").remove();
		 
}

