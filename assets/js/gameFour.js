var gameFourImages = [];
var gameFourColor = ["#bedbe5"]
var gameFourTimer = 10;
var counter;
var outsideArea = 0;
var gameFourEnded = false;
var gameFourStar = false;
var currentId;
var xPos = 0;
var yPos = 0;
var animatePartsStep = 0;
var lastChar;
var mouthAnimationSpeed = 125;
var spriteLocation;
var backgroundS;
var eyeStep = -69;
var t;

if (retina) {
	gameFourImages = ["assets/images/bg2x.jpg","assets/images/gameFour/mainSprite@2x.png","assets/images/gameFour/mouthAnimation@2x.png","assets/images/gameFour/eyesAnimation@2x.png","assets/images/gameFour/closeUpFace@2x.png"];
	spriteLocation = "assets/images/gameFour/mainSprite@2x.png";
	mouthLocation = "assets/images/gameFour/mouthAnimation@2x.png";
	eyesLocation = "assets/images/gameFour/eyesAnimation@2x.png";
	closeUpLocation = "assets/images/gameFour/closeUpFace@2x.png";
	closeUpS = "360px 640px";
	mouthS = "288px 890px";
	eyesS = "139px 273px";
	backgroundS = "420px 407px";
}
else {
	gameFourImages = ["assets/images/bg2x.jpg","assets/images/gameFour/mainSprite.png","assets/images/gameFour/mouthAnimation.png","assets/images/gameFour/eyesAnimation.png","assets/images/gameFour/closeUpFace.png"];
	spriteLocation = "assets/images/gameFour/mainSprite.png";
	mouthLocation = "assets/images/gameFour/mouthAnimation.png";
	eyesLocation = "assets/images/gameFour/eyesAnimation.png";
	closeUpLocation = "assets/images/gameFour/closeUpFace.png";
	closeUpS = "360px 640px";
	mouthS = "288px 890px";
	eyesS = "139px 273px";
	backgroundS = "420px 407px";

}

function gameFourInit(){

		animatePartsStep = 0;
		outsideArea = 0;
		gameFourEnded = false;
		gameFourStar = false;
		
		$ ("#gameNavigation" ).append( "<div id='abomSnowmanCloseUp'></div>" );
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameFour'><p>Start Game Instructions</p></div><div id='gameFourElements'><div id='abomSnowman'></div><div id='abomSnowmanMouth'></div><div id='abomSnowmanEyes'></div><div id='flick0'></div><div id='flick1'></div><div id='flick2'></div><div id='flick3'></div><div id='flick4'></div><div id='flick5'></div><div id='flick6'></div><div id='flick7'></div><div id='flick8'></div><div id='flick9'></div><div id='flick10'></div><div id='abBot'><div id='whiteSpace'></div></div>" );
		
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
		
		$("#gameNavigation #abomSnowmanCloseUp").css({

			backgroundImage: "url("+closeUpLocation+")",
		    backgroundSize: closeUpS,
		    display: "block",
		    left: "0",
		    position: "absolute",
		    top: "0",
		    overflow: "hidden",
		    width: "100%",
		    height: "100%",
		    zIndex: "1",
		    display:"none"

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
			height:"364px",
			backgroundColor:"pink",
			background: 'url('+ spriteLocation +') no-repeat scroll -1px 6px rgba(0, 0, 0, 0)',
			backgroundSize: backgroundS,
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
			background: 'url('+ mouthLocation +') no-repeat scroll -14px -8px rgba(0, 0, 0, 0)',
			backgroundSize: mouthS,
			opacity:"1",
			top:"200px",
			left:"98px",
			position:"absolute",
			zIndex:"3"
		
		});
		
		$("#gameFourElements #abomSnowmanEyes").css({
		
			width:"140px",
			height:"14px",
			background: 'url('+ eyesLocation +') no-repeat scroll 0px '+ eyeStep +'px rgba(0, 0, 0, 0)',
			backgroundSize: eyesS,
			opacity:"1",
			top:"170px",
			left:"87px",
			position:"absolute",
			zIndex:"2"
		
		});
		
  mouthArray = [mouthPart={
		  height:"138px",
		  top:"200px",
		  bPosL:"-14px",
		  bPosT:"-8px"
  },mouthPart={/**/
		  height:"138px",
		  top:"200px",
		  bPosL:"-14px",
		  bPosT:"-8px"
  },mouthPart={/**/
		  height:"112px",
		  top:"212px",
		  bPosL:"-14px",
		  bPosT:"-560px"
  },mouthPart={/**/
		  height:"63px",
		  top:"236px",
		  bPosL:"-14px",
		  bPosT:"-670px"
  },mouthPart={/**/
		  height:"53px",
		  top:"243px",
		  bPosL:"-14px",
		  bPosT:"-734px"
  },mouthPart={/**/
		  height:"44px",
		  top:"246px",
		  bPosL:"-14px",
		  bPosT:"-784px"
  },mouthPart={/**/
		  height:"44px",
		  top:"246px",
		  bPosL:"-14px",
		  bPosT:"-784px"
  },mouthPart={/*here*/
		  height:"44px",
		  top:"249px",
		  bPosL:"-159px",
		  bPosT:"-686px"
  },mouthPart={/**/
		  height:"46px",
		  top:"246px",
		  bPosL:"-159px",
		  bPosT:"-634px"  
  },mouthPart={/**/
		  height:"56px",
		  top:"242px",
		  bPosL:"-159px",
		  bPosT:"-574px"
  },mouthPart={/**/
		  height:"81px",
		  top:"228px",
		  bPosL:"-159px",
		  bPosT:"-492px"
  },mouthPart={
		  height:"96px",
		  top:"221px",
		  bPosL:"-159px",
		  bPosT:"-396px"
  },mouthPart={
		  height:"116px",
		  top:"221px",
		  bPosL:"-159px",
		  bPosT:"-276px"
  },mouthPart={
		  height:"126px",
		  top:"206px",
		  bPosL:"-159px",
		  bPosT:"-146px"
  },mouthPart={
		  height:"133px",
		  top:"202px",
		  bPosL:"-159px",
		  bPosT:"-9px"
  }]	
	
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
			bPosL:"-166px",
			bPosT:"-360px",
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
			height:"39px",
			bPosL:"-222px",
			bPosT:"-362px",
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
			bPosL:"-302px",
			bPosT:"-351px",
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
			bPosL:"-339px",
			bPosT:"-353px",
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
			bPosL:"-301px",
			bPosT:"-293px",
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
			bPosL:"-361px",
			bPosT:"-298px",
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
			bPosL:"-302px",
			bPosT:"-228px",
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
			bPosL:"-352px",
			bPosT:"-234px",
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
			bPosL:"-354px",
			bPosT:"-171px",
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
			bPosL:"-303px",
			bPosT:"-165px",
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
				"backgroundSize": backgroundS,
				"position":"absolute",
				"opacity":"1",
				"zIndex":flickArray[i].index
			
			})
			
		}
		animateParts(animatePartsStep);
		$("#gameFour").show();
		$("#gameInstructionBg").show();
		setTimeout(gameFourStart, 1000);
	
}

