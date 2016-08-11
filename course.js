$(document).ready(function() {
	$.getJSON('https://api.cloud.appcelerator.com/v1/objects/courses/query.json?key=u4Qd4gxjiQmE3XCaRXT6jUuwWNPSQabP', function(course) {
	var courseLength = course.response.courses.length;
	$('#courseNumber').html('<p> Number of Courses: ' + courseLength + '</p>');
	
	for (i = 0; i < courseLength; i++) { 
		$('#courses-info').append('<p>Subject: ' + course.response.courses[i].subject + '</p>');
		$('#courses-info').append('<p>Number : ' + course.response.courses[i].number + '</p>');
		$('#courses-info').append('<p>Name : ' + course.response.courses[i].name + '</p>');
		$('#courses-info').append('<p>Number of students : ' + course.response.courses[i].students.length + '</p>');
		}
	});
});