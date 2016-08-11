$( document ).ready(function(){
	console.log( "ready!" );
	
	
	
	$("#classForm").submit(function(){
	$.ajax({
		method: "POST",
		url: "https://api.cloud.appcelerator.com/v1/objects/course/create.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW&_session_id=ceTKimNGZ0NBLlOZnxwk1_qzelM",
		data: { fields: {subject: $( "input[name='subject']" ).val(),
						number: $( "input[name='number']" ).val(),
						name: $( "input[name='courseName']" ).val(),
						students: $( "input[name='students']" ).val().split(",")
						} }

	})
	alert("submitted");
	} );
	});
	
	
