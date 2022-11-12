const http = require('http');

http.createServer((req, res) => {

    console.log('request come', req.url);

    res.end('123');

}).listen(8887);

console.log('server listening on 8887');
