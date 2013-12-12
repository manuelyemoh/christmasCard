/* - - - Images to load - - - */
var finalPageImages = [];
var finalPageColor = ["#C9E3F2"];
var finalPageS = "500px 798px";
var finalStarTop = ["-252px","-227px","-252px","-229px","-251px","-228px"];
var finalStarLeft = ["20px","70px","120px","174px","218px","269px"];

var retinaCopy = "";



if (retina) {
	
	retinaCopy = "@2x";
	finalPageImages = ["assets/images/bg2x.png","assets/images/finalPage/finalPage@2x.png"];
	
	
}
else {

	retinaCopy = "";
	finalPageImages = ["assets/images/bg2x.png","assets/images/finalPage/finalPage.png"];
	
}

function finalPageInit(starAmount){

	$( "#gameNavigation #gameArea" ).append( "<div id='finalPageImages'><div id='replayBtn'><div id='replayString'></div></div><div id='finalStar0'><div class='finalStarLine'></div></div><div id='finalStar1'><div class='finalStarLine'></div></div><div id='finalStar2'><div class='finalStarLine'></div></div><div id='finalStar3'><div class='finalStarLine'></div></div><div id='finalStar4'><div class='finalStarLine'></div></div><div id='finalStar5'><div class='finalStarLine'></div></div><div id='finalBall'><div id='finalBallLine'></div><div id='finalBallString'></div></div><div id='finalBallTwo'><div id='finalBallStringTwo'></div></div><div id='twitterBtn'><div id='twitterString'></div></div><div id='finalSnow'><div id='superLogo'></div><div id='finalSanta'></div><div id='finalElf'></div><div id='finalSnowWhite'></div></div></div>" );
	
	    //var finalStarAmount = 5;
		var finalStarAmount = starAmount;
		
		//console.log("starsWon"+starAmount);
		
		for(i=0;i <=5; i++){
			
			$("#finalStar"+[i]).css({
				
				background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -449px -5px',
				backgroundSize: finalPageS,
				position:"absolute",
				left:finalStarLeft[i],
				top:finalStarTop[i],
				height:"100px",
				height:"140px",
				width:"30px",
				zIndex:"7"
				
			})
			
			$("#finalStar"+[i]+" .finalStarLine").css({
				
				backgroundColor:"white",
				width:"1px",
				height:"231px",
				left:"16px",
				position:"relative",
				top:"-123px"
				
			})
			
		}
			
		switch(finalStarAmount){
			
			case 0 :
				elfSantaAndCopy("240px","130px","100px","13px","0 127px","0px -285px","-374px -380px");
				
			break;
			
			case 1 :
				goldOrGray(0,0);
				elfSantaAndCopy("240px","130px","100px","13px","0 127px","0px -285px","-374px -380px");
			break;
			case 2 :
				goldOrGray(0,1);
				elfSantaAndCopy("240px","140px","100px","13px","0 127px","0px -285px","-374px -380px");
			break;
			case 3 :
				goldOrGray(0,2);
				elfSantaAndCopy("240px","140px","100px","13px","0 260px","-228px -285px","-423px -285px");
			break;
			case 4 :
				goldOrGray(0,3);
				elfSantaAndCopy("240px","140px","100px","13px","0 260px","-228px -285px","-423px -285px");
			break;
			case 5 :
				goldOrGray(0,4);
				elfSantaAndCopy("240px","130px","100px","13px","0 3px","-115px -285px","-361px -285px");
			break;
			case 6 :
				goldOrGray(0,5);
				elfSantaAndCopy("240px","130px","100px","13px","0 3px","-115px -285px","-361px -285px");
			break
			
		}
		
		function elfSantaAndCopy (copyWidth,copyHeight,copyTop,copyLeft,copyPos,santaPos,elfPos){
			
			console.log(santaPos);
			console.log(elfPos);
			
			$("#finalBall").append("<div id='whatMessage'></div>");
			
			$("#whatMessage").css({
				
				background: 'url("assets/images/finalPage/finalCopy'+retinaCopy+'.png") '+copyPos,
				backgroundSize: "240px 394px",
				position: "relative",
				top:copyTop,
				left:copyLeft,
				width:copyWidth,
				height:copyHeight,
				
			});
					
			$("#finalSanta").css({	
		
				background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") '+santaPos,
				backgroundSize: finalPageS,
				height:"135px",
				width: "110px",
				zIndex: "7",
				left:"106px",
				top:"-22px",
				position: "absolute"

			});
		
			$("#finalElf").css({	
			
				background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") '+elfPos,
				backgroundSize: finalPageS,
				height:"95px",
				width: "54px",
				zIndex: "7",
				left:"214px",
				top:"18px",
				position: "absolute"
	
			});

		}
		
		$("#finalBall h1").css({
			
			color: "#FFFFFF",
		    fontFamily: "georgia",
		    fontSize: "31px",
		    fontWeight: "bold",
		    paddingLeft: "2px",
		    paddingTop: "82px",
		    position: "relative",
		    textAlign: "center",
		    width: "262px"
			
		});
		
		$("#finalBall p").css({
		
			color: "#FFFFFF",
		    fontSize: "22px",
		    left: "31px",
		    letterSpacing: "0.5px",
		    position: "relative",
		    textAlign: "center",
		    top: "-18px",
		    width: "210px"
	    
	    });
		
		$("#finalBallTwo").css({
			
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -6px -531px',
			backgroundSize: finalPageS,
			width:"264px",
			height:"264px",
			left:"26px",
			top:"10px",
			position:"absolute",
			zIndex: "10"
			
		});
		
		$("#finalBallStringTwo").css({
			
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -330px -548px',
			backgroundSize: finalPageS,
			width:"114px",
			height:"164px",
			left:"78px",
			top:"-121px",
			position:"absolute"
			
		});
		
		$("#finalBall").css({
			
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -6px -5px',
			backgroundSize: finalPageS,
			width:"264px",
			height:"264px",
			left:"26px",
			top:"-350px",
			position:"absolute"
			
		});
		
		$("#finalBallString").css({
			
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -286px -5px',
			backgroundSize: finalPageS,
			width:"114px",
			height:"164px",
			left:"78px",
			top:"-121px",
			position:"absolute"
			
		});
		
		$("#finalBallLine").css({
			
			backgroundColor:"#F74A4A",
			width:"2px",
			height:"470px",
			left:"131px",
			top:"-460px",
			position:"absolute"
			
		});
    		
		$("#twitterBtn").css({	
		
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -312px -194px',
			backgroundSize: finalPageS,
			height:"72px",
			width: "60px",
			top:"-220px",
			left:"5px",
			position: "absolute",
			zIndex:"2"
			
		});
		
		$("#twitterString").css({
			
			backgroundColor:"#FFFFFF",
			width:"2px",
			height:"470px",
			left:"29px",
			top:"-460px",
			position:"absolute"
			
		});
		
		$("#replayBtn").css({	
		
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -389px -183px',
			backgroundSize: finalPageS,
			height:"92px",
			width: "70px",
			top:"-226px",
			left:"244px",
			position: "absolute",
			zIndex:"2"
			
		});
		
		$("#replayString").css({	
		
			backgroundColor:"#E44444",
			width:"2px",
			height:"500px",
			left:"34px",
			top:"-485px",
			position:"absolute"
			
		});

		$("#finalSnow").css({	
		
			background: 'url("assets/images/finalPage/final'+retinaCopy+'.png") -5px -424px',
			backgroundSize: finalPageS,
			height:"76px",
			width: "362px",
			zIndex: "7",
			left:"-21px",
			top:"600px",
			position: "absolute",
			zIndex:"7"
			
		});
		
		$("#finalSnowWhite").css({
		
			backgroundColor:"white",
			width:"362px",
			height:"300px",
			position:"absolute",
			top:"76px"
		
		});	
		
		jQuery( "#twitterBtn").on( "tap", function() {
		
		
		
			window.open('http://twitter.com/intent/tweet?text=I+Got+'+starAmount+'+Stars!+', '_blank');
	
		});
		
		$('#finalBall').addClass('unselectable');
		$('#finalBallTwo').addClass('unselectable');
		
		TweenMax.to("#finalBallTwo", 0, {rotationY:'+=90'});
		$("#replayBtn").show();
		setTimeout(function(){animateFinalPage(1);},1000);	
		
		
	jQuery("#replayBtn").on( "tap", function() {
	
			
	
			window.open('http://www.naughtylittleelf.com/', '_self');

	
	});
						
}



