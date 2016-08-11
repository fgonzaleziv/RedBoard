$(document).ready(function() {
	$.getJSON('https://api.cloud.appcelerator.com/v1/objects/course/query.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW', function(course) {
	var courseLength = course.response.course.length;
	$('#courseNumber').html('<p> Number of Courses: ' + courseLength + '</p><br>');
	
	for (i = 0; i < courseLength; i++) { 
		$('#courses-info').append('<div class="block"><br><p>Subject: ' + course.response.course[i].subject + '</p>'+
		'<p>Number : ' + course.response.course[i].number + '</p>'
		+'<p>Name : ' + course.response.course[i].name + '</p>'
		+'<p>Number of students : ' + course.response.course[i].students.length + '</p></div>');
		}
	});
});