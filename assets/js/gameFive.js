var gameFiveImages = [];
var gameFiveColor = ["#bedbe5"];
var gameFiveTimer = 11;
var counter;
var gameFiveEnded = false;
var gameFiveStar = false;
var spriteLocation;
var backgroundS;

var rot;
var rotTmp;
var rotRnd;
var leftDraggable 
var rightDraggable 

//the incremental amount per handle rotation
var rotInc = 1;
//combined accured incremental amount
var rotAmt;
//gets the left postion of the marker (xProgress - notVar)
var mkrPos;

//vars to hold rotation (rot) as degrees not radians for green wheels
var cssRotL;
var cssRotM;
var cssRotS;

//init the state of the left/right movement as not complete
var leftComplete;
var rightComplete;

var mkrProg;


var tl;
var tlProg;
var prsObj;
var liftObj;


if (retina) {
	//console.log('retina');
	gameFiveImages = ["assets/images/bg2x.png","assets/images/gameFive/mainSprite@2x.png"];
	spriteLocation = "assets/images/gameFive/mainSprite@2x.png";
	backgroundS = "554px 788px";
}
else {
	//console.log('notRetina');
	gameFiveImages = ["assets/images/bg2x.png","assets/images/gameFive/mainSprite.png"];
	spriteLocation = "assets/images/gameFive/mainSprite.png";
	backgroundS = "554px 788px";

}

