$( document ).ready(function() {
    console.log( "ready!" );

var today = new Date();
$('#date').html( today.toDateString() );

});
