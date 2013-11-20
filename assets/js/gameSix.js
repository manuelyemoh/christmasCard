var gameSixImages = [];
var gameSixColor = "#e0f4f4";
var gameSixTimer = 11;
var counter;
var gameSixEnded = false;
var gameSixStar = false;
var spriteLocation;
var backgroundS;
var countSuccess = 0;
var currentlyDown = false;
var eatingNumber = 0;
var hangingNumber = 0;
var walkingNumber = 0;
var raindeerTimer = [];
if (retina) {

	var gameSixImages = ["assets/images/bg2x.png","assets/images/gameSix/mainSprite@2x.png","assets/images/gameSix/raindeerEating@2x.png","assets/images/gameSix/snowTracksBg@2x.png","assets/images/gameSix/peachHillBg@2x.png"];
	tracksLocation = "assets/images/gameSix/snowTracksBg@2x.png";
	peachLocation = "assets/images/gameSix/peachHillBg@2x.png";
	spriteLocation = "assets/images/gameSix/mainSprite@2x.png";
	raindeerLocation = "assets/images/gameSix/raindeerEating@2x.png";
	raindeerS = "188px 1314px";
	backgroundS = "471px 220px";
	trackS = "360px 511px";
	peachS = "360px 165px";
	
}
else {

	var gameSixImages = ["assets/images/bg2x.png","assets/images/gameSix/mainSprite.png","assets/images/gameSix/raindeerEating.png","assets/images/gameSix/snowTracksBg.png","assets/images/gameSix/peachHillBg.png"];
	tracksLocation = "assets/images/gameSix/snowTracksBg.png";
	peachLocation = "assets/images/gameSix/peachHillBg.png";
	spriteLocation = "assets/images/gameSix/mainSprite.png";
	raindeerLocation ="assets/images/gameSix/raindeerEating.png";
	raindeerS = "188px 1314px";
	backgroundS = "471px 220px";
	trackS = "360px 511px";
	peachS = "360px 165px";

}

