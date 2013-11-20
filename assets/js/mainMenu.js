/* - - - Images to load - - - */
var mainMenuImages = [];
var mainMenuColor = ["#bad3e3"];

var retinaCopy = "";

if (retina) {
	
	retinaCopy = "@2x";
	backgroundSizeMainSprite = "408px 1000px"; 
	mainMenuImages = ["assets/images/bg2x.png","assets/images/mainSprite@2x.png"];
}
else {

	retinaCopy = "";
	backgroundSizeMainSprite = "408px 1000px"; 
	mainMenuImages = ["assets/images/bg2x.png","assets/images/mainSprite.png"];
	
}

function mainMenuInit(){

	$( "#gameNavigation #gameArea" ).append( "<div id='mainMenu'></div><div id='mainMenuElements'><div id='ball'><div id='ballString'></div></div><div id='naughtyLogo'></div><div id='mainMenuHeader'></div><div id='mainMenuStart'></div><div id='mainMenuText'><p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt</p></div><div id='hill1'><div id='greySpace'></div></div><div id='hill2'><div id='whiteSpace'></div></div></div>" );
		
		$("#mainMenuElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"0px",
			zIndex:"2"
		});
		
		$("#mainMenuElements #ball").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -2px -290px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"212px",
			height:"240px",
			left:"55px",
			top:"-330px"
			
		});
		
		$("#mainMenuElements #ball #ballString").css({
			
			backgroundColor:"#ffffff",
			position:"relative",			
			width:"3px",
			height:"240px",
			left:"103px",
			top:"-239px"
			
		});
		
		$("#mainMenuElements #naughtyLogo").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -51px -829px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"309px",
			height:"174px",
			opacity:"0",
			top:"62px",
			left:"12px"
			
		});
		
		$("#mainMenuElements #mainMenuHeader").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -231px -398px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"159px",
			height:"45px",
			opacity:"0",
			top:"68px",
			left:"80px"
		
		});
		
		$("#mainMenuElements #mainMenuText").css({
			
			position:"absolute",
			fontFamily:"Georgia",
			fontSize:"12px",
			lineHeight:"17px",
			textAlign:"center",
			opacity:"0",
			width:"195px",
			height:"45px",
			top:"105px",
			left:"63px"
	
		});
		
		$("#mainMenuElements #mainMenuStart").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -231px -315px',
			backgroundSize: backgroundSizeMainSprite,
			position:"absolute",
			width:"169px",
			opacity:"0",
			height:"63px",
			top:"182px",
			display:"none",
			left:"70px"
		
		});
			
		$("#mainMenuElements #hill1").css({
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -22px -534px',
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
			
			background: 'url("assets/images/mainSprite'+retinaCopy+'.png") -22px -673px',
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
		
		setTimeout(function(){
		
		animateMainPage(1);
	
		},1000);
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
			TweenLite.to("#mainMenuHeader", 1, {alpha:1, delay:1.5});
			TweenLite.to("#mainMenuText", 1, {alpha:1, delay:2});
			setTimeout(function(){$("#mainMenuElements #mainMenuStart").css({display:"inline"});},2000);
			TweenLite.to("#mainMenuStart", 1, {alpha:1, delay:2.5});		
			
		break;
		
		case 3 :
		
			TweenLite.to("#hill1", 1.8, {y:-300, ease:Expo.easeOut});
			setTimeout(function(){animateMainPage(4);},4000);
		break;
		
		case 4 :
			TweenLite.to("#hill1", 1.8, {y:-335, ease:Expo.easeOut});
			setTimeout(function(){animateMainPage(3);},4000);
		break;
		
		
	}

	
}