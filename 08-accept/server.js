const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

http.createServer((req, res) => {
    console.log('request come', req.url);

    const abs = path.join(__dirname, 'test.html');
    const html = fs.readFileSync(abs);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        // 'X-Content-Type-Options': 'nosniff',
        'Content-Encoding': 'gzip'
    });
    res.end(zlib.gzipSync(html));
}).listen(8888);