function gameSixInit(){

	countSuccess = 0;
	gameSixTimer = 11;
	gameSixEnded = false;
	gameSixStar = false;
	
	$( "#gameNavigation #gameArea" ).append( "<div id='gameSix'><p>Start Game Instructions</p></div><div id='gameSixElements'><div id='deer0'></div><div id='deer1'></div><div id='deer2'></div><div id='deer3'></div><div id='deer4'></div><div id='deer5'></div><div id='penBack'></div><div id='penFront'></div><div id='backgroundPrints'></div><div id='peachHillBg'></div></div></div>" );
		
		$("#gameSix").css({	
		
			top: "40%",
			width: "100px",
			zIndex: "4",
			color: "white",
			textAlign: "center",
			backgroundColor: "blue",
			marginLeft: "-50px",
			left: "50%",
			position: "absolute",
			zIndex:"7"
			
		});
		
		$("#gameSix p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameSixElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px"

		});
		
		$("#gameSixElements #penBack").css({
			
			background: "url("+ spriteLocation +") -9px -19px ",			
			backgroundSize: backgroundS,
			width:"235px",
			height:"90px",
			top:"96px",
			left:"82px",
			position:"absolute",
			zIndex:"4"

		});
		
		$("#gameSixElements #penFront").css({
			
			background: "url("+ spriteLocation +")-275px -109px ",			
			backgroundSize: backgroundS,
			width:"188px",
			height:"80px",
			top:"134px",
			left:"139px",
			position:"absolute",
			zIndex:"6"

		});
		
		$("#gameSixElements #backgroundPrints").css({
			
			backgroundImage:"url("+ tracksLocation +")",
			backgroundSize: trackS,
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "47px",
			width:"360px",
			height:"511px",
			zIndex: "2"

		});
		
		$("#gameSixElements #peachHillBg").css({
			
			backgroundImage:"url("+ peachLocation +")",
			backgroundSize: peachS,
		    left: "-20px",
		    opacity: "1",
		    position: "absolute",
		    top: "-40px",
			width:"360px",
			height:"167px",
			zIndex: "1"

		});
		
		raindeers = [whichDeer={
			part:"deer0",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"116px",
			sT:"117px",
			color:"blue",
			width:"64px",
			height:"72px",
			bPosL:"-320px",
			bPosT:"-15px",
			whatSprite:spriteLocation,
			whatBgS:backgroundS,
			endL:"116px",
			endT:"117px",
			dragStop:false,
			index: "6"
			},whichDeer={
			part:"deer1",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"9px",
			sT:"80px",
			color:"blue",
			width:"64px",
			height:"44px",
			bPosL:"-0px",
			bPosT:"-0px",
			whatSprite:raindeerLocation,
			whatBgS:raindeerS,
			walking:false,
			endL:"239px",
			endT:"90px",
			dragStop:false,
			index: "6"
			},whichDeer={
			part:"deer2",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"175px",
			sT:"375px",
			color:"blue",
			width:"64px",
			height:"72px",
			bPosL:"-131px",
			bPosT:"-0px",
			whatSprite:raindeerLocation,
			whatBgS:raindeerS,
			walking:true,
			increment:2,
			endL:"156px",
			endT:"77px",
			dragStop:false,
			index: "5"
			},whichDeer={
			part:"deer3",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"200px",
			sT:"340px",
			color:"blue",
			width:"64px",
			height:"44px",
			bPosL:"-0px",
			bPosT:"-0px",
			whatSprite:raindeerLocation,
			whatBgS:raindeerS,
			walking:false,
			endL:"100px",
			endT:"80px",
			dragStop:false,
			index: "5"
			},whichDeer={
			part:"deer4",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"225px",
			sT:"240px",
			color:"blue",
			width:"64px",
			height:"72px",
			bPosL:"-131px",
			bPosT:"-0px",
			whatSprite:raindeerLocation,
			whatBgS:raindeerS,
			walking:true,
			increment:2,
			endL:"171px",
			endT:"107px",
			dragStop:false,
			index: "6"
			},whichDeer={
			part:"deer5",
			xL:"64",
			xR:"280",
			yT:"49",
			yB:"135",
			sL:"15px",
			sT:"278px",
			color:"blue",
			width:"64px",
			height:"72px",
			bPosL:"-131px",
			bPosT:"-0px",
			whatSprite:raindeerLocation,
			whatBgS:raindeerS,
			walking:true,
			increment:-2,
			endL:"221px",
			endT:"70px",
			dragStop:false,
			index: "5"
			}];
			
		for(f=1;f<=5;f++){
			
			$('#gameSixElements '+'#'+raindeers[f].part).css({

				"width":raindeers[f].width,
				"height":raindeers[f].height,
				"top":raindeers[f].sT,
				"left":raindeers[f].sL,
				"backgroundColor":raindeers[f].color,
				"background": 'url('+ raindeers[f].whatSprite +') no-repeat scroll '+ raindeers[f].bPosL +' '+ raindeers[f].bPosT +' rgba(0, 0, 0, 0)',
				"backgroundSize": raindeers[f].whatBgS,
				"position":"absolute",
				"opacity":"1",
				"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
				"zIndex":raindeers[f].index
			
			});
			
		}
		
		$('#gameSixElements '+'#'+raindeers[0].part).css({
		
			"width":raindeers[0].width,
			"height":raindeers[0].height,
			"top":raindeers[0].sT,
			"left":raindeers[0].sL,
			"background": 'url('+ raindeers[0].whatSprite +') no-repeat scroll '+ raindeers[0].bPosL +' '+ raindeers[0].bPosT +' rgba(0, 0, 0, 0)',
			"backgroundSize": raindeers[0].whatBgS,
			"position":"absolute",
			"opacity":"1",
			"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
			"zIndex":raindeers[0].index,
			"-moz-transform": "scaleX(-1)",
	        "-o-transform": "scaleX(-1)",
	        "-webkit-transform": "scaleX(-1)",
	        "transform": "scaleX(-1)",
	        "filter": "FlipH",
	        "-ms-filter": "FlipH"

		});
		
		for(g=2;g<=4;g++){
			
			$('#gameSixElements '+'#'+raindeers[g].part).css({
			
			"-moz-transform": "scaleX(-1)",
	        "-o-transform": "scaleX(-1)",
	        "-webkit-transform": "scaleX(-1)",
	        "transform": "scaleX(-1)",
	        "filter": "FlipH",
	        "-ms-filter": "FlipH"

			});
			
		}
		
		$("#gameSix").show();
		$("#gameInstructionBg").show();
		setTimeout(gameSixStart, 5000);


}

