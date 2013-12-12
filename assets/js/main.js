//alert("WindowWidth-->"+window.innerWidth+"  "+"  "+"windowHeight-->"+window.innerHeight);

var firstTimeArray = [true,true,true,true,true,true,true,true];
var retina = window.devicePixelRatio > 1;
var retinaCopy = "";
var backgroundStarArray = ["-5px -142px","-39px -142px","-71px -142px","-5px -181px","-41px -178px","-5px -142px"];
var backgroundSizeMainSprite = "408px 1464px";
var ismobile;
var orientation;
var mainCopy = [];
var loadMain = [];
var myLoader = new html5Preloader();
var myLoader2 = new html5Preloader();
var bgImage;
var intervalArray = [];
//0 preloader 1 ablost 2 abwon 3 elfInSnow 4 elfPantsWin 5 elf dance 6 robot won 7 snowman lost 8 robot lose 9 elf lost huff 10 snow man Win 11 rainDeerWin

if (retina) {
	
	retinaCopy = "@2x";
	
}
else {

	retinaCopy = "";
	
}

window.onload=function() {

	$("#errorLandscape").css({
		
		"background": 'url("assets/images/rotate'+retinaCopy+'.png") 0px 0',
		"backgroundSize": '348px 214px',
		
	});
	
	$("#preloaderClip").css({

		"background": 'url("assets/images/preloaderSprite'+retinaCopy+'.jpg") 5px 5px',
		"backgroundSize": '140px 1540px'

	});
	
	$("#loadingText").css({
		
		"background": 'url("assets/images/loading'+retinaCopy+'.png") 0px 0px',
		"backgroundSize": '117px 29px',
		"position":"relative",
		"left":"23px",
		"top":"150px",
		"width":"118px",
		"height":"30px"
		
	})
	
	/*$("#previewStuff").css({
		
		"background": 'url("assets/images/previewResults@2x.jpg") 0px 0',
		"backgroundSize": '360px 640px',
		"zIndex": '1000',
		"opacity": "0.5",
		"width":"100%",
		"height":"100%",
		"position":"absolute",
		"top":"0px",
		"left":"0px"
	
	});*/
	
	$("#startGame").css({
		
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -215px 146px',
		"backgroundSize": backgroundSizeMainSprite
		
	});
	
	$("#timerInside").css({
		
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -55px 524px',
		"backgroundSize": backgroundSizeMainSprite

	});
	
	for (r = 0; r <= 5; r++){
		
		$("#goldStar"+[r]).css({
			
			"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -5px -5px',
			"backgroundSize": backgroundSizeMainSprite
			
		});
		
		$("#greyStar"+[r]).css({
			
			"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -111px -5px',
			"backgroundSize": backgroundSizeMainSprite
		
		});

	}
			
	$("#Stars").css({
			
		"background": 'url("assets/images/resultsStars'+retinaCopy+'.png") ',
		"backgroundSize": "319px 363px"
			
	});
	
	$("#resultsScreen #robotLose").css({
	
		"background": 'url("assets/images/results/robotLose'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"70px 150px"
		
	});
	
	$("#resultsScreen #robotWon").css({
	
		"background": 'url("assets/images/results/robotWon'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"53px 552px"
		
	});
	
	$("#resultsScreen #signPostWon").css({
	
		"background": 'url("assets/images/results/signPostWin'+retinaCopy+'.png") 0px 0px',
		"backgroundSize":"67px 141px"
		
	});
	
	$("#resultsScreen #signPostLose").css({
	
		"background": 'url("assets/images/results/signPostLost'+retinaCopy+'.png") 0px 0px',
		"backgroundSize":"77px 141px"
		
	});
	
	$("#resultsScreen #raindeerWon").css({
	
		"background": 'url("assets/images/results/RaindeerWin'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"189px 1456px"
		
	});
	
	
	$("#resultsScreen #raindeerLose").css({
	
		"background": 'url("assets/images/gameSix/raindeerEating'+retinaCopy+'.png") 53px 0px',
		"backgroundSize":"188px 1314px"
		
	});
	
	$("#resultsScreen #elfDance").css({
	
		"background": 'url("assets/images/results/elfDancing'+retinaCopy+'.jpg") 0px -3px',
		"backgroundSize":"100px 920px"
		
	});
	
	$("#resultsScreen #elfLost").css({
	
		"background": 'url("assets/images/results/pngElfLostHuff'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"53px 800px"
		
	});
	
	$("#resultsScreen #elfPants").css({
	
		"background": 'url("assets/images/results/elfSantasPantsWin'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"94px 904px"
		
	});
	
	$("#resultsScreen #elfInSnow").css({
	
		"background": 'url("assets/images/results/elfInTheSnow'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"100px 315px"
		
	});
	
	$("#resultsScreen #presantWon").css({
	
		"background": 'url("assets/images/results/presantWon'+retinaCopy+'.png") 0px 0px',
		"backgroundSize":"123px 131px"
		
	});
	
	$("#resultsScreen #snowManWin").css({
	
		"background": 'url("assets/images/results/SnowManWin'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"93px 1200px"
		
	});
	
	$("#resultsScreen #snowManLose").css({
	
		"background": 'url("assets/images/results/SnowManLose'+retinaCopy+'.jpg") 0px 0px',
		"backgroundSize":"82px 1200px"
		
	});
	
	$("#resultsScreen #presantLose").css({
	
		"background": 'url("assets/images/results/presantLost'+retinaCopy+'.png") 0px 0px',
		"backgroundSize":"181px 90px"
		
	});
	
	$("#resultsScreen #abLost").css({
	
		"background": 'url("assets/images/results/abLostSprite'+retinaCopy+'.jpg") -5px -5px',
		"backgroundSize":"159px 2028px"
		
	});
	
	$("#resultsScreen #abWon").css({
	
		"background": 'url("assets/images/results/abWinSprite'+retinaCopy+'.jpg") -5px -5px',
		"backgroundSize":"130px 3211px"
		
	});
	
	$("#resultsScreen #resultsCircle").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -155px 0px',
		"backgroundSize": backgroundSizeMainSprite
	
	});
	
	$("#resultsScreen #resultsWon").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -8px 173px',
		"backgroundSize": backgroundSizeMainSprite
	});
	
	$("#resultsScreen #raindeerFootprints").css({
		
		"background": 'url("assets/images/results/raindeerFootprints'+retinaCopy+'.png") 0px 0px',
		"backgroundSize": "374px 55px"
		
	});
	
	$("#resultsScreen #resultsLost").css({
		
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -9px 124px',
		"backgroundSize": backgroundSizeMainSprite
	});
	
	$("#resultsScreen #resultsBottom").css({
	
		"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -40px -250px',
		"backgroundSize": backgroundSizeMainSprite

	});
	
  var view = window.matchMedia("(orientation: portrait)");

	if(view.matches) {
		orientation = "portrait";
		console.log(orientation);
		//positionPortrait();
	} else {
		orientation = "landscape";
		console.log(orientation);
		//positionLandScape();
	}
	
  view.addListener(function(v) {
  
  	gamePause = gameViews[currentPage]+"Live";
  	whatTimer = gameViews[currentPage]+"timer";
	
		if(v.matches) {
			orientation = "portrait";
			console.log(orientation);
			
			if(eval(gamePause) === true){
				
				counter=setInterval(eval(whatTimer), 1000);
				
				if(currentPage == 1){
					
					window.addEventListener('shake', shakeEventDidOccur, false);
					
				}
				if(currentPage == 4){
					
					t = setTimeout(function(){animateParts(animatePartsStep);},mouthAnimationSpeed);
					
				}
				if(currentPage == 6){
					
					startAgain();
					
				}	
				
			}	
			
		} else {
			orientation = "landscape";
			console.log(orientation);
			
			if(eval(gamePause) === true){
				
				//stopTime
				clearInterval(counter);
				
				if(currentPage == 1){
					
					window.removeEventListener('shake', shakeEventDidOccur, false);
					
				}
				if(currentPage == 4){
					
					clearInterval(t);
					
				}
				if(currentPage == 6){
					
					//clearTimeout(raindeerTimer[changeIndex]);
					console.log(raindeerTimer);
					for(d=0; d <= raindeerTimer.length; d++){
						
						clearTimeout(raindeerTimer[d]);
						
					}
				}	
			}
		}
  });
	
  //sounds

  var introSound = new Howl({urls: ['assets/sounds/intro.mp3', 'assets/sounds/intro.ogg', 'assets/sounds/intro.aac'],loop: true,});
  var gameLost = new Howl({urls: ['assets/sounds/failGame.mp3', 'assets/sounds/failGame.ogg', 'assets/sounds/failGame.aac']});
  var gameWon = new Howl({urls: ['assets/sounds/winGame.mp3', 'assets/sounds/winGame.ogg', 'assets/sounds/winGame.aac']});

  //cache javaScript Pages
  $.ajaxSetup({
  	cache: true
  });
  
  $.ajax({ 
    type: 'GET', 
    url: 'assets/text/main.json', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 

        $.each(data, function(index, element) {
        	mainCopy.push(element);
        	
        });
        
        populateCopy();
    }
    });
    
  function populateCopy(){
	  
	  //console.log(mainCopy[3].span);
	  
  }
   
  //phoneGap allowing Ajax Calls
  
  $.support.cors = true;
  $.mobile.allowCrossDomainPages = true;
  
  // - - - Game Views and Controls - - - //
  var gameViews = ["mainMenu","gameOne","gameTwo","gameThree","gameFour","gameFive", "gameSix", "finalPage"];
  var currentStar = 0;
  var starsWon = 0;
  var currentPage = 10;
  var randomGame = 0;
  var testingNumber = 6;
  var randomGameArray = [1,2,3,4,5];
  
  // - - - object var names - - - //
  var preloader = $('#preloader');
  var preloaderClip = $('#preloaderClip');
  var preLoaderBox = $('#preloaderPresent');
  var gameEndCheck;
  var gameEndBooleon;
  var raindeerMoving;
  
  for (i=0;i<=5;i++){
	  
	$("#goldStar"+[i]).animate({transform: 'scale(3,3) rotate(135deg)', opacity:"0"},0);
	  
  }
  
  TweenLite.to($("#elfPants"), 0, {scaleX:0.9, scaleY:0.9});
  TweenLite.to($("#elfDance"), 0, {scaleX:0.9, scaleY:0.9});
  
  $("#replayBtn").hide();
  
  //var ismobile=navigator.userAgent.match(/(iPhone)|(iPod)|(Android)|(webOS)/i);
  ismobile=navigator.userAgent.toLowerCase();
  
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
  
   document.ontouchmove = function(e) {e.preventDefault();};
	  
	function initPage(loadPage){
	
		console.log(loadPage);
		
		if(loadPage == 0){
			
			//introSound.play();
			
		}
	
		if(firstTimeArray[loadPage] === true){  
			
			// - - - Load external JS file, and run code if successful or return Error message - - - //
			$.getScript( "assets/js/"+gameViews[loadPage]+".js" )
			  .done(function( script, textStatus ) {
			  
			   	bgImage = gameViews[loadPage]+"Images"; 
			   	// - - - eval will convert the string to an array object - - - //
			   	bgImage = eval(bgImage);
			   	currentPage = loadPage;
			   	startPreLoader(bgImage);
			   	startSpriteAnimation("#preloaderClip",10,0,100,5,140,0,0,0);
			   	//startSpriteAnimation("#raindeerWon",7,0,110,0,182,0,11,0);
			   	//startSpriteAnimation("#snowManWin",7,0,100,0,150,0,10,0);
			   	//startSpriteAnimation("#elfLost",7,0,200,0,100,0,9,0);
			   	//startSpriteAnimation("#robotLose",1,0,500,0,75,0,8,0);
			   	//startSpriteAnimation("#snowManLose",7,0,100,0,150,0,7,0);
			   	//startSpriteAnimation("#robotWon",7,0,100,0,69,0,6,0);
			   	//startSpriteAnimation("#elfDance",7,0,100,0,115,0,5,0);
			   	//startSpriteAnimation("#elfPants",7,0,100,0,113,0,4,0);
			   	
			    firstTimeArray[loadPage] = false;
			    //startSpriteAnimation( asset,loop,loopNumber,speed,width,amount,newAmount,timerVar,startAmount)
			   	
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
		startSpriteAnimation("#preloaderClip",10,0,150,5,140,5,0,0);
		
		//setTimeout(function(){stopPreloader(bgImage[0],bgImage[1])}, 0);
		//startGame(currentPage);
	}
	
	}
	
	jQuery( "#startGame").on( "tap", function() {
	
		introSound.play();
		introSound.fadeOut(0.0, 10);
		
		var startString = gameViews[currentPage]+"Start";
		startString = window[startString];
		
		startString();
		
		$("#startGame").css({
			display:"none"	
		})

	});
	
	function startGame(currentPage){
		
		// - - - Convent string into a function name - - - //
		var initGameString = gameViews[currentPage]+"Init";
		initGameString = window[initGameString];
		console.log(initGameString);
		
		if(currentStar <= 5){
				
				initGameString();
			
			}
		else if(currentStar == 6){
				
			initGameString(starsWon);
				
		}
		
		setTimeout(function(){
		
		if(currentPage >= 1 && currentPage <= 6 ){gameEndCheck=setInterval(hasGameEnd, 1000)}
		
		},3000);

		jQuery( "#startBtn").on( "tap", function() {
			
		introSound.play();
		introSound.fadeOut(0.0, 10);
			
		initPage(shuffleArray[randomGame]);
		//initPage(testingNumber);
		
		setTimeout(function(){
			
			$("#mainMenu").remove();
			$("#mainMenuElements").remove();
			
		},2500);
		
	});
	}
		
	function hasGameEnd(){
		
		gameEndBooleon = gameViews[currentPage]+"Ended";
		gameEndStar = gameViews[currentPage]+"Star";
		if(eval(gameEndBooleon) === true){
					
			clearInterval(gameEndCheck);
			randomGame++;
			
			if(eval(gameEndStar) === true){
	
				$('#resultsText p:first').text("Elf worked his socks");
				$('#resultsText p:last').text("off there, nice job!");
				$('#resultsText').animate({opacity:1},500);
				$('#resultsWon').animate({opacity:1},500);
				$("#goldStar"+[currentStar]).css("display","inline");
				$("#goldStar"+[currentStar]).animate({transform: 'scale(1,1) rotate(0deg)', opacity:"1"},200);
				starsWon++;
				console.log("starsWon"+starsWon);
				animateResultsPage(currentPage,"won");
				gameWon.play();
			}
			else{
			
				$('#resultsText p:first').text("Naughty Elf has yet to");
				$('#resultsText p:last').text("learn his lesson!");
				$('#resultsText').animate({opacity:1},500);
				$('#resultsLost').animate({opacity:1},500);
				$("#goldStar"+[currentStar]).css({
				
					"display":"inline",
					"backgroundPosition":"-60px -5px"
				
				});
				$("#goldStar"+[currentStar]).animate({transform: 'scale(1,1) rotate(0deg)', opacity:"1"},0);
				animateResultsPage(currentPage,"lost");
				gameLost.play();
			}
			
			currentStar++;
					
			if(currentStar <= 4){
				setTimeout(function(){initPage(shuffleArray[randomGame]);},4000);
				//setTimeout(function(){initPage(testingNumber)},6000);
			
			}else if(currentStar == 5){
			
				setTimeout(function(){initPage(6)},6000);
				
			}
			else if(currentStar == 6){
				
				setTimeout(function(){initPage(7)},6000);
				
			}
		}
		else{
			
			$('#resultsText p:first').text("");
			$('#resultsText p:last').text("");
			$('#resultsText').animate({opacity:0},0);
			$('#resultsWon').animate({opacity:0},0);
			$('#resultsLost').animate({opacity:0},0);
			
		}	
	}
	
	function pausePage(){
		
		//need for Live
		
	}
	
	function resumeGame(){
		
		//need for Live
		
	}
	
	function animateResultsPage(currentPage,condition){
				
		if(condition == "won"){
			
			switch(currentPage){
				
				case 1:
				startSpriteAnimation("#elfPants",7,0,100,0,113,0,4,0);
				$("#signPostWon").css({"display":"inline"});
				$("#elfPants").css({"display":"inline"});
				TweenLite.to($('#signPostWon'), 0.5, {alpha:1});
				TweenLite.to($('#elfPants'), 0.5, {alpha:1});
				removeResultsParams($("#elfPants"),4);
				removeResultsParams($("#signPostWon"));
				break;
				case 2:
				startSpriteAnimation("#robotWon",7,0,100,0,69,0,6,0);
				startSpriteAnimation("#elfDance",7,0,100,0,115,0,5,0);
				TweenLite.to($("#elfDance"), 0, {scaleX:0.9, scaleY:0.9});
				$("#elfDance").css({"display":"inline"});
				$("#robotWon").css({"display":"inline"});
				TweenLite.to($('#elfDance'), 0.5, {alpha:1});
				TweenLite.to($('#robotWon'), 0.5, {alpha:1});
				removeResultsParams($("#robotWon"),6);
				removeResultsParams($("#elfDance"),5);
				break;
				case 3:
				startSpriteAnimation("#snowManWin",7,0,100,0,150,0,10,0);
				startSpriteAnimation("#elfDance",7,0,100,0,115,0,5,0);
				TweenLite.to($("#elfDance"), 0, {scaleX:0.9, scaleY:0.9});
				$("#elfDance").css({"display":"inline"});
				$("#snowManWin").css({"display":"inline"});
				TweenLite.to($('#elfDance'), 0.5, {alpha:1});
				TweenLite.to($('#snowManWin'), 0.5, {alpha:1});
				removeResultsParams($("#snowManWin"),10);
				removeResultsParams($("#elfDance"),5);
				break;
				case 4:
				startSpriteAnimation("#elfDance",7,0,100,0,115,0,5,0);
				$("#elfDance").css({"display":"inline"});
				TweenLite.to($("#elfDance"), 0, {scaleX:0.7, scaleY:0.7});
				TweenLite.to($('#elfDance'), 0.5, {alpha:1});
				removeResultsParams($("#elfDance"),5);
				startSpriteAnimation("#abWon",18,0,100,-5,169,-5,2,-5);
				$("#abWon").css({"display":"inline"});
				TweenLite.to($('#abWon'), 0.5, {alpha:1});
				removeResultsParams($("#abWon"),2);
				break;
				case 5:
				startSpriteAnimation("#elfDance",7,0,100,0,115,0,5,0);
				TweenLite.to($("#elfDance"), 0, {scaleX:0.9, scaleY:0.9});
				$("#elfDance").css({"display":"inline"});
				$("#presantWon").css({"display":"inline"});
				TweenLite.to($('#elfDance'), 0.5, {alpha:1});
				TweenLite.to($('#presantWon'), 0.5, {alpha:1});
				removeResultsParams($("#presantWon"));
				removeResultsParams($("#elfDance"),5);
				break;
				case 6:
				startSpriteAnimation("#raindeerWon",7,0,110,0,182,0,11,0);
				$("#raindeerWon").css({"display":"inline"});
				TweenLite.to($('#raindeerWon'), 0.5, {alpha:1});
				removeResultsParams($("#raindeerWon"),11);
				break;
				
			}
		}
		
		if(condition == "lost"){
			
			switch(currentPage){
				
				case 1:
				startSpriteAnimation("#elfLost",7,0,200,0,100,0,9,0);
				$("#signPostLose").css({"display":"inline"});
				$("#elfLost").css({"display":"inline"});
				$("#elfLost").css({"left":"139px"});
				TweenLite.to($('#signPostLose'), 0.5, {alpha:1});
				TweenLite.to($('#elfLost'), 0.5, {alpha:1});
				removeResultsParams($("#elfLost"),9);
				removeResultsParams($("#signPostLose"));
				break;
				case 2:
				startSpriteAnimation("#elfLost",7,0,200,0,100,0,9,0);
				startSpriteAnimation("#robotLose",1,0,500,0,75,0,8,0);
				$("#elfLost").css({"display":"inline"});
				$("#robotLose").css({"display":"inline"});
				$("#elfLost").css({"left":"160px"});
				TweenLite.to($('#elfLost'), 0.5, {alpha:1});
				TweenLite.to($('#robotLose'), 0.5, {alpha:1});
				removeResultsParams($("#elfLost"),9);
				removeResultsParams($("#robotLose"),8);
				break;
				case 3:
				startSpriteAnimation("#elfInSnow",4,0,100,0,63,0,3,0);
				startSpriteAnimation("#snowManLose",7,0,100,0,150,0,7,0);
				TweenLite.to($("#elfInSnow"), 0, {scaleX:1, scaleY:1});
				$("#elfInSnow").css({"display":"inline"});
				$("#snowManLose").css({"display":"inline"});
				TweenLite.to($('#elfInSnow'), 0.5, {alpha:1});
				TweenLite.to($('#snowManLose'), 0.5, {alpha:1});
				removeResultsParams($("#snowManLose"),7);
				removeResultsParams($("#elfInSnow"),3);
				break;
				case 4:
				startSpriteAnimation("#abLost",11,0,100,-5,169,-5,1,-5);
				startSpriteAnimation("#elfInSnow",4,0,100,0,63,0,3,0);
				TweenLite.to($("#elfInSnow"), 0, {scaleX:0.7, scaleY:0.7});
				$("#abLost").css({"display":"inline"});
				TweenLite.to($('#abLost'), 0.5, {alpha:1});
				$("#elfInSnow").css({"display":"inline"});
				TweenLite.to($('#elfInSnow'), 0.5, {alpha:1});
				removeResultsParams($("#abLost"),1);
				removeResultsParams($("#elfInSnow"),3);
				break;
				case 5:
				startSpriteAnimation("#elfLost",7,0,200,0,100,0,9,0);
				$("#presantLose").css({"display":"inline"});
				$("#elfLost").css({"display":"inline"});
				$("#elfLost").css({"left":"200px"});
				TweenLite.to($('#presantLose'), 0.5, {alpha:1});
				TweenLite.to($('#elfLost'), 0.5, {alpha:1});
				removeResultsParams($("#elfLost"),9);
				removeResultsParams($("#presantLose"));
				break;
				case 6:
				startSpriteAnimation("#elfInSnow",4,0,100,0,63,0,3,0);
				TweenLite.to($("#elfInSnow"), 0, {scaleX:1, scaleY:1});
				$("#raindeerLose").css({"display":"inline"});
				$("#raindeerFootprints").css({"display":"inline"});
				$("#elfInSnow").css({"display":"inline"});
				TweenLite.to($('#elfInSnow'), 0.5, {alpha:1});
				TweenLite.to($('#raindeerLose'), 0.5, {alpha:1});
				TweenLite.to($('#raindeerFootprints'), 0.5, {alpha:1});
				removeResultsParams($("#elfInSnow"),3);
				removeResultsParams($("#raindeerLose"));
				removeResultsParams($("#raindeerFootprints"));
				animateWalkResults(0,75,73,1200,4);
				setTimeout(function(){
					
					removeTimeout(raindeerMoving);
					
				},6000);
				break;
				
			}
		}
	}
	
	function animateWalkResults(whatNumber,whatSpeed,whatMin,WhatMax,increment){
	
		whatNumber = whatNumber - whatMin;
		
		$("#raindeerLose").css({
			
			backgroundPosition: '-131px '+ whatNumber +'px'
			
		});
		
		TweenLite.to("#raindeerLose", 0.150, {left:"-="+increment, ease:Sine.easeInOut});
	
		raindeerMoving = setTimeout(function(){
		
			animateWalkResults(whatNumber,75,73,1200,4);
		
		},whatSpeed);
		
		if(whatNumber <= -WhatMax){
			
			whatNumber = 0;
			
		}
		
	}
	
	function removeResultsParams(whatElement,whatArray){
		
		setTimeout(function(){
			
			TweenLite.to($(whatElement), 0.5, {alpha:0},function(){
				
				$(whatElement).css({"display":"none"});
				
			});
			
			TweenLite.to($(whatElement), 0.5, {alpha:0});
			clearTimeout(intervalArray[whatArray]);
		
		},8000);
	}
	
	function startSpriteAnimation( asset,loop,loopNumber,speed,width,amount,newAmount,timerVar,startAmount){
		
		loopNumber++

		newAmount = newAmount - amount;

		//console.log(newAmount);

		if(loopNumber >= loop){
			
			loopNumber = 0; 
			newAmount = startAmount;
			
		}
		
		$(asset).css({
	
			"backgroundPosition": width+'px '+newAmount+'px',
	
		});

		intervalArray[timerVar] = setTimeout(function(){
	
			startSpriteAnimation( asset,loop,loopNumber,speed,width,amount,newAmount,timerVar,startAmount)
	
		},speed);
		
	}
	
	function removeSpriteAnimation(){
		
		
		
	}
	
	function startPreLoader(whatArray){
		
		// - - - put the images in blocks and alpha them on - - - //
		preloader.css("display","block");
		preloaderClip.css("display","block");
		TweenLite.to(preloader, 0.5, {alpha:1});
		TweenLite.to(preloaderClip, 0.5, {alpha:1});
		//preLoadAnimation(0);
		
		//Load Gif image

	setTimeout(function(){loadImage(whatArray);}, 1000);

	}

	function loadImage(name){
		
		//console.log(name.length);
		console.log(name);
		
		for(i=0; i <= name.length - 1; i++){
			
			// - - - pre Loading images - - - //
			//image = new Image();
			//image.src = name[i];
			//image.onLoad = imageLoaded(name);]
			myLoader.addFiles(name[i]); 
			
		}
	}
	
	myLoader.onfinish = function(){
	
		setTimeout(function(){
			
			stopPreloader(eval(gameViews[currentPage]+"Images"));
			//console.log(bgImage);
			
		},2000)
		
		//console.log(); 

	};

	function stopPreloader(name){
	
		// - - - alpha images off and set display none - - - //
		setTimeout(function(){startGame(currentPage)},500);
		setTimeout(function(){
		
			clearTimeout(intervalArray[0]);
		
		},1000);
		
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
		$("#resultsScreen").hide();
		
	}
	
	initPage(0);
	
	//jQuery("#replayBtn").on( "tap", function() {
	
	
			//window.open('http://www.naughtylittleelf.com/', '_self');
			
			/*gameViews = ["mainMenu","gameOne","gameTwo","gameThree","gameFour","gameFive", "gameSix", "finalPage"];
			currentStar = 0;
			starsWon = 0;
			currentPage = 10;
			randomGame = 0;
			randomGameArray = [1,2,3,4,5];
			shuffleArray = shuffle(randomGameArray);
			setTimeout(function(){
				
				$("#finalPageImages").remove();
				$("#replayBtn").hide();
				TweenLite.to("#replayBtn", 0, {y:-530,  ease:Elastic.easeOut});
				
			},1500);
			
			 
			  for (i=0;i<=5;i++){
				  
				$("#goldStar"+[i]).animate({transform: 'scale(3,3) rotate(135deg)', opacity:"0"},0);
				  
			  }
			
			for (r = 0; r <= 5; r++){
		
				$("#goldStar"+[r]).css({
					
					"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -5px -5px',
					"backgroundSize": backgroundSizeMainSprite
					
				});
				
				$("#greyStar"+[r]).css({
					
					"background": 'url("assets/images/mainSprite'+retinaCopy+'.png") -111px -5px',
					"backgroundSize": backgroundSizeMainSprite
				
				});
		
			}
			
			initPage(0);*/
	
	//});

	
	/*function checkDevice (whatMobile){

		//alert(whatMobile.indexOf('iphone'));
		//alert(whatMobile);
		
		if(whatMobile.toLowerCase().indexOf("iphone") >= 0 && whatMobile.toLowerCase().indexOf("safari") >= 0){
			
			initPage(0);
			alert("hit");
			
		}
		else if(whatMobile.toLowerCase().indexOf("iphone") >= 0){
			
			alert("Open this link Safari Chrome or Firefox Please");
			
		}
		else if(whatMobile.toLowerCase().indexOf("firefox") >= 0){
			
			initPage(0);
			
		}
		else{
			
			alert("not in a supported browser");
			
		}
		
		/*if( whatMobile.indexOf('iphone') !== -1){
			
			initPage(0);
			
		}
		else{
			
			alert("false");
			
		}*/
		
		/*switch(whatMobile.contains()){
		
			case "android":
			alert("must be desktop");
			//initPage(0);
			
			break;
			
			case "iphone":
			alert("iPhone");
			//initPage(0);
			
			break;
			
			case "ipad":
			//initPage(7);
			alert("iPad");
			break;
			
			default:
			//initPage(0);
			alert("must be desktop or default");
			
		}*/
		
	//}
	
	//checkDevice(ismobile);
	
}