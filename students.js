$(document).ready(function() {
	$.getJSON('https://api.cloud.appcelerator.com/v1/objects/course/query.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW', function(course) {
	var courseLength = course.response.course.length;
	$('#courseNumber').html('<p> Number of Courses: ' + courseLength + '</p>');
	
	for (i = 0; i < courseLength; i++) { 
	var studentLength = course.response.course[i].students.length;
		$('#courses-info').append('<div class="block"><br><p>Course: ' + course.response.course[i].subject + course.response.course[i].number +'</p>'
		+'<p>Name : ' + course.response.course[i].name + '</p>'
		+'<p>List of students : ' + studentLength + '</p>');
  		for (j = 0; j < studentLength; j++){
			$('#courses-info').append('<p class="studentlist">' + course.response.course[i].students[j] + '</p>');
		} 
	}
	});
});