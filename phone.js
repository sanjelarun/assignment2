var x = 0;
var y =  0;
var smallX = 0;
var smallY = 0;
var currentTab = 0;
var tabList = [showDialer,showContacts,showAdd,showGesture];
$(document).ready(function(){
	$("#contactList").hide();
	$("#addContact").hide();
	$("#test_Gestures").hide();
	
});

$("#btnAdd").click(function(){
	showAdd();
});

$("#btnDailer").click(function(){
	showDialer();
});
$("#btnContact").click(function(){
	
	showContacts();
	//contactListGenerated();
	
});
$("#btnGesture").click(function(){
	showGesture();
});

$(".dialButton").click(function(){
	var dialDisplay = $("#display");
	var number = $(this).text();
	dialDisplay.val(dialDisplay.val() + number);
});

$("#Clear").click(function(){
	$("#display").val("");
});

$("#Clear2").click(function(){
	$(".my-input").val("");
	//$("#email").val("");
	//$("#phone").val("");
	
});
$("#Dial1").click(function(){
	var name  = $("#name").val();
	$("#contactButton").append("<button class='pure-button pure-button-primary contactButton'>"+ name + " </button>");
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide();
	$(".my-input").val("");
	$("#contactAdd").text("Contact Added!");
});

$("#gestureBox").mousedown( function (e){
	
	x = e.pageX - $(this).offset().left;
	y = e.pageY - $(this).offset().top;
	$("#showControls").text("Mouse down");

});
$("#gestureBox").mouseup( function (e){
	
	tempX = e.pageX -  $(this).offset().left;
	tempY = e.pageY - $(this).offset().top;
	lrDifference = Math.abs(tempX - x);
	tdDifference = Math.abs (tempY - y);

	var  checkLevel = (lrDifference > tdDifference )? 1 : 0;
	
	if (tempX < x && checkLevel == 1 ){
		$("#showControls").text("Swipe Left");
		//showAdd();
	}	
	else if (tempX > x && checkLevel == 1) {
		$("#showControls").text("Swipe Right");
		//showDialer();
	}
	else if (tempX == x && tempY == y) {
		$("#showControls").text("Mouse up");
	}
	else if (tempY < y && checkLevel == 0){
		$("#showControls").text("Swipe up");
	}
	else if (tempY > y && checkLevel == 0){
		$("#showControls").text("Swipe Down");
	}
	
	
});
$("#smallGestureBox").mousedown( function (e){
	
	smallX = e.pageX - $(this).offset().left;
	smallY = e.pageY - $(this).offset().top;
	//$("#showControls").text("Mouse down");

});
$("#smallGestureBox").mouseup( function (e){
	
	tempX = e.pageX -  $(this).offset().left;
	tempY = e.pageY - $(this).offset().top;
	console.log(tempX)
	
	if (tempX > smallX ){
		//$("#showControls").text("Swipe Left");
		nextTab = (currentTab + 1) % 4;
		console.log(nextTab);
		tabList[nextTab]();
		$("#smallGestureAction").text(" Swiped Right");
		
		//showAdd();
	}	
	else if (tempX < smallX ) {
		nextTab = (currentTab - 1);
		nextTab = (nextTab == -1 ) ? 3 : nextTab; 
		console.log(nextTab);
		tabList[nextTab]();
		$("#smallGestureAction").text("Swiped Left");
		//showDialer();
	}
	else if (tempX == x && tempY == smallY) {
		//$("#showControls").text("Mouse up");
	}
	
	
	
});

$("body").keydown(function(e){
	if ((e.keyCode || e.which) == 37){
		nextTab = (currentTab - 1);
		nextTab = (nextTab == -1 ) ? 3 : nextTab; 
		console.log(nextTab);
		tabList[nextTab]();
		$("#smallGestureAction").text("Left Arrow Pressed");
	} 
	if ((e.keyCode || e.which) == 39){
		nextTab = (currentTab + 1) % 4;
		console.log(nextTab);
		tabList[nextTab]();
		$("#smallGestureAction").text(" Right Arrow Pressed");
	}
});
function showDialer(){
	$("#dialerTab").show();
	$("#contactList").hide();
	$("#addContact").hide();
	$("#test_Gestures").hide();
	currentTab = 0 ;
}
function showContacts(){
	$("#dialerTab").hide();
	$("#contactList").show();
	$("#addContact").hide();
	$("#test_Gestures").hide();
	$("#contactAdd").text("");
	$("#contactAdd").hide();
	currentTab = 1 ;
}
function showAdd(){
	$("#dialerTab").hide();
	$("#contactList").hide();
	$("#addContact").show();
	$("#test_Gestures").hide();
	currentTab = 2 ;
}
function showGesture(){
	$("#dialerTab").hide();
	$("#contactList").hide();
	$("#addContact").hide();
	$("#test_Gestures").show();
	currentTab = 3 ;
}


