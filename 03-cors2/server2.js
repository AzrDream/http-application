const http = require('http');

http.createServer((req, res) => {

    console.log('request come', req.url);
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        // 设置允许的请求头
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        // 设置允许的请求方法
        'Access-Control-Allow-Methods': 'PUT, DELETE',
        // 设置直接请求的最长时间
        'Access-Control-Max-Age': '1000'
    });
    res.end('123');

}).listen(8887);

console.log('server listening on 8887');