function gameFiveInit(){

	gameFiveEnded = false;
	gameFiveTimer = 11;
	
	$( "#gameNavigation #gameArea" ).append( "<div id='gameFive'><p>Start Game Instructions</p></div><div id='gameFiveElements'><div id='landscape'></div><div id='landscapeColour'></div><div id='funnel'></div><div id='greenWheelL'></div><div id='greenWheelM'></div><div id='greenWheelS'></div><div id='sack'></div><div id='topWheelShadow'></div><div id='lift'></div><div id='present'></div><div id='handleLeft'></div><div id='distance'><div id ='marker'></div></div><div id='handleRight'></div></div>" );
	
	$("#gameFive").css({	
		
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
		
		$("#gameFive p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		$("#gameFiveElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"30px",

		});
	
	/*
		$("#gameBg").css({
				
			background: "url("+ bgLocation +")",			
			backgroundSize: "360px 640px",
			XXwidth: "100%",
			XXheight: "100%",
			width: "360px",
			height: "640px",
			position:"absolute",
			top: "-0px",
			left:"-0px",
			zIndex:"1",
			XXopacity: "0.5",
			XXborder: "1px solid #FF00FF"
			
		});
		*/
		
		$("#gameFiveElements #landscape").css({
				
			background: "url("+ spriteLocation +")449px -1185px ",			
			backgroundSize: backgroundS,
			width:"360px",
			height:"310px",
			top:"139px",
			left:"-20px",
			position:"absolute",
			zIndex:"2",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		$("#gameFiveElements #landscapeColour").css({
			backgroundColor: "#FFFFFF",	
			width:"360px",
			height:"40px",
			top:"440px",
			left:"-20px",
			position:"absolute",
			zIndex:"3",
			XXborder: "1px solid #FFFF00"			
		});
		
		
		$("#gameFiveElements #funnel").css({
				
			background: "url("+ spriteLocation +")489px 1469px ",			
			backgroundSize: backgroundS,
			width:"116px",
			height:"93px",
			top:"20px",
			left:"-22px",
			position:"absolute",
			zIndex:"3",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		$("#gameFiveElements #sack").css({
				
			background: "url("+ spriteLocation +")257px 591px ",			
			backgroundSize: backgroundS,
			width:"195px",
			height:"190px",
			top:"280px",
			left:"152px",
			position:"absolute",
			zIndex:"4",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		$("#gameFiveElements #greenWheelL").css({
				
			background: "url("+ spriteLocation +")495px 568px ",			
			backgroundSize: backgroundS,
			width:"42px",
			height:"42px",
			top:"197px",
			left:"21px",
			position:"absolute",
			zIndex:"2",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		
		$("#gameFiveElements #greenWheelM").css({
				
			background: "url("+ spriteLocation +")450px 557px ",			
			backgroundSize: backgroundS,
			width:"34px",
			height:"34px",
			top:"195px",
			left:"198px",
			position:"absolute",
			zIndex:"2",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		
		$("#gameFiveElements #greenWheelS").css({
				
			background: "url("+ spriteLocation +")412px 547px ",			
			backgroundSize: backgroundS,
			width:"18px",
			height:"19px",
			top:"124px",
			left:"249px",
			position:"absolute",
			zIndex:"5",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		$("#gameFiveElements #topWheelShadow").css({
				
			background: "url("+ spriteLocation +")247px 1511px ",			
			backgroundSize: backgroundS,
			width:"180px",
			height:"126px",
			top:"19px",
			left:"198px",
			position:"absolute",
			zIndex:"5",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		
		$("#gameFiveElements #lift").css({
				
			background: "url("+ spriteLocation +")344px 759px ",			
			backgroundSize: backgroundS,
			width:"62px",
			height:"220px",
			top:"-12px",
			left:"226px",
			position:"absolute",
			zIndex:"2",
			clip: "rect(155px, 70px, 220px, 0px)",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		
		$("#gameFiveElements #handleLeft").css({
				
			background: "url("+ spriteLocation +")490px -6px ",			
			backgroundSize: backgroundS,
			width:"102px",
			height:"102px",
			top:"268px",
			left:"4px",
			position:"absolute",
			zIndex:"2",
			XXborder: "1px solid #FF0000"
			
		});
		
		
		$("#gameFiveElements #handleRight").css({
				
			background: "url("+ spriteLocation +") 490px -6px ",			
			backgroundSize: backgroundS,
			width:"102px",
			height:"102px",
			top:"21px",
			left:"202px",
			position:"absolute",
			zIndex:"5",
			XXborder: "1px solid #FF0000"
			
		});
		
		
		$("#gameFiveElements #present").css({
				
			background: "url("+ spriteLocation +")239px -2px ",			
			backgroundSize: backgroundS,
			width:"40px",
			height:"55px",
			XXtop:"145px",
			top:"45px",
			left:"26px",
			position:"absolute",
			zIndex:"2",
			XXborder: "1px solid #FF00FF"
			
		});
		
		$("#gameFiveElements #distance").css({
				
			width:"300px",
			height:"20px",
			top:"450px",
			left:"10px",
			position:"absolute",
			zIndex:"4",
			border: "1px solid #FF0000",
			opacity: "0"
			
		});

		$("#gameFiveElements #marker").css({
				
			width:"20px",
			height:"20px",
			top:"0px",
			left:"0px",
			position:"absolute",
			backgroundColor: "#3300FF",
			zIndex:"5",
			border: "1px solid #FF00FF"
			
		});
		
		
		$("#gameFive").show();
		$("#gameInstructionBg").show();
		setTimeout(gameFiveStart, 5000);
	
}

function gameFiveStart(){
	
	$('#gameFive').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	counter=setInterval(gameFivetimer, 2000);
	gameFivetimer();
	
	tl = new TimelineMax({paused:true});
	
	//add code here
	prsObj = $('#present');			 
	TweenLite.to(prsObj, 1, {css:{top:"145px"}, ease:Bounce.easeOut});
	
	$("#marker").css('left', '0px');	
	leftComplete = false;
	rightComplete = false;
	mkrPos = 0;
	mkrProg = 0;
	rot = 0;
	rotAmt = 0;
	rotTmp = 0;
	tlProg = 0;
	//tl.progress(0);
	
	
	leftDraggable = Draggable.create("#handleLeft", {type: "rotation", throwProps: false,
			onDrag:function() {
			//console.log('dragStarted')	 	
		        rot = $("#handleLeft")[0]._gsTransform.rotation*(180 / Math.PI)
	            rotRnd = Math.round(rot)
	            mkrPos = $('#marker').position().left;
	            
	            cssRotL = "rotate(" + rot*5 + "deg)";
	            cssRotM = "rotate(" + rot*15 + "deg)";
	            
	             monMkr();
	            
	            if(mkrPos >=0){
	            
		            if(rotRnd <rotTmp){	            	
			            rotAmt -= rotInc;			     
		            }
		            
		            if(rotRnd >rotTmp){	           		
			            rotAmt += rotInc;
		            }
		             rotTmp = rotRnd
		                 
		            $("#marker").css('left', rotAmt);
		            $("#greenWheelL").css({ "transform": cssRotL});
		            $("#greenWheelM").css({ "transform": cssRotM});

	            }
	            
	         else {
	           		console.log('lessThan0');
	            	rotAmt += rotInc;
	            	$("#marker").css('left', rotAmt)
	            	tl.progress(0);
	            	leftDraggable[0].disable();
	          } 
	          
	         if(mkrPos >150){
	         	  console.log('greaterThan150');
	         	  leftComplete = true;
	         	  rightDraggable[0].enable();
		          rotAmt -= rotInc;
		          $("#marker").css('left', rotAmt)
	              leftDraggable[0].disable();
	          }              
	        },
	                
	        onDragEnd:function() {
	          console.log("dragEnded");
	          if(leftComplete == false){
		          leftDraggable[0].enable();
	          }
	        }, 
		});
	

		rightDraggable = Draggable.create("#handleRight", {type: "rotation", throwProps: false,
			onDrag:function() {		
				//console.log('dragStarted')	  	
		        rot = $("#handleRight")[0]._gsTransform.rotation*(180 / Math.PI)
	            rotRnd = Math.round(rot)
	            mkrPos = $('#marker').position().left;
	            
	            cssRotS = "rotate(" + rot*5 + "deg)";
	            
	            monMkr();
	            
	            if(mkrPos >=150){
	            
		            if(rotRnd <rotTmp){	            	
			            rotAmt -= rotInc;
		            }
		            
		            if(rotRnd >rotTmp){	           		
			            rotAmt += rotInc;
		            }
		             rotTmp = rotRnd
		                 
		            $("#marker").css('left', rotAmt);
		            $("#greenWheelS").css({ "transform": cssRotS});
	            
	            }
	            
	         else {
	           		console.log('lessThan150');
	            	rotAmt += rotInc;
	            	$("#marker").css('left', rotAmt)
	            	rightDraggable[0].disable();
	          } 
	          
	         if(mkrPos >299){
	         	  console.log('greaterThan300');
	         	  console.log('//////gameWin');
	         	  gameFiveComplete();
	         	  //gameFiveWon();
	         	  rightComplete = true;
		          rotAmt -= rotInc;
		          $("#marker").css('left', rotAmt)
	              rightDraggable[0].disable();
	          }              
	        },
	        
	        onDragEnd:function() {
	          console.log("dragEnded");
	          if(rightComplete == false){
		          rightDraggable[0].enable();
	          }
	        }, 
		});
		rightDraggable[0].disable();	
		
		
		
		function monMkr(){
			mkrProg = Math.round((mkrPos/300)*100);
			//console.log('mkrProg '+mkrProg+"%")
			
			tlProg = tl.progress();
			//console.log('tlProg '+tlProg+"%")
			
			tl.progress(mkrProg/100);
		}
		
		 liftObj = $('#lift');
		 prsObj = $('#present');
		
		
		tl.add( TweenLite.to(prsObj, 1, {left:236}) );
		tl.appendMultiple([new TweenLite(prsObj, 1, {top:270}),
                           new TweenLite(liftObj, 1, {css:{clip:"rect(30px,70px,220px,0px)", top:112}})]);
				
		function tlComplete(){
			console.log('tlComplete');
		}
		
		
	}



function gameFivetimer(){

		 gameFiveTimer --;
		 $('#timerInside').animate({width:"-=30px"},500);
		 if (gameFiveTimer <= 0)
		 {		 
			 clearInterval(counter);
			 gameFiveLost();

		 }
}

function gameFiveComplete(){
		//console.log('gameFiveComplete')
		clearInterval(counter);
		grnWhlsObj = $('#greenWheelS');
		TweenLite.to(grnWhlsObj, 2, {css:{rotation:720}, delay:0.1, ease:Elastic.easeOut});
		TweenLite.to(liftObj, 2, {css:{clip:"rect(150px,70px,220px,0px)", top:"-12px"}, delay:0.1, ease:Elastic.easeOut,onComplete:gameFiveWon});
}

function gameFiveWon(){
		
		 gameFiveEnded = true;
		 gameFiveStar = true;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();

	}
	
function gameFiveLost(){

		 gameFiveEnded = true;
		 gameFiveStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();
		 
	}