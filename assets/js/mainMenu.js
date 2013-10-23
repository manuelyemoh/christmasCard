/* - - - Images to load - - - */
var mainMenuImages = ["assets/images/bg2x.jpg","#e0f4f3"];

function mainMenuInit(){
	
		$( "#gameNavigation" ).append( "<div id='mainMenu'><p>Start Game</p></div>" );
		
		$("#mainMenu").css({	
		
			top: "40%",
			width: "100px",
			zIndex: "4",
			color: "white",
			textAlign: "center",
			backgroundColor: "blue",
			marginLeft: "-50px",
			left: "50%",
			position: "absolute"
			
		});
		
		$("#mainMenu p").css({
			
			margin: "0",
			padding: "0",
			position: "relative",
			top: "2px"
			
		});
		
		//$("#mainMenu").show();


}