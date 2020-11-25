
// 导入模块
const http = require('http');
const path = require('path');
const fs = require('fs');

// 创建服务器
const server = http.createServer();

// 监听事件
server.on("request", (req, res) => {
    // 获取请求地址
    let pathname = req.url;
    // 对“/”做处理
    pathname = pathname === "/" ? "/index.html" : pathname;
    // 图标的处理
    let filename = path.join(__dirname, "public", pathname);
    // 读取文件并输出
    fs.readFile(filename, (err, data) => {
        if (err) {
            // 读取文件错误
            res.statusCode = 500;
            res.end("server internal error.");

        } else {
            // 读取文件成功
            res.end(data);
        }
    })



})

// 启动服务
server.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080")
})