function gameSixStart(){

		animateRaindeerGraze(eatingNumber,1,raindeerLocation,raindeerS,150,44,800);
		animateRaindeerWalk(walkingNumber,2,raindeerLocation,raindeerS,150,73,1200,raindeers[2].increment);
		animateRaindeerGraze(eatingNumber,3,raindeerLocation,raindeerS,150,44,800);
		animateRaindeerWalk(walkingNumber,4,raindeerLocation,raindeerS,150,73,1200,raindeers[4].increment);
		animateRaindeerWalk(walkingNumber,5,raindeerLocation,raindeerS,150,73,1200,raindeers[5].increment);
	
		$("#gameSix").hide();
		$("#gameInstructionBg").hide();
		$('#timerInside').animate({width:"296px"},0);
		$('#timer').show();
		
	for(i=1;i<=5;i++){
	
		$('#'+raindeers[i].part).on( "vmousedown", function (e){
		
			changeIndex = $(this).attr('id').slice(-1);
				
			if(raindeers[changeIndex].dragStop === false){
				
				currentlyDown = true;
				clearTimeout(raindeerTimer[changeIndex]);
				animateRaindeerHang(hangingNumber,changeIndex,raindeerLocation,raindeerS,100,63,630);
			}
					
		});
		
		$('#'+raindeers[i].part).on( "vmousemove", function (event){
			
			if(currentlyDown === true){
				
				currentId = $(this).attr('id');
				x = event.pageX - $('#gameArea').offset().left-35;
				y = event.pageY - $('#gameArea').offset().top-55;
				$('#'+currentId).css("left",x);
				$('#'+currentId).css("top",y);
				$('#'+currentId).css("z-index",10000);
		    }
		});
		
		$('#'+raindeers[i].part).on( "vmouseup", function (event){
		
			currentlyDown = false;
			currentId = $(this).attr('id');
			changeIndex = $(this).attr('id').slice(-1);
			
			$('#'+currentId).css("z-index",raindeers[changeIndex].index);
			
			for(l=1;l<=5;l++){
			
			if(currentId == raindeers[l].part){
			
			
				if(raindeers[changeIndex].dragStop === false){
				
					console.log("left -->"+parseFloat($('#'+currentId).css("left")));
					console.log("top -->"+parseFloat($('#'+currentId).css("top")));
					
					if(parseFloat($('#'+currentId).css("left")) >= raindeers[l].xL && parseFloat($('#'+currentId).css("left")) <= raindeers[l].xR && parseFloat($('#'+currentId).css("top")) >= raindeers[l].yT && parseFloat($('#'+currentId).css("top")) <= raindeers[l].yB){
						
						changeIndex = $(this).attr('id').slice(-1);
						
						countSuccess ++;
						correctCounter();
						$('#'+currentId).animate({left:raindeers[l].endL,top:raindeers[l].endT}, 150);
						raindeers[changeIndex].dragStop = true
						clearTimeout(raindeerTimer[changeIndex]);
						insidePen(changeIndex);
					}
					else{
						changeIndex = $(this).attr('id').slice(-1);
						
						$('#'+currentId).animate({top:raindeers[l].sT}, 300);
						
						if(raindeers[changeIndex].walking === true){
							
							clearTimeout(raindeerTimer[changeIndex]);
							animateRaindeerWalk(walkingNumber,changeIndex,raindeerLocation,raindeerS,150,73,1200);
							
						}
						else{
							
							clearTimeout(raindeerTimer[changeIndex]);
							animateRaindeerGraze(eatingNumber,changeIndex,raindeerLocation,raindeerS,150,44,800);
							
						}		
								
						}
					
					}
				}
			
			}
			
		});
	}

	//counter=setInterval(gameSixtimer, 1000);
	//gameSixtimer();

}

