$( document ).ready(function(){
	console.log( "ready!" );
	
	$.getJSON('https://api.cloud.appcelerator.com/v1/objects/course/query.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW', function(course) {
	var courseLength = course.response.course.length;
	
	for (i = 0; i < courseLength; i++) { 
		$('#selectCourse').append('<option>' + course.response.course[i].subject + course.response.course[i].number + '</option>');
		}
	});
	
	$("#announce").submit(function(){
	$.ajax({
		method: "POST",
		url: "https://api.cloud.appcelerator.com/v1/objects/announce/create.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW&_session_id=ceTKimNGZ0NBLlOZnxwk1_qzelM",
		data: { fields: {title: $( "input[name='title']" ).val(),
						body: $( "#body" ).val(),
						course: $("#selectCourse option:selected").text()
						} }

	})
	alert("submitted announcement for:"+$("#selectCourse option:selected").text());
	} );
	});
	
	