function goldOrGray(numberOne,numberTwo){
	
	for(g = numberOne; g <= numberTwo; g++){
		
		$("#finalStar"+[g]).css({
				
			backgroundPosition: '-408px -5px'
				
		})
	}
	
}

function animateFinalPage(switchAmount){

	switch(switchAmount){
		
		case 1 :
		
			TweenLite.to("#finalSnow", 1.8, {y:-290, ease:Expo.easeOut});
			setTimeout(function(){animateFinalPage(2);},1000);
			
		break;
		
		case 2 :
			
			for(a=0;a<=5;a++){
				
				TweenLite.to("#finalStar"+[a], 1.8, {y:200, delay:a*0.25, ease:Elastic.easeOut});
				
			}
			
			TweenLite.to("#finalBall", 1.8, {y:360, delay:2, ease:Elastic.easeOut});
			setTimeout(function(){animateFinalPage(3);},5000);	
			
		break;
		
		case 3 :
		
			for(a=0;a<=5;a++){
				
				TweenLite.to("#finalStar"+[a], 3, {y:-200, ease:Elastic.easeOut});
				
				
			}
			TweenMax.to("#finalBall", 0.5, {delay:1,rotationY:'+=90'});
			TweenMax.to("#finalBallTwo", 0.5, {delay:1.5,rotationY:'-=90'});
			setTimeout(function(){animateFinalPage(4);},5000);
		
		break;
		
		case 4 :
		
			TweenLite.to("#twitterBtn", 1.8, {y:440, ease:Elastic.easeOut});
			TweenLite.to("#replayBtn", 1.8, {y:440, delay:1, ease:Elastic.easeOut});
		
		break;
	}
}