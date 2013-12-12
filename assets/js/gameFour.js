var gameFourImages = [];
var gameFourColor = ["#C9E3F2"];
var gameFourTimer = 10;
var counter;
var outsideArea = 0;
var gameFourLive = false;
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

var abRoar = new Howl({urls: ['assets/sounds/abFail.mp3', 'assets/sounds/abFail.ogg', 'assets/sounds/abFail.aac']});
var flickSound = new Howl({urls: ['assets/sounds/flick.mp3', 'assets/sounds/flick.ogg', 'assets/sounds/flick.aac']});

if (retina) {
	gameFourImages = ["assets/images/bg2x.png","assets/images/gameFour/mainSprite@2x.png","assets/images/gameFour/mouthAnimation@2x.png","assets/images/gameFour/eyesAnimation@2x.png","assets/images/gameFour/closeUpFace@2x.png","assets/images/results/elfDancing@2x.jpg","assets/images/results/abWinSprite@2x.jpg","assets/images/results/abLostSprite@2x.jpg","assets/images/results/elfInTheSnow@2x.jpg"];
	spriteLocation = "assets/images/gameFour/mainSprite@2x.png";
	inLocation = "assets/images/instructionImages@2x.png";
	mouthLocation = "assets/images/gameFour/mouthAnimation@2x.png";
	eyesLocation = "assets/images/gameFour/eyesAnimation@2x.png";
	closeUpLocation = "assets/images/gameFour/closeUpFace@2x.png";
	closeUpS = "360px 640px";
	mouthS = "288px 890px";
	eyesS = "139px 273px";
	backgroundS = "420px 407px";
}
else {
	gameFourImages = ["assets/images/bg2x.png","assets/images/gameFour/mainSprite.png","assets/images/gameFour/mouthAnimation.png","assets/images/gameFour/eyesAnimation.png","assets/images/gameFour/closeUpFace.png","assets/images/results/elfDancing.jpg","assets/images/results/abWinSprite.jpg","assets/images/results/abLostSprite.jpg","assets/images/results/elfInTheSnow.jpg"];
	spriteLocation = "assets/images/gameFour/mainSprite.png";
	inLocation = "assets/images/instructionImages.png";
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
		gameFourLive = false;
		mouthAnimationSpeed = 125;
		eyeStep = -69;
		
		$("#gameNavigation #gameArea" ).append( "<div id='abomSnowmanCloseUp'></div>" );
		//$("#gameNavigation").append("<div id='previewIn'>");
	
		$( "#gameNavigation #gameArea" ).append( "<div id='gameFour'><p>"+mainCopy[2].lineOne+"</p><p><span>"+mainCopy[2].span+" "+"</span>"+mainCopy[2].lineTwo+"</p></div><div id='gameFourElements'><div id='abomSnowman'></div><div id='abomSnowmanMouth'></div><div id='abomSnowmanEyes'></div><div id='flick0'></div><div id='flick1'></div><div id='flick2'></div><div id='flick3'></div><div id='flick4'></div><div id='flick5'></div><div id='flick6'></div><div id='flick7'></div><div id='flick8'></div><div id='flick9'></div><div id='flick10'></div><div id='abBot'><div id='whiteSpace'></div></div>" );
		
		/*$("#previewIn").css({	
		
			background: "url(assets/images/gameFour/previewInstructions.jpg)",
			backgroundSize:"360px 640px",
			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			left:"0px",
			zIndex:"9"
		
		});*/
		
		$("#gameFour").css({	
		
			top: "73px",
			width: "280px",
			color: "white",
			textAlign: "center",
			left: "20px",
			position: "absolute",
			zIndex:"10"
			
		}); 
		
		$("#gameFour p").css({
			
			fontFamily:"gerogia",
			letterSpacing:"0.5px",
			fontSize:"20px",
			lineHeigh:"23px",
			margin: "0",
			padding: "0",
			position: "relative",
			top: "5px"
			
		});
		
		$("#gameFour p span").css({
			
			
			fontSize:"20px",
			fontWeight:"bold",
			color:"#f74a4a"
				
		});
		
		$("#gameFour p:last").css({
			
			top:"26px",
			letterSpacing:"0.7px",
			lineHeight:"22px",
			width:"240px",
			left:"21px"
	
		});
		
		$("#gameNavigation #abomSnowmanCloseUp").css({

			backgroundImage: "url("+closeUpLocation+")",
		    backgroundSize: closeUpS,
		    display: "block",
		    left: "-20px",
		    position: "absolute",
		    top: "-75px",
		    width: "360px",
		    height: "640px",
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
			width:"38px",
			height:"45px",
			bPosL:"-335px",
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
		
		$("#gameFour").show();
		$("#gameInstructionBg").show();
		$("#startGame").css({
			display:"inline"
		})
		//setTimeout(gameFourStart, 5000);
	
}

function gameFourStart(){
	
	animateParts(animatePartsStep);
	
	setTimeout(function(){
		
		  $('#abomSnowmanMouth').css({display:"inline"})
		
	},1500);

	$('#gameFour').hide();
	$("#gameInstructionBg").hide();
	
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	
	setTimeout(function(){
		
		jQuery( "#gameFourElements #abomSnowmanMouth" ).on( "tap", function() {
		
			animateManLost();
			clearTimeout(t);
			for(g=0;g<=9;g++){
				
				$('#gameFourElements '+'#'+flickArray[g].part).remove();
				
			}
			
		});
		
	},1500);
	
	setTimeout(function(){
	
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
		        	flickSound.play();
	        }, 
	      });
	      
	    }
    
    },500);
	
	counter=setInterval(gameFourtimer, 1500);
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
	gameFourLive = false;
	
}

function animateManLost(){
	
	gameFourLive = false;
	clearInterval(counter);
	
	$("#gameNavigation #abomSnowmanCloseUp").css({


		    zIndex: "11",
		    display:"inline"

	});
	
	abRoar.play();
	
	setTimeout(gameFourLost,4000);
	
}

function gameFourtimer(){
		 gameFourLive = true;
		 gameFourTimer --;
		 
		 $('#timerInside').animate({width:"-=30px"},1500);
		 if (gameFourTimer <= 0)
		 {	
		 	gameFourLive = false;
			clearInterval(counter);
			gameFourLost();

		 }
}

function gameFourWon(){

		 clearInterval(t);
		 gameFourLive = false;
		 gameFourEnded = true;
		 gameFourStar = true;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#abomSnowmanCloseUp").remove();
		 $("#resultsScreen #goldStar").show();
		 $('#gameFour').remove();
		 $('#gameFourElements').remove();

}
	
function gameFourLost(){

		 clearInterval(t);
         gameFourLive = false;
		 gameFourEnded = true;
		 gameFourStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#abomSnowmanCloseUp").remove();
		 $('#gameFour').remove();
		 $('#gameFourElements').remove();
		 
}