$( document ).ready(function() {
    console.log( "ready!" );
	
	
$( '#login-form' ).submit(function(){
	var username = $("#username").val();
	var password = $("#password").val(); 
	console.log(username);
  $.ajax({
  method: "POST",
  url: "https://api.cloud.appcelerator.com/v1/users/login.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW",
  data: {
	login: username,
	password: password,
	},
	success: function(data){
             if(data.status!=200){
                 alert("Error occured!");
             } else {
                 callback();
             } 
    }
})
.done(function( data ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
  });

});

});
