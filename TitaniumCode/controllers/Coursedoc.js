var Cloud = require('ti.cloud');
Cloud.debug = true;


//-------------prueba------------------//
/*var tableData = [];

//var win = Ti.UI.createWindow({ backgroundColor: 'white' });

var table = Ti.UI.createTableView({ objName: 'table' });

for (var i = 0; i <= 20; i++){
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
    text: 'Name of the class',
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
  tableData.push(row);
}

table.setData(tableData);

/*table.addEventListener('swipe', function(e){
  if (e.source && e.source.objName !== 'table'){
    Ti.API.info('Row swiped: ' + e.source);
    Ti.API.info('Row swiped: ' + e.source.objName);
    Ti.API.info('Row ID : ' + e.source.rowID);
  }
});*/

//$.wincour.add(table);
//$.wincour.open();
/*
function goback(){
	var winbacktoclasses = Alloy.createController('classes').getView();
	winbacktoclasses.open();
}*/
