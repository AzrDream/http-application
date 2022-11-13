const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log('request', req.url);

    const abs = path.join(__dirname, 'test.html');
    const html = fs.readFileSync(abs, 'utf8');
    if(req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Content-Security-Policy': "default-src http: https:",
            // 'Content-Security-Policy': "default-src 'self'",
            // 'Content-Security-Policy': "default-src 'self' https://cdn.bootcdn.net/",
            // 'Content-Security-Policy': "default-src 'self'; form-action 'self'"
        });
        res.end(html)
    }else{
        res.writeHead(200, {
            'Content-Type': 'application/javascript',
        });
        res.end('console.log("loaded script")')
    }
}).listen(8888);
