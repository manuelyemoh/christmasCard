var gameFiveImages = [];
var gameFiveColor = ["#C9E3F2"];
var gameFiveTimer = 11;
var counter;
var gameFiveLive = false;
var gameFiveEnded = false;
var gameFiveStar = false;
var spriteLocation;
var backgroundS;

var arrowL;
var arrowLeftSeq;

var arrowR;
var arrowRightSeq;



var rot;
var rotTmp;
var rotRnd;
var leftDraggable 
var rightDraggable 

//the incremental amount per handle rotation
var rotInc = 3;
//combined accured incremental amount
var rotAmt;
//gets the left postion of the marker (xProgress - notVar)
var mkrPos;

//vars to hold rotation (rot) as degrees not radians for green wheels
var cssRotL;
var cssRotM;
var cssRotS;

var leftObj;
var rightObj;

var mkrProg;

var tl;
var tlProg;
var prsObj;
var liftObj;


if (retina) {
	//console.log('retina');
	gameFiveImages = ["assets/images/bg2x.png","assets/images/gameFive/mainSprite@2x.png","assets/images/results/presantWon@2x.png","assets/images/results/presantLost@2x.png","assets/images/results/elfDancing@2x.jpg","assets/images/results/pngElfLostHuff@2x.jpg"];
	spriteLocation = "assets/images/gameFive/mainSprite@2x.png";
	inLocation = "assets/images/instructionImages@2x.png";
	
	arrowRightSeq = "assets/images/gameFive/arrowSeqRight@2x.gif";
	arrowR = "48px 80px";
	
	arrowLeftSeq = "assets/images/gameFive/arrowSeqLeft@2x.gif";
	arrowL = "48px 80px";
	
	backgroundS = "554px 788px";
}
else {
	//console.log('notRetina');
	gameFiveImages = ["assets/images/bg2x.png","assets/images/gameFive/mainSprite.png","assets/images/results/presantWon.png","assets/images/results/presantLost.png","assets/images/results/elfDancing.jpg","assets/images/results/pngElfLostHuff.jpg"];
	spriteLocation = "assets/images/gameFive/mainSprite.png";
	inLocation = "assets/images/instructionImages.png";
	
	arrowRightSeq = "assets/images/gameFive/arrowSeqRight.gif";
	arrowR = "48px 80px";
	
	arrowLeftSeq = "assets/images/gameFive/arrowSeqLeft.gif";
	arrowL = "48px 80px";
	
	backgroundS = "554px 788px";

}

function gameFiveInit(){

	gameFiveEnded = false;
	gameFiveTimer = 11;
		
	//$("#gameNavigation").append("<div id='previewIn'>");
	
	$( "#gameNavigation #gameArea" ).append( "<div id='gameFive'><p>"+mainCopy[4].lineOne+"</p><p>"+mainCopy[4].lineTwo+"<span> "+ mainCopy[4].span+" "+"</span>"+mainCopy[4].lineThree+"</p></div><div id='inImage'></div><div id='gameFiveElements'><div id='landscape'></div><div id='landscapeColour'></div><div id='funnel'></div><div id='greenWheelL'></div><div id='greenWheelM'></div><div id='greenWheelS'></div><div id='sack'></div><div id='topWheelShadow'></div><div id='lift'></div><div id='present'></div><div id='handleLeft'></div><div id='distance'><div id ='marker'></div></div><div id='handleRight'></div><div id='arrowRight'></div><div id='arrowLeft'></div></div>" );
	
	
	$("#gameFive").css({	
		
			top: "100px",
			width: "282px",
			color: "white",
			textAlign: "center",
			left: "18px",
			position: "absolute",
			zIndex:"10"
			
		});
		
		$("#gameFive p").css({
			
			fontFamily:"gerogia",
			letterSpacing:"0.5px",
			fontSize:"20px",
			lineHeigh:"23px",
			margin: "0",
			padding: "0",
			position: "relative"
			
		});
		
		$("#gameFive p span").css({
			
			
			fontSize:"22px",
			fontWeight:"bold",
			color:"#f74a4a"
			
			
		});
		
		$("#gameFive p:last").css({
			
			top:"18px",
			letterSpacing:"0.7px",
			width:"236px",
			lineHeight:"23px",
			left:"25px"
			
	
		});
		
		$("#inImage").css({
			
			background:'url('+ inLocation +') no-repeat scroll -0px -150px',
			backgroundSize:"375px 233px",
			position:"absolute",
			left:"70px",
			top:"342px",
			width:"180px",
			height:"78px",
			zIndex:"11"
			
		});
		
		$("#gameFiveElements").css({

			width:"100%",
			height:"100%",
			position:"absolute",
			top:"30px",

		});
		
		
	 $("#gameFiveElements #arrowRight").css({
				
			background: "url("+ arrowRightSeq +")no-repeat 0px 0px",			
			backgroundSize: arrowR,
			width:"48px",
			height:"80px",
			top:"34px",
			left:"156px",
			position:"absolute",
			zIndex:"2",
			opacity:"0",
			XXborder: "1px solid #FFFF00"
			
		});
		
		$("#gameFiveElements #arrowLeft").css({
				
			background: "url("+ arrowLeftSeq +")no-repeat 0px 0px",			
			backgroundSize: arrowL,
			width:"48px",
			height:"80px",
			top:"282px",
			left:"109px",
			position:"absolute",
			zIndex:"2",
			XXopacity:"0.5",
			XXborder: "1px solid #FFFF00"
			
		});
		
		
					
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
			height:"300px",
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
			top:"20px",
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
			zIndex:"3",
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
			left:"1px",
			position:"absolute",
			backgroundColor: "#3300FF",
			zIndex:"5",
			border: "1px solid #FF00FF"
			
		});
		
		
		$("#gameFive").show();
		$("#gameInstructionBg").show();
		$("#startGame").css({
			display:"inline"
		})
	
}

