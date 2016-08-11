function addCourse() {
	Cloud.Objects.create({
		classname : 'courses',
		fields : {
			subject : 'CMSC',
			number : '491',
			name : 'Mobile Programming'
		}
	}, function(e) {
		if (e.success) {
			var courses = e.courses[0];
			alert('Success:\n' + 'id: ' + courses.id + '\n' + 'subject: ' + course.subject + '\n' + 'number: ' + course.number + '\n' + 'name: ' + course.name + '\n' + 'created_at: ' + course.created_at);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}