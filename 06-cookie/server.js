const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    // 目的是在访问url后将同目录下的index.html展示出来
    // 拼接路径
    const url = path.join(__dirname, 'index.html');
    // 同步读取文件
    const html = fs.readFileSync(url, 'utf8');

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['id=123; max-age=2', 'abc=456; HttpOnly']
    });
    // 上面设置的响应头，以html文件返回
    res.end(html);
}).listen(8888);
