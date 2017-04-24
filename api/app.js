var express 	= require('express')
var requestify 	= require('requestify'); 
var app 		= express()

app.listen(8000, function() { console.log('running..'); });

app.get('/event/:eventId/attendance', function (req, resp) {
	const eventId 	= req.params.eventId;
	const apiKey 	= process.env.apiKey;
	const meetupUrl = 'https://api.meetup.com/2/rsvps?offset=0&format=json&event_id=' + eventId + '&photo-host=public&page=20&fields=member&order=event&desc=false&sig_id=190551571&sig=410b6263459c94d7a024403c976498c3dfea1ad6';

	resp.header("Access-Control-Allow-Origin", "*");
	return requestify
			.get(meetupUrl)
			.then(function(meetupResponse) {
				var attendances = meetupResponse
									.getBody()
									.results
									.map((r) => { return { 
										'member': r.member.name,
										'pic' : (r.member_photo ? r.member_photo.thumb_link : 'https://a.wattpad.com/useravatar/WattIncognito.128.938617.jpg')
									}});
				return resp.status(200).json(attendances);
									
			})
			.fail(function() { 
				resp.status(400); 
			});
})




