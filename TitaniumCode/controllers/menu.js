



function backdashboard(){
	var back = Alloy.createController('dashboard').getView();
	back.open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
}
function scan(){
	var scan1 = Alloy.createController('scancode').getView();
	scan1.open();
}
function out(){
	var logout = Alloy.createController('index').getView();
	logout.open();
}

function logout(){
	Cloud.Users.logout(function (e) {
    if (e.success) {
        alert('Success: Logged out');
        out();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}


var args = arguments[0] || {};