function gameFiveStart(){
	
	$('#gameFive').hide();
	$("#gameInstructionBg").hide();
	$('#timerInside').animate({width:"296px"},0);
	$('#timer').show();
	$("#inImage").remove();
	
	
	counter=setInterval(gameFivetimer, 2000);	
	gameFivetimer();
		
	//add code here
	prsObj = $('#present');			 
	TweenLite.to(prsObj, 1, {css:{top:"145px"}, ease:Bounce.easeOut});
	
	$("#marker").css('left', '0px');
	$('#handleRight').css({opacity: 0.5});
	
	leftObj = $('#handleLeft');	
	rightObj = $('#handleRight');	
	
	leftComplete = false;
	rightComplete = false;
	mkrPos = 0;
	mkrProg = 0;
	rot = 0;
	rotAmt = 0;
	rotTmp = 0;
	tlProg = 0;
	
	
					
	liftObj = $('#lift');
	prsObj = $('#present');
		
	tl = new TimelineMax({paused:true, onComplete:tlComplete});	
	tl.add( TweenLite.to(prsObj, 1, {left:236}) );
	tl.appendMultiple([new TweenLite(prsObj, 1, {top:280}),
                       new TweenLite(liftObj, 1, {css:{clip:"rect(20px,70px,220px,0px)", top:122}})]);
                       
                       
     setInterval(monMkr, 10);
	
	
	
	leftDraggable = Draggable.create("#handleLeft", {type: "rotation", throwProps: false,
	
	onDrag:function() {
			//console.log('dragStarted')	 	
		        rot = $("#handleLeft")[0]._gsTransform.rotation*(180 / Math.PI)
	            rotRnd = Math.round(rot)
	            mkrPos = $('#marker').position().left;
	            
	            cssRotL = "rotate(" + rot*5 + "deg)";
	            cssRotM = "rotate(" + rot*15 + "deg)";
	            
	            
	            //monMkr();
	            	            
		            if(rotRnd <rotTmp){	            	
			            rotAmt -= rotInc;			     
		            }
		            
		            if(rotRnd >rotTmp){	           		
			            rotAmt += rotInc;
		            }
		            
		           rotTmp = rotRnd;
		          
		          if(rotAmt >0){
			          console.log('rotAmt'+rotAmt)
			          $("#marker").css('left', rotAmt);
			          $('#handleLeft').css({opacity: 1});	
		          }else{
			          $('#handleLeft').css({opacity: 0.5});
		          }
		              
		          $("#greenWheelL").css({ "transform": cssRotL});
		          $("#greenWheelM").css({ "transform": cssRotM});

	             
	          
	        
	         if(mkrPos >148){
	         	  console.log('greaterThan150');	         	
	         	  rightDraggable[0].enable();
		          rotAmt -= rotInc;
		          $("#marker").css('left', rotAmt)
	              leftDraggable[0].disable();
	              
	              //switch the opacity of the active handle and animating arrows
	              $('#handleLeft').css({opacity: 0.5});
	              $('#arrowLeft').css({opacity: 0});
	              
	              //TweenLite.to($('#handleRight'), 1, {css:{rotation:0}, ease:Power3.easeOut});
	              $('#handleRight').css({opacity: 1});
	              $('#arrowRight').css({opacity: 1});
	          } 
	                    
	        },
	                
	        onDragEnd:function() {
	          console.log("dragEnded");
	          if(rotAmt <0){
	          	rotAmt = 0
	          	TweenLite.to(leftObj, 2, {css:{rotation:"0px"}, ease:Elastic.easeOut});
	          }
	        }, 
	});
	

	rightDraggable = Draggable.create("#handleRight", {type: "rotation", throwProps: false,
			onDrag:function() {		
				//console.log('dragStarted')	  	
		        rot = $("#handleRight")[0]._gsTransform.rotation*(180 / Math.PI);
		        
	            rotRnd = Math.round(rot)
	            mkrPos = $('#marker').position().left;
	            
	            cssRotS = "rotate(" + rot*5 + "deg)";
	            
	           //monMkr();	            
		           
		            if(rotRnd <rotTmp){	 		               	
			            rotAmt += rotInc;	           		            
		            }
		            
		            if(rotRnd >rotTmp){		            	        		
			            rotAmt -= rotInc;
		            }
		             
		           rotTmp = rotRnd;	
		           	            		                    
		           if(rotAmt >149){	
		           		console.log('rotAmt'+rotAmt)
		           		$("#marker").css('left', rotAmt);
		           		$('#handleRight').css({opacity: 1});	 		                
		            }else{
			            $('#handleRight').css({opacity: 0.5});
		            }
		            $("#greenWheelS").css({ "transform": cssRotS});
	            
	           	          
	         if(mkrPos >299){
	         	  console.log('greaterThan300');
	         	  console.log('gameWin');
	         	  gameFiveComplete();       
	         	  rotAmt -= rotInc;
		          $("#marker").css('left', rotAmt)
	              rightDraggable[0].disable();
	              $('#handleRight').css({opacity: 0.5});
	              $('#arrowRight').css({opacity: 0});
	          }              
	        },
	        
	        onDragEnd:function() {
	          console.log("dragEnded");
	         if(rotAmt <150){
	          	rotAmt = 150
	          	TweenLite.to(rightObj, 2, {css:{rotation:"0px"}, ease:Elastic.easeOut});
	          }
	        }, 
		});
		rightDraggable[0].disable();		
}

