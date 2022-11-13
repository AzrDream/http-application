const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // 目的是在访问url后将同目录下的index.html展示出来
    // 拼接路径
    const htmlAbs = path.join(__dirname, 'index.html');
    const imgAbs = path.join(__dirname, 'test.jpg');
    // 同步读取文件
    const html = fs.readFileSync(htmlAbs, 'utf8');
    const img = fs.readFileSync(imgAbs);
    if(req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close'
        });
        res.end(html);
    } else {
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Connection': 'close'
        });
        res.end(img);
    }

}).listen(8888);
