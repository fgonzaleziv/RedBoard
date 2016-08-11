var Cloud = require('ti.cloud');
Cloud.debug = true;



function registerhere() {
    var winregister = Alloy.createController('register').getView();
   winregister.open();
    
}
/*function FORGOTPASS() {
    var winforgotpass = Alloy.createController('forgotpass').getView();
   winforgotpass.open();
    
}*/

function newWin() {
    var win3 = Alloy.createController('dashboard').getView();
   win3.open();
    
}

function logUserIn(){
	Cloud.Users.login({
	    login: $.email.value,
	    password: $.password.value,
	}, function (e) {
	    if (e.success) {
	    	user = e.users[0];
	    	alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'email: ' + user.username);	    	
	    	Ti.App.Properties.setString('sessionid',e.meta.session_id);
	    	newWin();
	    	
	    } else {
	        Ti.API.info('Error:\\n Need to fix the username' + ((e.error && e.message) || JSON.stringify(e)));
	    }
	});	
}

function addCourse() {
	Cloud.Objects.create({
		classname : 'course',
		fields : {
			subject : 'CMSC',
			number : '491',
			name : 'Mobile Programming'
		}
	}, function(e) {
		if (e.success) {
			var course = e.course[0];
			alert('Success:\n' + 'id: ' + course.id + '\n' + 'subject: ' + course.subject + '\n' + 'number: ' + course.number + '\n' + 'name: ' + course.name + '\n' + 'created_at: ' + course.created_at);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}

$.login.addEventListener('click',logUserIn);


//$.forgotPassword.addEventListener('click',addCourse);

if (Ti.App.Properties.getString('sessionid')) {
	newWin();
}
else {
	$.index.open();
}



