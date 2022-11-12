const http = require('http');

http.createServer((req, res) => {

    console.log('request come', req.url);
    res.writeHead(200, {
        // 'Access-Control-Allow-Origin': '*'
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
    });
    res.end('123');

}).listen(8887);

console.log('server listening on 8887');
