var gameThreeImages = [["assets/images/gameThree/bg2x.jpg",false]];
var gameThreeTimer = 10;
var counter;
var countSuccess = 0;
var gameThreeEnded = false;
var gameThreeStar = false;
var currentlyDown = false;

function gameThreeInit(){
	
	if(firstTimeArray[3] == true){
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameThree'><p>Start Game Instructions</p></div><div id='gameThreeElements'><div id='snowManBodyOne'></div><div id='snowManBodyTwo'></div><div id='snowManBodyThree'></div><div id='snowManMiddleOne'></div><div id='snowManMiddleTwo'></div><div id='snowManMiddleThree'></div><div id='snowManTopOne'></div><div id='snowManTopTwo'></div><div id='snowManTopThree'></div><div id='snowManMiddleOneHit'></div><div id='snowManMiddleTwoHit'></div><div id='snowManMiddleThreeHit'></div><div id='snowManTopOneHit'></div><div id='snowManTopTwoHit'></div><div id='snowManTopThreeHit'></div></div>");

		$("#gameThree").css({	
		
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
			top:"0px",

		});
		
		$("#gameThreeElements #snowManBodyOne").css({
				
			width:"65px",
			height:"65px",
			top:"190px",
			left:"20px",
			backgroundColor:"blue",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManBodyTwo").css({
				
			width:"65px",
			height:"65px",
			top:"180px",
			left:"120px",
			backgroundColor:"green",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManBodyThree").css({
				
			width:"65px",
			height:"65px",
			top:"190px",
			left:"220px",
			backgroundColor:"red",
			position:"absolute"
			
		});
		$("#gameThreeElements #snowManMiddleOne").css({
				
			width:"55px",
			height:"55px",
			top:"340px",
			left:"190px",
			backgroundColor:"blue",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManMiddleOneHit").css({
				
			width:"55px",
			height:"55px",
			top:"140px",
			left:"25px",
			backgroundColor:"blue",
			position:"absolute",
			opacity:"0.1"
			
		});
		
		$("#gameThreeElements #snowManMiddleTwo").css({
				
			width:"55px",
			height:"55px",
			top:"340px",
			left:"20px",
			backgroundColor:"green",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManMiddleTwoHit").css({
				
			width:"55px",
			height:"55px",
			top:"125px",
			left:"125px",
			backgroundColor:"green",
			position:"absolute",
			opacity:"0.1"
			
		});
		
		$("#gameThreeElements #snowManMiddleThree").css({
				
			width:"55px",
			height:"55px",
			top:"270px",
			left:"30px",
			backgroundColor:"red",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManMiddleThreeHit").css({
				
			width:"55px",
			height:"55px",
			top:"135px",
			left:"226px",
			backgroundColor:"red",
			position:"absolute",
			opacity:"0.1"
			
		});
		
		$("#gameThreeElements #snowManTopOne").css({
				
			width:"55px",
			height:"55px",
			top:"290px",
			left:"110px",
			backgroundColor:"blue",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManTopOneHit").css({
				
			width:"55px",
			height:"55px",
			top:"84px",
			left:"25px",
			backgroundColor:"blue",
			position:"absolute",
			opacity:"0.1"
		});
		
		$("#gameThreeElements #snowManTopTwo").css({
				
			width:"55px",
			height:"55px",
			top:"270px",
			left:"180px",
			backgroundColor:"green",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManTopTwoHit").css({
				
			width:"55px",
			height:"55px",
			top:"69px",
			left:"125px",
			backgroundColor:"green",
			position:"absolute",
			opacity:"0.1"
		});
		
		$("#gameThreeElements #snowManTopThree").css({
				
			width:"55px",
			height:"55px",
			top:"270px",
			left:"250px",
			backgroundColor:"red",
			position:"absolute"
			
		});
		
		$("#gameThreeElements #snowManTopThreeHit").css({
				
			width:"55px",
			height:"55px",
			top:"79px",
			left:"226px",
			backgroundColor:"red",
			position:"absolute",
			opacity:"0.1"
		});
		
		/* - - -
		xL = Maximum Left
		XR = Maximum Right
		yT = Maximum Top
		yB = maximum Bottom
		sL = snapBack Left
		sT = snapBack Top 
		- - - */
		
			snowBodyParts = [snowPart={
			part:"snowManTopOne",
			xL:"15px",
			xR:"34px",
			yT:"75px",
			yB:"95px",
			sL:"110px",
			sT:"290px"
			},snowPart={
			part:"snowManTopTwo",
			xL:"114px",
			xR:"134px",
			yT:"61px",
			yB:"79px",
			sL:"180px",
			sT:"270px"
			},snowPart={
			part:"snowManTopThree",
			xL:"218px",
			xR:"236px",
			yT:"70px",
			yB:"90px",
			sL:"250px",
			sT:"270px"
			},snowPart={
			part:"snowManMiddleOne",
			xL:"15px",
			xR:"32px",
			yT:"130px",
			yB:"148px",
			sL:"190px",
			sT:"340px"
			},snowPart={
			part:"snowManMiddleTwo",
			xL:"114px",
			xR:"133px",
			yT:"118px",
			yB:"133px",
			sL:"20px",
			sT:"340px"
			},snowPart={
			part:"snowManMiddleThree",
			xL:"217px",
			xR:"232px",
			yT:"128px",
			yB:"142px",
			sL:"30px",
			sT:"270px"}];
			
		$("#gameThree").show();
		$("#gameInstructionBg").show();
		setTimeout(gameThreeStart, 5000);
	}
	else{

	}

}

function gameThreeStart(){

	$('#gameThree').hide();
	$("#gameInstructionBg").hide();
	$('#timer').show();
	
	for(i=0;i<=5;i++){
	
		$('#'+snowBodyParts[i].part).on( "vmousedown", function (e){
		
			 currentlyDown = true;
			 
		});
		
		$('#'+snowBodyParts[i].part).on( "vmousemove", function (event){
			
			if(currentlyDown == true){
				
				currentId = $(this).attr('id');
				x = event.pageX - $('#gameArea').offset().left-20;
				y = event.pageY - $('#gameArea').offset().top-20;
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
				
				console.log("left -->"+$('#'+currentId).css("left"));
				console.log("top -->"+$('#'+currentId).css("top"));

				
				if($('#'+currentId).css("left") >= snowBodyParts[l].xL && $('#'+currentId).css("left") <= snowBodyParts[l].xR && $('#'+currentId).css("top") >= snowBodyParts[l].yT && $('#'+currentId).css("top") <= snowBodyParts[l].yB){
					
					
					$('#'+currentId).hide();
					$('#'+currentId+"Hit").css("opacity","1");
					countSuccess ++;
					correctCounter();
					
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
		
		gameThreeWon();
		
	}
	
}

function gameThreetimer(){

		 gameThreeTimer --;
		 
		 $('#timer p').text(gameThreeTimer);
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
		 
		 for(i=0;i<=5;i++){
		 
		 	$('#'+snowBodyParts[i].part).remove();
		 
		 }
		 
}
	
function gameThreeLost(){

		 gameThreeEnded = true;
		 gameThreeStar = false;
		 $("#resultsScreen").show();
		 
		 for(i=0;i<=5;i++){
		 
		 	$('#'+snowBodyParts[i].part).remove();
		 
		 }
}