function gameFourStart(){
	
	$('#gameFour').hide();
	$("#gameInstructionBg").hide();
	
	$('#timerInside').animate({width:"298px"},0);
	$('#timer').show();
	
	jQuery( "#gameFourElements #abomSnowmanMouth" ).on( "tap", function() {
	
		animateManLost();
		clearTimeout(t);
		
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
	        	
	        	handleSet(currentId,currentThis,lastChar)

        }, 
      });
      
    }
	
	counter=setInterval(gameFourtimer, 1000);
	gameFourtimer();
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

function animateParts(animatePartsStep){
	
	eyeStep = eyeStep - 17;
	
	if(eyeStep <= -273){
		
		eyeStep = -69;
		
	}
	
	$("#gameFourElements #abomSnowmanMouth").css({
		
		width:"120px",
		height:mouthArray[animatePartsStep].height,
		backgroundPosition: mouthArray[animatePartsStep].bPosL +' '+ mouthArray[animatePartsStep].bPosT,
		backgroundSize: mouthS,
		opacity:"1",
		top:mouthArray[animatePartsStep].top,
		left:"98px",
		position:"absolute",
		zIndex:"2"
		
	});
	
	$("#gameFourElements #abomSnowmanEyes").css({
		
		backgroundPosition: '0px '+ eyeStep +'px',
		backgroundSize: eyesS
		
	});
	
	animatePartsStep++;
	
	t = setTimeout(function(){animateParts(animatePartsStep)},mouthAnimationSpeed);
	
	if(animatePartsStep == 12){
		
		animatePartsStep = 0;
		
	}
	
}
 
function animateManWon(){
	
	
	clearInterval(counter);
	setTimeout(gameFourWon,2000);

	
}

function animateManLost(){
	
	
	clearInterval(counter);
	
	$("#gameNavigation #abomSnowmanCloseUp").css({


		    zIndex: "11",
		    display:"inline"

	});
	
	setTimeout(gameFourLost,3000);

	
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
		 $("#gameAreaResults").show();
		 $("#abomSnowmanCloseUp").remove();
		 $("#resultsScreen #goldStar").show();
		 $('#gameFourElements').remove();

		
}
	
function gameFourLost(){

		 gameFourEnded = true;
		 gameFourStar = false;
		 $("#gameAreaResults").show();
		 $("#abomSnowmanCloseUp").remove();
		 $('#gameFourElements').remove();
		 
}