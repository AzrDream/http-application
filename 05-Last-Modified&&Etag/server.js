const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log('request come', req.url);

    if(req.url === '/'){
        const abs = path.join(__dirname, 'test.html');
        const html = fs.readFileSync(abs, 'utf8');
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(html);
    }

    if(req.url === '/script.js') {
        const abs = path.join(__dirname, 'script.js');
        const html = fs.readFileSync(abs);
        // 拿到请求头中的etag信息
        const etag = req.headers['if-none-match'];
        // 如果等于我们设置的etag，证明资源没有变化，用原来的即可
        if(etag === '777') {
            res.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            res.end('');
        } else {
            // 如果不相等，就设置etag信息并且返回资源
            res.writeHead(200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=20000000, no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            });
            res.end(html);
        }
    }
}).listen(8888);

console.log('server listening on 8888');
