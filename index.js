var twilio = require('twilio');
var app = require('express')();
var server = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/message', function(request, response) {
    // create a TwiML response object. This object helps us generate an XML
    // string that we will ultimately return as the result of this HTTP request
    var twiml = new twilio.TwimlResponse();

    // prepare the TwiML response
    twiml.message(function() {
        this.body('Trust Pound!');
        //this.media('http://i.imgur.com/Act0Q.gif');
		//this.media('https://lh3.googleusercontent.com/-FozS8aShY4I/AAAAAAAAAAI/AAAAAAAAAA0/W3KfA3P21HQ/photo.jpg');
		this.media('https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/04b/068/1a94eeb.jpg');
		
    });

    // Render an XML response
    response.type('text/xml');
    response.send(twiml.toString());
});

server.listen(3000, function(){
  console.log('listening on port 3000');
});