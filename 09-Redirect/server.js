const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log('request', req.url);

    const abs = path.join(__dirname, 'test.html');
    const html = fs.readFileSync(abs, 'utf8');

    if(req.url === '/') {
        res.writeHead(301, {
            'Location': '/new'
        });
        res.end()
    }
    if(req.url === '/new') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html)
    }
}).listen(8888);
