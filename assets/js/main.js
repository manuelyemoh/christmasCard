//alert("WindowWidth-->"+window.innerWidth+"  "+"  "+"windowHeight-->"+window.innerHeight);

var firstTimeArray = [isFirstTimemainMenu = true,isFirstTimegameOne = true,isFirstTimegameTwo = true,isFirstTimegameThree = true,isFirstTimegameFour = true,isFirstTimegameFive = true,isFirstTimegameSix = true, isFirstTimetabletGame = true];
var retina = window.devicePixelRatio > 1;
var retinaCopy = "";
var backgroundStarArray = ["-5px -142px","-39px -142px","-71px -142px","-5px -181px","-41px -178px","-5px -142px"];


if (retina) {
	
	retinaCopy = "@2x";

}
else {
0
	retinaCopy = "";

}

	$("#preloaderClip").css({

		"background": 'url("assets/images/PageLoaderTree'+retinaCopy+'.gif") 0px 0',
		"backgroundSize": '80px 135px'

	});
	
	for (r = 0; r <= 5; r++){
		
		$("#goldStar"+[r]).css({
			
			"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") 0 -5px',
			"backgroundSize": '403px 280px'
			
		});
		
		$("#greyStar"+[r]).css({
			
			"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -61px -5px',
			"backgroundSize": '403px 280px'
		
		});
		
		$("#Star"+[r]).css({
			
			"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") '+ backgroundStarArray[r] +'',
			"backgroundSize": '403px 280px'
			
		});

	}
	
	$("#resultsScreen #resultsCircle").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -155px 0px',
		"backgroundSize": '403px 280px'
	
	});
	
	$("resultsScreen #resultsWon").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -3px -52px',
		"backgroundSize": '403px 280px'
	});
	
	$("resultsScreen #resultsLost").css({
		
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -3px -96px',
		"backgroundSize": '403px 280px'
	});
	
	$("#resultsScreen #resultsBottom").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -40px -250px',
		"backgroundSize": '403px 280px'

	});

