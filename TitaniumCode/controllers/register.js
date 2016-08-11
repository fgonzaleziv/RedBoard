var Cloud = require('ti.cloud');
Cloud.debug = true;

function cancel(){
	var goout = Alloy.createController('index').getView();
	goout.open();
}

function newWin() {
    var win3 = Alloy.createController('dashboard').getView();
   win3.open();
    
}




function createUser(){
	Cloud.Users.create({
	username: $.email.value,
	password: $.password.value,
	password_confirmation: $.password.value,
	email:$.email.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        alert('Success:\n' +
	        'id: ' + user.id + '\n' +
	        'sessionId: ' + Cloud.sessionId + '\n');
	        newWin();
	        
	        
	} else {
	    alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});

}

$.registernow.addEventListener('click',createUser);

var args = arguments[0] || {};