var Cloud = require('ti.cloud');
Cloud.debug = true;

var args = arguments[0] || {};
//getCourse();

function closeWindow(){
    $.win3.close();
}



function class1(){
	var myTab = $.courses;
	var winclass = Alloy.createController('classes',{tab:myTab}).getView();
	if (Titanium.Platform.name == 'android'){
		$.courses.open(winclass);
	}
	else{
		$.courses.openWindow(winclass);
	}
	
}
////////////////////// get courses////////////////////////////////////
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
            var courses1 = e.course[i];
            
 var tabledata = [];
 var table = Ti.UI.createTableView({ objName: 'table' });

for (var i = 0; i < e.course.length; i++){
	courses1 = e.course[i];
  var row = Ti.UI.createTableViewRow({
    className: 'row',
    objName: 'row',
    touchEnabled: true,
    height: 150
  });


  var labelname = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: courses1.name,
    touchEnabled: false,
    left: 10,
    top: 20,
    width: 200,
    height: 30,
  });
   var labelsubject = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: courses1.subject,
    touchEnabled: false,
    left: 10,
    top: 60,
    width: 200,
    height: 30,
  });
 
 var labelnumber = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: courses1.number,
    touchEnabled: false,
    left: 10,
    top: 100,
    width: 200,
    height: 30,
  }); 
  row.add(labelname, labelsubject, labelnumber);
  tabledata.push(row);  
  }

  
table.setData(tabledata);
              }
              $.wincourses.add(table);
			  $.wincourses.open();
             //class1();   
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}

$.wincourses.addEventListener('click',getCourse);

//////////////////////////////////////////////////////////////////////////
function menu(){
	var winmenu = Alloy.createController('menu').getView();
	winmenu.open({
		transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});
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




//-------------prueba grades------------------//
function getGrade(){
	Cloud.Objects.query({
    classname: 'course',
    page: 1,
    per_page: 10,
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.course.length);
            for (var i = 0; i < e.course.length; i++) {
            var courses2 = e.course[i];
            
 var tabledata = [];
 var table = Ti.UI.createTableView({ objName: 'table' });

for (var i = 0; i < e.course.length; i++){
	courses2 = e.course[i];
  var row = Ti.UI.createTableViewRow({
    className: 'row',
    objName: 'row',
    touchEnabled: true,
    height: 150
  });


  var labelname = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: courses2.name,
    touchEnabled: false,
    left: 10,
    top: 20,
    width: 200,
    height: 30,
  });
  var labelassignment = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: 'Name of the assignment',
    touchEnabled: false,
    left: 10,
    top: 60,
    width: 200,
    height: 30,
  });
 
 var labeldate = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: 'Due date: 04/21/2015',
    touchEnabled: false,
    left: 10,
    top: 100,
    width: 200,
    height: 30,
  }); 
  
  var labelgrade = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: 'Grade',
    touchEnabled: false,
    left: 230,
    top: 50,
    width: 50,
    height: 50,
  }); 

  row.add(labelname,labelassignment,labeldate,labelgrade);
  tabledata.push(row);
}

table.setData(tabledata);

 }
               
              
              $.win2.add(table);
              $.win2.open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}

$.win2.addEventListener('click',getGrade);



//-------------prueba annoucement------------------//
function getAnn(){
	Cloud.Objects.query({
    classname: 'announce',
    page: 1,
    per_page: 10,
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.announce.length);
            for (var i = 0; i < e.announce.length; i++) {
            var announcementes = e.announce[i];
            
 var tabledata = [];
 var table = Ti.UI.createTableView({ objName: 'table' });

for (var i = 0; i < e.announce.length; i++){
	 var announcementes = e.announce[i];
  var row = Ti.UI.createTableViewRow({
    className: 'row',
    objName: 'row',
    touchEnabled: true,
    height: 150
  });


  var labeltitle = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: announcementes.title,
    touchEnabled: false,
    left: 10,
    top: 20,
    width: 200,
    height: 30,
  });
   var labelcourse = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: announcementes.course,
    touchEnabled: false,
    left: 10,
    top: 60,
    width: 200,
    height: 30,
  });
 
 var labelbody = Ti.UI.createLabel({
    backgroundColor:'red',
    color: 'white',
    objName: 'label',
    text: announcementes.body,
    touchEnabled: false,
    left: 10,
    top: 100,
    width: 200,
    height: 30,
  }); 
  row.add(labeltitle, labelcourse, labelbody);
  tabledata.push(row);
  
table.setData(tabledata);
               }
               
              }
              $.titleAnn.add(table);
			  $.titleAnn.open();
             //class1();   
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}

$.titleAnn.addEventListener('click',getAnn);
