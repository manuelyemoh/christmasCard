var gameFourImages = [["assets/images/gameFour/bg2x.jpg",false]];
var gameFourTimer = 10;
var counter;
var gameFourEnded = false;
var gameFourStar = false;

function gameFourInit(){

	if(firstTimeArray[4] == true){
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameFour'><p>Start Game Instructions</p></div><div id='gameFourElements'><div id='abomSnowman'></div><div id='flick0'></div><div id='flick1'></div><div id='flick2'></div><div id='flick3'></div><div id='flick4'></div><div id='flick5'></div><div id='flick6'></div><div id='flick7'></div><div id='flick8'></div><div id='flick9'></div><div id='flick10'></div></div>" );
		
		$("#gameFour").css({	
		
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
		
		$("#gameFour p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameFourElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",

		});
		
		$("#gameFourElements #abomSnowman").css({
		
			width:"220px",
			height:"320px",
			backgroundColor:"pink",
			opacity:"0.5",
			top:"100px",
			left:"45px",
			position:"absolute"
		
		});
		
		$("#gameFourElements #flick0").css({

			width:"25px",
			height:"25px",
			top:"370px",
			left:"60px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick1").css({

			width:"25px",
			height:"25px",
			top:"320px",
			left:"70px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick2").css({

			width:"25px",
			height:"25px",
			top:"260px",
			left:"90px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick3").css({

			width:"25px",
			height:"25px",
			top:"210px",
			left:"80px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick4").css({

			width:"25px",
			height:"25px",
			top:"160px",
			left:"90px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick5").css({

			width:"25px",
			height:"25px",
			top:"150px",
			left:"150px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick6").css({

			width:"25px",
			height:"25px",
			top:"200px",
			left:"200px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick7").css({

			width:"25px",
			height:"25px",
			top:"260px",
			left:"200px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick8").css({

			width:"25px",
			height:"25px",
			top:"310px",
			left:"220px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick9").css({

			width:"25px",
			height:"25px",
			top:"350px",
			left:"230px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		$("#gameFourElements #flick10").css({

			width:"25px",
			height:"25px",
			top:"370px",
			left:"150px",
			backgroundColor:"blue",
			position:"absolute"

		});
		
		flickArray = [snowPart={
			part:"#flick0",
			sL:"45px",
			sR:"100px",
			},snowPart={
			part:"#flick1",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick2",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick3",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick4",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick5",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick6",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick7",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick8",
			sL:"15px",
			sR:"34px",
			},snowPart={
			part:"#flick9",
			sL:"15px",
			sR:"34px",
			},
				
		$("#gameFour").show();
		$("#gameInstructionBg").show();
		setTimeout(gameFourStart, 5000);
	
	}
	else{
		
		
		
	}
	
}

function gameFourStart(){
	
	$('#gameFour').hide();
	$("#gameInstructionBg").hide();
	
	for(i=0;i<=10;i++){
		
		Draggable.create(flickArray[i], {type:"x,y", edgeResistance:0, throwProps:true});
	
	}
	
}

function gameFourtimer(){

		 gameFourTimer --;
		 
		 $('#timer p').text(gameFourTimer);
		 if (gameFourTimer <= 0)
		 {		 
			clearInterval(counter);
			gameFourLost();

		 }
}

function gameFourWon(){
		
		 gameFourEnded = true;
		 gameFourStar = true;
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
	 
}
	
function gameThreeLost(){

		 gameFourEnded = true;
		 gameFourStar = false;
		 $("#resultsScreen").show();

}

