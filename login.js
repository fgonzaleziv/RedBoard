$( document ).ready(function() {
    console.log( "ready!" );
	
	
$( '#login-form' ).submit(function(){
	var username = $("#username").val();
	var password = $("#password").val(); 
	console.log($("#username").val() + "user") ;
  $.ajax({
  method: "POST",
  url: "https://api.cloud.appcelerator.com/v1/users/login.json?key=u4Qd4gxjiQmE3XCaRXT6jUuwWNPSQabP",
  data: {
	login: "test1@vcu.edu",
	password: "test1"
	},
	success: function (){
	window.location.href = "http://stackoverflow.com"; }
})

});

});
