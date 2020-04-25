var http = require('http')

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.end('Hello node.js World\n');
}).listen(30000,'0.0.0.0');

console.log('Server running at http://127.0.0.1:30000/');
