var http = require('http')
var fs = require('fs')
const port = 8000

http.createServer(function (request, response){
	if (request.method === 'Get') {
		fs.createReadStream('./chatlog.txt').pipe(response)
	}
	else {
		const readStream = 
		fs.createReadStream('./chatlog.txt');

		const writeStream = 
			fs.createWriteStream('./chatlog.txt');

			writeStream.on('end', () => {
  			console.log('Done');
			});

	

	}
	readStream.pipe(writeStream);
}).listen(+port, function () {
	console.log('Server Listening on http://localhost:%s', port)
})