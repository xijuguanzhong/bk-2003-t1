// 1. 导入模块
const http = require("http");
const querystring = require("querystring");

// 创建服务器
const server = http.createServer();

// 事件监听
server.on("request", (req, res) => {
    // 定义空的容器
    let arr = [];

    // 数据接受中
    req.on("data", buffer => {
        arr.push(buffer);
    })
    // 数据传输结束了
    req.on("end", () => {
        let buffer = Buffer.concat(arr);
        // 将buffer转化成我们可以识别的字符串
        let str = buffer.toString()
        // 通过querystring将字符串转成对象形式以方便使用
        console.log(querystring.parse(str));
    })
})

// 启动服务
server.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});