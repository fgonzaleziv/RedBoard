var Cloud = require('ti.cloud');
Cloud.debug = true;

getCourse();

var args = arguments[0] || {};

function Back(){
	var winback = Alloy.createController('dashboard').getView();
	 winback.open();
}





function Course(){
	//var myTab = $.courses;
	var wincoursedoc = Alloy.createController('Coursedoc').getView();
	if (Titanium.Platform.name == 'android'){
		args.tab.open(wincoursedoc);
	}
	else{
		args.tab.openWindow(wincoursedoc);
	}
	//args.tab.openWindow(wincoursedoc);
}

function getCourse(){
	Cloud.Objects.query({
    classname: 'course',
    page: 1,
    per_page: 10,
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.course.length);
            for (var i = 0; i < e.course.length; i++) {
            var courses = e.course[i];
            /*alert('Subject: ' + courses.subject + '\n' +
                'Number: ' + courses.number + '\n' +
                'Name: ' + courses.name + '\n' );*/
                //Ti.App.Properties.setString('courses.name');
               // var row = Ti.UI.createTableViewRow({
    // title: courses.name,
      // height: 100
  // });
  // $.tview.push(row);
  				$.class1.setTitle(courses.name);
               
               }
             Course();   
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
//var nameclass = Ti.App.Properties.getString('courses.name');
//$.class1.getName(nameclass);

$.CD.addEventListener('click',getCourse);
$.As.addEventListener('click',Course);


