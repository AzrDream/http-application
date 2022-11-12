const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log('request come', req.url);

    const abs = path.join(__dirname, 'test.html');
    const html = fs.readFileSync(abs, 'utf8');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);
}).listen(8888);

console.log('server listening on 8888');
