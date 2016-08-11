$( document ).ready(function() {
    console.log( "ready!" );

var today = new Date();
$('#date').html( today.toDateString() );
var qrDate = today.toDateString()+today.getHours();
qrDate = qrDate.replace(/\s+/g, '');

//http://larsjung.de/jquery-qrcode//

$('#qr').qrcode({
	"render": "div",
	"size": 500,
    "text": qrDate
});
});