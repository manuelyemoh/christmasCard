var gameFourImages = ["assets/images/bg2x.jpg","#bedbe5"];
var gameFourTimer = 10;
var counter;
var outsideArea = 0;
var gameFourEnded = false;
var gameFourStar = false;
var currentId;
var xPos = 0;
var yPos = 0;
var lastChar;
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

function gameFourInit(){

		outsideArea = 0;
		gameFourEnded = false;
		gameFourStar = false;
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameFour'><p>Start Game Instructions</p></div><div id='gameFourElements'><div id='abomSnowman'></div><div id='abomSnowmanMouth'></div><div id='flick0'></div><div id='flick1'></div><div id='flick2'></div><div id='flick3'></div><div id='flick4'></div><div id='flick5'></div><div id='flick6'></div><div id='flick7'></div><div id='flick8'></div><div id='flick9'></div><div id='flick10'></div><div id='abBot'><div id='whiteSpace'></div></div>" );
		
		$("#gameFour").css({	
		
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
		
		$("#gameFourElements #abBot").css({
				
			backgroundImage:"url(assets/images/gameFour/abBot.png)",
		    height: "54px",
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "388px",
		    width: "360px",
		    zIndex: "1"
			
		});
		
		$("#gameFourElements #abBot #whiteSpace").css({
			
			backgroundColor: "white",
		    height: "800px",
		    left: "0px",
		    opacity: "1",
		    position: "absolute",
		    top: "53px",
		    width: "360px",
		    zIndex: "1"
		
		});
		
		$("#gameFourElements #abomSnowman").css({
		
			width:"270px",
			height:"370px",
			backgroundColor:"pink",
			background: 'url('+ spriteLocation +') no-repeat scroll -309px -359px rgba(0, 0, 0, 0)',
			backgroundSize: backgroundS+" "+backgroundS,
			opacity:"1",
			top:"75px",
			left:"25px",
			position:"absolute",
			zIndex:"2"
		
		});
		
		$("#gameFourElements #abomSnowmanMouth").css({
		
			width:"120px",
			height:"138px",
			backgroundColor:"green",
			background: 'url('+ spriteLocation +') no-repeat scroll -9px -489px rgba(0, 0, 0, 0)',
			backgroundSize: backgroundS+" "+backgroundS,
			opacity:"0.5",
			top:"200px",
			left:"98px",
			position:"absolute",
			zIndex:"2"
		
		});	
	
  flickArray = [snowPart={
			part:"flick0",
			xL:"-110",
			xR:"141",
			yT:"0",
			yB:"354",
			sL:"141px",
			sT:"80px",
			width:"45px",
			height:"40px",
			bPosL:"-10px",
			bPosT:"-426px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick1",
			xL:"-28",
			xR:"237",
			yT:"-72",
			yB:"248",
			sL:"54px",
			sT:"158px",
			width:"20px",
			height:"35px",
			bPosL:"-62px",
			bPosT:"-429px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick2",
			xL:"-215",
			xR:"51",
			yT:"-74",
			yB:"251",
			sL:"239px",
			sT:"148px",
			width:"30px",
			height:"49px",
			bPosL:"-86px",
			bPosT:"-417px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick3",
			xL:"-0",
			xR:"260",
			yT:"-149",
			yB:"175",
			sL:"24px",
			sT:"224px",
			width:"28px",
			height:"45px",
			bPosL:"-122px",
			bPosT:"-417px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick4",
			xL:"-221",
			xR:"41",
			yT:"-150",
			yB:"187",
			sL:"253px",
			sT:"226px",
			width:"28px",
			height:"54px",
			bPosL:"-156px",
			bPosT:"-417px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick5",
			xL:"16",
			xR:"265",
			yT:"287",
			yB:"83",
			sL:"36px",
			sT:"374px",
			width:"18px",
			height:"40px",
			bPosL:"-187px",
			bPosT:"-422px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick6",
			xL:"-96",
			xR:"175",
			yT:"-285",
			yB:"50",
			sL:"123px",
			sT:"361px",
			width:"33px",
			height:"47px",
			bPosL:"-210px",
			bPosT:"-413px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick7",
			xL:"-202",
			xR:"75",
			yT:"-280",
			yB:"64",
			sL:"220px",
			sT:"358px",
			width:"36px",
			height:"41px",
			bPosL:"-244px",
			bPosT:"-421px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick8",
			xL:"-239",
			xR:"33",
			yT:"-222",
			yB:"102",
			sL:"272px",
			sT:"308px",
			width:"23px",
			height:"37px",
			bPosL:"-283px",
			bPosT:"-426px",
			color:"blue",
			index:"4"
			},snowPart={
			part:"flick9",
			xL:"9",
			xR:"272",
			yT:"-235",
			yB:"88",
			sL:"18px",
			sT:"313px",
			width:"28px",
			height:"49px",
			bPosL:"-275px",
			bPosT:"-371px",
			color:"blue",
			index:"4"
			}];
				
		for(i=0;i<=9;i++){

			$('#gameFourElements '+'#'+flickArray[i].part).css({

				"width":flickArray[i].width,
				"height":flickArray[i].height,
				"top":flickArray[i].sT,
				"left":flickArray[i].sL,
				"backgroundColor":flickArray[i].color,
				"background": 'url('+ spriteLocation +') no-repeat scroll '+ flickArray[i].bPosL +' '+ flickArray[i].bPosT +' rgba(0, 0, 0, 0)',
				"backgroundSize": backgroundS+" "+backgroundS,
				"position":"absolute",
				"opacity":"1",
				"zIndex":flickArray[i].index
			
			})
			
		}
				
		$("#gameFour").show();
		$("#gameInstructionBg").show();
		setTimeout(gameFourStart, 5000);
	
}

function gameFourStart(){
	
	$('#gameFour').hide();
	$("#gameInstructionBg").hide();
	
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	
	jQuery( "#gameFourElements #abomSnowmanMouth" ).on( "tap", function() {
	
		animateManLost();
		
	});
	
	for(i=0;i<=9;i++){
	
	Draggable.create('#'+flickArray[i].part, {type:"x,y", edgeResistance:0, throwProps:true,
		onDragStart: function() { 
			
			
			
			
		},
        onDragEnd: function() {
	        
	        	//console.log("xPOS-->"+this._eventTarget._gsTransform.x);
	        	//console.log("yPOS-->"+this._eventTarget._gsTransform.y);
	        	
	        	//xPos = this._eventTarget._gsTransform.x;
	        	//yPos = this._eventTarget._gsTransform.y;
	        	
	        	//console.log(xPos);
	        	//console.log(yPos);
	        	
	        	currentId = this._eventTarget.id;
	        	currentThis = this;
	        	
	        	lastChar = currentId.slice(-1);
	        		        	
	        	//console.log(currentId);
	        	//console.log(lastChar);
	        	
	        	handleSet(currentId,currentThis,lastChar)

        }, 
      });
      
    }
	
	//counter=setInterval(gameFourtimer, 1000);
	//gameFourtimer();
}

function handleSet(name,thisId,charLast){

	setTimeout(function(){
	        	
    		xPos = thisId._eventTarget._gsTransform.x;
        	yPos = thisId._eventTarget._gsTransform.y;
        	
        	if(xPos >= flickArray[charLast].xL && xPos <= flickArray[charLast].xR && yPos >= flickArray[charLast].yT && yPos <= flickArray[charLast].yB){

	        	TweenLite.to("#"+name, 1, {css:{transform:"translateX(0px) translateX(0px)"}});
	        	
        	}
        	
        	else{

	        	outsideArea++
	        	TweenLite.to("#"+name, 0.5, {scaleX:0,scaleY:0,onComplete:function(){
		        	
		        	$("#"+name).hide();
		        	
	        	}});
	        	
	        	if(outsideArea >= 10){
		        	
		        	animateManWon();
		        	
	        	}
        	}
        	
    	},500)
	
}

function animateManWon(){
	
	
	clearInterval(counter);
	setTimeout(gameFourWon,2000);

	
}

function animateManLost(){
	
	
	clearInterval(counter);
	setTimeout(gameFourLost,2000);

	
}

function gameFourtimer(){

		 gameFourTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},500);
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
		 for(i=0;i<=9;i++){

			$('#gameFourElements '+'#'+flickArray[i].part).remove();
		
		}
		$("#gameFourElements #abBot").remove();
		$("#gameFourElements #abomSnowman").remove();
		$("#gameFourElements #abomSnowmanMouth").remove();
		
}
	
function gameFourLost(){

		 gameFourEnded = true;
		 gameFourStar = false;
		 $("#resultsScreen").show();
		 for(i=0;i<=9;i++){

			$('#gameFourElements '+'#'+flickArray[i].part).remove();
		
		}
		$("#gameFourElements #abBot").remove();
		$("#gameFourElements #abomSnowman").remove();
		$("#gameFourElements #abomSnowmanMouth").remove();
}