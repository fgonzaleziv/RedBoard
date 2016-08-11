$( document ).ready(function() {
    console.log( "ready!" );

var today = new Date();
$('#date').html( today.toDateString() );

	$.getJSON('https://api.cloud.appcelerator.com/v1/objects/announce/query.json?key=TYG1NBFN4olAKbjgTK01Z1bO5DwLjApW', function(announce) {
	var announcementLength = announce.response.announce.length;
	
	for (i = 0; i < announcementLength; i++) { 
		$('#listAnnounce').append('<div class = "block"> <h2 class = "annTitle">' + announce.response.announce[i].title + ' | ' + announce.response.announce[i].course +
			'</h2>' +'<p class = "annBody">' + announce.response.announce[i].body + '</p></div>');
		}
	});


});
