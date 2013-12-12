/* - - - Images to load - - - */
var mainMenuImages = [];
var mainMenuColor = ["#C9E3F2"];
var mainMenuLive = false;
var retinaCopy = "";

if (retina) {
	
	retinaCopy = "@2x";
	
	mainMenuImages = ["assets/images/bg2x.png","assets/images/mainSprite@2x.png"];
}
else {

	retinaCopy = "";
	
	mainMenuImages = ["assets/images/bg2x.png","assets/images/mainSprite.png"];
	
}

function mainMenuInit(){

$( "#gameNavigation #gameArea" ).append( "<div id='mainMenu'></div><div id='mainMenuElements'><div id='ball'><div id='ballTop'></div><div id='ballString'></div></div><div id='ballTwo'><div id='ballTopTwo'></div><div id='headingOne'></div><div id='middleCopy'></div></div><div id='naughtyLogo'></div><div id='startBtn'><div id='startLine'></div></div><div id='hill1'><div id='greySpace'></div></div><div id='hill2'><div id='whiteSpace'></div></div></div>" );
		
		$("#mainMenuElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			zIndex:"2"
			
		});
		
		$("#mainMenuElements #headingOne").css({
		
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -8px -1407px',
			backgroundSize: backgroundSizeMainSprite,
			width:"218px",
			height:"53px",
			zIndex:"3",
			position:"absolute",
			top:"59px",
			left:"21px"

		});
		
		$("#mainMenuElements #middleCopy").css({
			
			background: 'url("assets/images/startCopy'+retinaCopy+'.png") 0px 0px',
			backgroundSize: "232px 112px",
			width:"225px",
			height:"110px",
			zIndex:"3",
			position:"absolute",
			top:"111px",
			left:"10px"

		});
		
		$("#mainMenuElements #startBtn").css({
		
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -21px -1882px',
			backgroundSize: backgroundSizeMainSprite,
			width:"69px",
			height:"95px",
			zIndex:"1",
			position:"absolute",
			top:"-221px",
			left:"8px"
			//,opacity:"0"

		});
		
		$("#mainMenuElements #startBtn #startLine").css({
		
			backgroundColor:"#ffffff",
			position:"relative",			
			width:"1px",
			height:"510px",
			left:"33px",
			top:"-500px"

		});
		
		$("#mainMenuElements #ballTwo").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -128px -560px',
			backgroundSize: backgroundSizeMainSprite,
			opacity:"0",
			position:"absolute",
			width:"262px",
			height:"269px",
			left:"26px",
			top:"6px",
			zIndex:"2"
			
		});
		
		$("#mainMenuElements #ballTwo #ballTopTwo").css({
		
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -7px -571px',
			backgroundSize: backgroundSizeMainSprite,
			position:"relative",			
			width:"103px",
			height: "142px",
			left:"81px",
			top:"-137px"
			
		});
		
		$("#mainMenuElements #ball").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -115px -286px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"262px",
			height:"269px",
			left:"28px",
			top:"-360px"
			
		});
		
		$("#mainMenuElements #ball #ballTop").css({
		
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -15px -46px',
			backgroundSize: backgroundSizeMainSprite,
			position:"relative",			
			width:"103px",
			height:"170px",
			left:"81px",
			top:"-137px"
			
		});
		
		$("#mainMenuElements #ball #ballString").css({
			
			backgroundColor:"#ffffff",
			position:"relative",			
			width:"3px",
			height:"240px",
			left:"127px",
			top:"-429px"
			
		});
		
		$("#mainMenuElements #naughtyLogo").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -51px -1116px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"309px",
			height:"174px",
			opacity:"0",
			top:"68px",
			left:"5px"
			
		});
			
		$("#mainMenuElements #hill1").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -26px -823px',
			backgroundSize: backgroundSizeMainSprite,
			top: "570px",
			left:"-20px",
			position:"absolute",
			width:"360px",
			height:"115px"
			
		});
		
		$("#hill1 #greySpace").css({
			
			width:"100%",
			backgroundColor:"#f4f5f6",
			position:"relative",
			top:"113px",
			height:"210px"
			
		});
		
		$("#mainMenuElements #hill2").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -22px -956px',
			backgroundSize: backgroundSizeMainSprite,
			left:"-22px",
			position:"absolute",
			top: "565px",
			width:"362px",
			height:"155px"
			
		});	
		
		$("#hill2 #whiteSpace").css({
			
			width:"100%",
			position: "relative",
			top: "154px",
			backgroundColor:"#ffffff",
			height:"250px"
			
		});
		
		$('#ballTwo').addClass('unselectable');
		
			TweenMax.to("#ballTwo", 0, {delay:1,rotationY:'+=90'});
			
			
		setTimeout(function(){
		
		animateMainPage(1);
	
		},1000);
}


function animateMainPage(switchAmount){

	switch(switchAmount){
		
		case 1 :
		
			TweenLite.to("#hill1", 1.8, {y:-288, ease:Expo.easeOut});
			TweenLite.to("#hill2", 2.0, {y:-287,delay:0.2, ease:Expo.easeOut});
			TweenLite.to("#ball", 1.5, {y:367,delay:0.8, ease:Elastic.easeOut});
			$( "#naughtyLogo" ).delay(1500).animate({ "opacity": "1" }, 2000 );
			setTimeout(function(){animateMainPage(2);},3500);
			
		break;
		
		case 2 :
		
			TweenLite.to("#ballTwo", 0, {alpha:1});
			$( "#naughtyLogo" ).animate({ "opacity": "0" }, 1000 );
			TweenMax.to("#ball", 0.5, {delay:1,rotationY:'+=90',ease:Sine.easeInOut});
			TweenMax.to("#ballTwo", 0.5, {delay:1.5,rotationY:'-=90',ease:Sine.easeInOut});
			TweenLite.to("#startBtn", 1.5, {y:439,delay:2.5, ease:Elastic.easeOut});
			//setTimeout(function(){$("#mainMenuElements #mainMenuStart").css({display:"inline"});},2000);
			//$( "#mainMenuStart" ).delay(2500).animate({ "opacity": "1" }, 1000 );	
			
		break;
				
	}
	
}