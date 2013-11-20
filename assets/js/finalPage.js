/* - - - Images to load - - - */
var finalPageImages = [];
var finalPageColor = ["#c8e2f1"];

var retinaCopy = "";

if (retina) {
	
	retinaCopy = "@2x";
	backgroundSizeMainSprite = "408px 1000px"; 
	finalPageImages = ["assets/images/bg2x.png"];
	
}
else {

	retinaCopy = "";
	backgroundSizeMainSprite = "408px 1000px"; 
	finalPageImages = ["assets/images/bg2x.png"];
	
}

function finalPageInit(starAmount){

	$( "#gameNavigation #gameArea" ).append( "<div id='finalPageImages'></div>" );
				
		//setTimeout(function(){animateFinalPage(1);},1000);
		console.log("starsWon"+starAmount);
	
}

function animateMainPage(switchAmount){

	switch(switchAmount){
		
		case 1 :
		
			TweenLite.to("#hill1", 1.8, {y:-335, ease:Expo.easeOut});
			TweenLite.to("#hill2", 2.0, {y:-295,delay:0.2, ease:Expo.easeOut});
			TweenLite.to("#ball", 1.5, {y:320,delay:0.8, ease:Elastic.easeOut});
			TweenLite.to("#naughtyLogo", 2, {alpha:1, delay:2});
			setTimeout(function(){animateMainPage(2);},4000);
			
		break;
		
		case 2 :
			
			TweenLite.to("#naughtyLogo", 1, {alpha:0});
			TweenLite.to("#finalPageImagesHeader", 1, {alpha:1, delay:1.5});
			TweenLite.to("#finalPageImagesText", 1, {alpha:1, delay:2});
			setTimeout(function(){$("#finalPageImagesElements #finalPageImagesStart").css({display:"inline"});},2000);
			TweenLite.to("#finalPageImagesStart", 1, {alpha:1, delay:2.5});		
			
		break;
		
		case 3 :
		
		
		break;
		
		
	}
}