function monMkr(){		
	mkrProg = Math.round((mkrPos/300)*103);				
	tl.progress(mkrProg/100);
	
}

function tlComplete(){
	console.log('tlComplete');
}


function gameFivetimer(){
		 gameFiveLive = true;
		 gameFiveTimer --;
		 $('#timerInside').animate({width:"-=30px"},2000);
		
		 if (gameFiveTimer <= 0) {		 
			 clearInterval(counter);
			 gameFiveLost();

		 }
}

function gameFiveComplete(){
		//console.log('gameFiveComplete')
		gameFiveLive = false;
		clearInterval(counter);
		grnWhlsObj = $('#greenWheelS');
		TweenLite.to(grnWhlsObj, 2, {css:{rotation:720}, delay:0.1, ease:Elastic.easeOut});
		TweenLite.to(liftObj, 2, {css:{clip:"rect(150px,70px,220px,0px)", top:"-12px"}, delay:0.1, ease:Elastic.easeOut,onComplete:gameFiveWon});
}

function gameFiveWon(){
		 gameFiveLive = false;
		 gameFiveEnded = true;
		 gameFiveStar = true;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $("#resultsScreen #goldStar").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();

	}
	
function gameFiveLost(){
         gameFiveLive = false;
		 gameFiveEnded = true;
		 gameFiveStar = false;
		 $('#timer').hide();
		 $("#resultsScreen").show();
		 $('#gameFive').remove();
		 $('#gameFiveElements').remove();
		 
	}