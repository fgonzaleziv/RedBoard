$( document ).ready(function(){
	console.log( "ready!" );
	
	
	
	$("#classForm").submit(function(){
	$.ajax({
		method: "POST",
		url: "https://api.cloud.appcelerator.com/v1/objects/courses/create.json?key=u4Qd4gxjiQmE3XCaRXT6jUuwWNPSQabP&_session_id=3J2sYbY2Mc10s9H7HbGFmcGTGnU",
		data: { fields: {subject: $( "input[name='subject']" ).val(),
						number: $( "input[name='number']" ).val(),
						name: $( "input[name='courseName']" ).val(),
						} }

	})
	alert("submitted");
	} );
	});
	
	
