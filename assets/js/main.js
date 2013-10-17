//alert("WindowWidth-->"+window.innerWidth+"  "+"  "+"windowHeight-->"+window.innerHeight);

var firstTimeArray = [isFirstTimemainMenu = true,isFirstTimegameOne = true,isFirstTimegameTwo = true,isFirstTimegameThree = true,isFirstTimegameFour = true,isFirstTimegameFive = true,isFirstTimegameSix = true];

$(document).ready(function () {

  //cache javaScript Pages
  $.ajaxSetup({
  	cache: true
  });
  
  // - - - Game Views and Controls - - - //
  var gameViews = ["mainMenu","gameOne","gameTwo","gameThree","gameFour","gameFive", "gameSix"];
  var starsGot = ["none","none","none","none","none","none"];
  var currentPage = 10;
  var randomGame;
  
  // - - - object var names - - - //
  var preloader = $('#preloader');
  var preloaderClip = $('#preloaderClip');
  var preLoaderBox = $('#preloaderPresent');
  var gameEndCheck;
  var gameEndBooleon;

  
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
  
  document.ontouchmove = function(e) {e.preventDefault()};
	  
	function initPage(loadPage){
	
		if(firstTimeArray[loadPage] == true){  
	
			// - - - Load external JS file, and run code if successful or return Error message - - - //
			$.getScript( "assets/js/"+gameViews[loadPage]+".js" )
			  .done(function( script, textStatus ) {
			   	
			   	var bgImage = gameViews[loadPage]+"Images"; 
			   	// - - - eval will convert the string to an array object - - - //
			   	bgImage = eval(bgImage);
			   	currentPage = loadPage;
			   	//startPreLoader(bgImage,0,0,firstTimeArray[loadPage]);
			   	setTimeout(function(){loadImage(bgImage[0][0],firstTimeArray[loadPage])}, 0);
			    startGame(currentPage);
			    firstTimeArray[loadPage] = false;
			   	
			  })
			  .fail(function( jqxhr, settings, exception ) {
			    console.log( "Need to reload" );
		});
	}
	else{
		
		var bgImage = gameViews[loadPage]+"Images"; 
		// - - - eval will convert the string to an array object - - - //
		bgImage = eval(bgImage);
			   	
		//startPreLoader(bgImage,0,0,firstTimeArray[loadPage]);
		setTimeout(function(){imageLoaded(bgImage[0][0],firstTimeArray[loadPage])},0);
	}
	
	}
	
	function startGame(currentPage){
		
		// - - - Convent string into a function name - - - //
		var initGameString = gameViews[currentPage]+"Init";
		initGameString = window[initGameString];
		console.log(initGameString);
		initGameString();		
		
		setTimeout(function(){
		
		if(currentPage >= 1){gameEndCheck=setInterval(hasGameEnd, 1000)}
		
		},3000);

		jQuery( "#"+gameViews[0] ).on( "tap", function() {
	
		getRandomInt(4,4);	
		initPage(randomGame);
		$("#mainMenu").hide();
		
	});
	}
	
	function hasGameEnd(){
		
		gameEndBooleon = gameViews[currentPage]+"Ended";
		gameEndStar = gameViews[currentPage]+"Star";
		if(eval(gameEndBooleon) == true){
					
			clearInterval(gameEndCheck);
			getRandomInt(2,2);	
			setTimeout(function(){initPage(randomGame)},2000);
			
		}
		if(eval(gameEndStar) == true){

			starsGot[currentPage] = "inline";
			
			for(i=0;i<=6;i++){
  
				 $("#goldStar"+[i]).css("display",starsGot[i]);
  	
			}
			
			
		}
	}
	
	function pausePage(){
		
		
		
	}
	
	function resumeGame(){
		
		
		
	}
	
	function getRandomInt(min, max) {
	
    	randomGame = Math.floor(Math.random() * (max - min + 1)) + min;
    
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
	
	/*function startPreLoader(whatArray,index1,index2,boolean){
		
		// - - - put the images in blocks and alpha them on - - - //
		preloader.css("display","block");
		preloaderClip.css("display","block");
		TweenLite.to(preloader, 0.5, {alpha:1});
		TweenLite.to(preloaderClip, 0.5, {alpha:1});
		preLoadAnimation(0);
		if( boolean == true){
			
			setTimeout(function(){loadImage(whatArray[index1][index2])}, 1000);

		}
		else{
			
			setTimeout(function(){imageLoaded(whatArray[index1][index2])}, 1000);
			
		}
	}*/
	
	/*function preLoadAnimation(preLoadStep){
		
		// - - - Pre loaded animation from sprite sheet - - - //
		switch(preLoadStep){
			
			case 0:
				TweenLite.to(preLoaderBox, 1.5, {y:-70});
				TweenLite.to(preLoaderBox, 0.5, {alpha:1, delay:0.1});
				TweenLite.delayedCall(0.5, function(){
					
					$(preloaderClip).css("background-position","0 0");
					
				});
				
				setTimeout(function(){preLoadAnimation(1)},2500);
			break;
			
			case 1:
				TweenLite.to(preLoaderBox, 0.5, {alpha:0});
				setTimeout(function(){preLoadAnimation(2)},500);

			break;
			
			case 2:
			
			TweenLite.to(preLoaderBox, 0, {y:0});
			$(preloaderClip).css("background-position","-36px 0");
			break;
			
		}
		
	}*/

	function loadImage(name){

		// - - - pre Loading images - - - //
		image = new Image();
		image.onLoad = imageLoaded(name);
		image.src = name;
		
		}

	function imageLoaded(name){
		
		// - - - alpha images off and set display none - - - //
		
		 TweenLite.to(preloaderClip, 0.5, {alpha:0, delay:1, onComplete:function(){
		
			preloaderClip.hide();
			
		}});
		
		TweenLite.to(preloader, 0.5, {alpha:0, delay:1, onComplete:function(){
			
			preloader.hide();
			//startGame(currentPage);
			
		}});
		
		// - - - set PreLoaded Images to DOM - - - //
		$("#main").css("background-image", 'url(' + name + ')');
		$("#timer").hide();
		$("#resultsScreen").hide();
		$("#resultsScreen #goldStar").hide();
		
	}
	
	initPage(0);
	
});