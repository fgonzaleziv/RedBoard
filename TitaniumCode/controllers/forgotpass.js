
var Cloud = require('ti.cloud');
Cloud.debug = true;

function cancel(){
	var goout = Alloy.createController('index').getView();
	goout.open();
}


/*function forgotpass(){
Cloud.Users.requestResetPassword({
    email: $.email.value,
}, function (e) {
    if (e.success) {
        alert('Success: Reset Request Sent');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
$.getpass.addEventListener('click',forgotpass);*/


var args = arguments[0] || {};