function animateRaindeerGraze(whatNumber,whatArray,whatLocation,whatSize,whatSpeed,whatMin,WhatMax){
	
	whatNumber = whatNumber - whatMin;
	
	$("#gameSixElements #"+ raindeers[whatArray].part).css({
		
		backgroundPosition: '0px '+ whatNumber +'px',
		backgroundSize: whatSize,
		height: "44px",
		width: "64px"
		
	});

	raindeerTimer[whatArray] = setTimeout(function(){
	
		animateRaindeerGraze(whatNumber,whatArray,raindeerLocation,raindeerS,150,44,800)
	
	},whatSpeed);
	
	if(whatNumber <= -WhatMax){
		
		whatNumber = 0;
		
	}
	
	//console.log(raindeerTimer);
	
}

function animateRaindeerHang(whatNumber,whatArray,whatLocation,whatSize,whatSpeed,whatMin,WhatMax){
	
	whatNumber = whatNumber - whatMin;
	
	$("#gameSixElements #"+ raindeers[whatArray].part).css({
		
		backgroundPosition: '-65px '+ whatNumber +'px',
		backgroundSize: whatSize,
		height: "62px",
		width: "66px"
		
	});

	raindeerTimer[whatArray] = setTimeout(function(){
	
		animateRaindeerHang(whatNumber,whatArray,raindeerLocation,raindeerS,100,63,630)
	
	},whatSpeed);
	
	if(whatNumber <= -WhatMax){
		
		whatNumber = 0;
		
	}
	
}

function animateRaindeerWalk(whatNumber,whatArray,whatLocation,whatSize,whatSpeed,whatMin,WhatMax,increment){
	
	whatNumber = whatNumber - whatMin;
	
	$("#gameSixElements #"+ raindeers[whatArray].part).css({
		
		backgroundPosition: '-131px '+ whatNumber +'px',
		backgroundSize: whatSize,
		width:"64px",
		height:"72px"
		
	});
	
	//console.log(whatDirection);
	
	TweenLite.to("#gameSixElements #"+ raindeers[whatArray].part, 0.150, {left:"-="+increment, ease:Sine.easeInOut});

	raindeerTimer[whatArray] = setTimeout(function(){
	
		animateRaindeerWalk(whatNumber,whatArray,raindeerLocation,raindeerS,100,73,1200,raindeers[whatArray].increment)
	
	},whatSpeed);
	
	if(whatNumber <= -WhatMax){
		
		whatNumber = 0;
		
	}
	
}


function insidePen(whatNumber){
	
	$('#gameSixElements '+'#'+raindeers[whatNumber].part).css({

		"backgroundPosition": '-131px 0px',
		"backgroundSize": raindeers[whatNumber].whatBgS,
		"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
		"width":"64px",
		"height":"72px"
			
	})
}

function correctCounter(){
	
	if (countSuccess >= 5 ){
	
		clearInterval(counter);
		
		$("#gameSixElements #penBack").css({
			
			backgroundPosition: "-9px -109px",			
			backgroundSize: backgroundS,
			width:"235px",
			height:"110px",
			top:"96px",
			left:"83px",
			position:"absolute",
			zIndex:"4"

		});
		
		setTimeout(gameSixWon,1500);
		
	}

}

function gameSixtimer(){

		 gameSixTimer --;
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameSixTimer <= 0)
		 {		 
			 clearInterval(counter);
			 gameSixLost();

		 }
}

function gameSixWon(){
		
		 gameSixEnded = true;
		 gameSixStar = true;
		 $("#resultsScreen").show();
		 $('#timer').hide();
		 $("#resultsScreen #goldStar").show();
		 $("#gameNavigation #gameArea #gameSix").remove();
		 $("#gameNavigation #gameArea #gameSixElements").remove();
		 
}
	
function gameSixLost(){

		 gameSixEnded = true;
		 gameSixStar = false;
		 $("#resultsScreen").show();
		 $('#timer').hide();
		 $("#gameSix").remove();
		 $("#gameNavigation #gameArea #gameSixElements").remove();
		 
}