$(document).ready(function () {

  //cache javaScript Pages
  $.ajaxSetup({
  	cache: true
  });
  
  //phoneGap shiz
  
  $.support.cors = true;
  $.mobile.allowCrossDomainPages = true;
  
  // - - - Game Views and Controls - - - //
  var gameViews = ["mainMenu","gameOne","gameTwo","gameThree","gameFour","gameFive", "gameSix", "tabletGame"];
  var starsGot = ["none","none","none","none","none","none"];
  var currentPage = 10;
  var randomGame = 0;
  //var testingNumber = 1;
  var randomGameArray = [1,2,3,4,5,6];
  
  // - - - object var names - - - //
  var preloader = $('#preloader');
  var preloaderClip = $('#preloaderClip');
  var preLoaderBox = $('#preloaderPresent');
  var gameEndCheck;
  var gameEndBooleon;
  var isLoaded = 0;
  
  //var ismobile=navigator.userAgent.match(/(iPhone)|(iPod)|(Android)|(webOS)/i);
  var ismobile=navigator.userAgent.toLowerCase();
  
  // - - - Local URL - - - //
  //var serverUrl = "localhost:8888/christmasGame/";
  
  // - - - Server URL - - - //
  //var serverUrl = "http://www.wearesupernatural.com/clients/YemohMurrayAllen/christmasGame/";
  
  // - - - Set up positions of elements - - - //
  
  $("#main").css("width",window.innerWidth);
  $("#main").css("height",window.innerHeight);
  $("#bottomBleed").css("width",window.innerWidth);
  $("#topBleed").css("width",window.innerWidth);
  $("#rightBleed").css("height",window.innerHeight);
  $("#leftBleed").css("height",window.innerHeight+10);
  
  $(".ui-loader").remove();
  
  function shuffle(o){ //v1.0
  
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
    
   };
  
   shuffleArray = shuffle(randomGameArray);
  
   document.ontouchmove = function(e) {e.preventDefault()};
	  
	function initPage(loadPage){
	
		console.log(loadPage);
		isLoaded = 0;
	
		if(firstTimeArray[loadPage] == true){  
	
			// - - - Load external JS file, and run code if successful or return Error message - - - //
			$.getScript( "assets/js/"+gameViews[loadPage]+".js" )
			  .done(function( script, textStatus ) {
			  
			   	var bgImage = gameViews[loadPage]+"Images"; 
			   	// - - - eval will convert the string to an array object - - - //
			   	bgImage = eval(bgImage);
			   	currentPage = loadPage;
			   	startPreLoader(bgImage);
			    firstTimeArray[loadPage] = false;
			   	
			  })
			  .fail(function( jqxhr, settings, exception ) {
			    alert( "Need to reload" );
		});
	}
	else{

		var bgImage = gameViews[loadPage]+"Images"; 
		// - - - eval will convert the string to an array object - - - //
		bgImage = eval(bgImage);
		currentPage = loadPage;
		
		startPreLoader(bgImage);
		//setTimeout(function(){stopPreloader(bgImage[0],bgImage[1])}, 0);
		//startGame(currentPage);
	}
	
	}
	
	function startGame(currentPage){
		
		// - - - Convent string into a function name - - - //
		var initGameString = gameViews[currentPage]+"Init";
		initGameString = window[initGameString];
		console.log(initGameString);
		initGameString();		
		
		setTimeout(function(){
		
		if(currentPage >= 1 && currentPage <= 6 ){gameEndCheck=setInterval(hasGameEnd, 1000)}
		
		},3000);

		jQuery( "#"+gameViews[0] ).on( "tap", function() {

		initPage(shuffleArray[randomGame]);
		//initPage(testingNumber);
		$("#mainMenu").hide();
		
	});
	}
	
	function hasGameEnd(){
		

		gameEndBooleon = gameViews[currentPage]+"Ended";
		gameEndStar = gameViews[currentPage]+"Star";
		if(eval(gameEndBooleon) == true){
					
			clearInterval(gameEndCheck);
			randomGame++;
			setTimeout(function(){initPage(shuffleArray[randomGame])},2000);
			//setTimeout(function(){initPage(testingNumber)},2000);
			
		}
		if(eval(gameEndStar) == true){

			starsGot[currentPage] = "inline";
			
			for(i=0;i<=6;i++){
				
				a = i-1;
				
				 $("#goldStar"+[a]).css("display",starsGot[i]);
				 
			}
			
			
		}
	}
	
	function pausePage(){
		
		
		
	}
	
	function resumeGame(){
		
		
		
	}
	
	/*for(i=1;i<=6;i++){
		
		$("#"+gameViews[i]).click(function() {
	
			currentPage = $(this).attr('id');
			// - - - Find the ID of what has been clicked and convert the array string to the positon of the string and run init function - - - //
			var startGameString = currentPage+"Start";
			startGameString = window[startGameString];
			console.log(startGameString);
			startGameString();
			
		}); 
	}*/
	
	function startPreLoader(whatArray){
		
		// - - - put the images in blocks and alpha them on - - - //
		preloader.css("display","block");
		preloaderClip.css("display","block");
		TweenLite.to(preloader, 0.5, {alpha:1});
		TweenLite.to(preloaderClip, 0.5, {alpha:1});
		//preLoadAnimation(0);
		
		//Load Gif image

		setTimeout(function(){loadImage(whatArray)}, 1000);

	}

	function loadImage(name){
		
		for(i=0; i <= name.length; i++){
			
			// - - - pre Loading images - - - //
			image = new Image();
			image.onLoad = imageLoaded(name);
			image.src = name[i];
			
		}

	}
	
	function imageLoaded(arrayNumber){
		
		isLoaded++
		
		if(isLoaded >= arrayNumber.length + 1){
			
			stopPreloader(arrayNumber);
			
		}
		
		
	}

	function stopPreloader(name){
	
		// - - - alpha images off and set display none - - - //
		setTimeout(function(){startGame(currentPage)},500);
		
		TweenLite.to(preloaderClip, 0.5, {alpha:0, delay:1, onComplete:function(){
		
			preloaderClip.hide();
			
		}});
		
		TweenLite.to(preloader, 0.5, {alpha:0, delay:1, onComplete:function(){
			
			preloader.hide();
			
			
		}});
		
		// - - - set PreLoaded Images to DOM - - - //
		$("#main").css("background-image", 'url(' + name[0] + ')');
		$("#main").css("background-color", eval(gameViews[currentPage]+"Color"));
		$("#timer").hide();
		$("#gameAreaResults").hide();
		
	}
	
	/*switch(ismobile.contains()){
		
		case "android":
		
		console.log("android");
		initPage(0);
		
		break;
		
		case "iphone":
		
		console.log("iPhone");
		
		break;
		
		case "ipad":
		
		console.log("iPad");
		
		initPage(7);
				
		break;
		
		default:
		
		console.log("must be desktop");
		
		initPage(0);
		
	}*/

	initPage(0);

});