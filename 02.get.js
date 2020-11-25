
// 导入
const { Console } = require('console');
const http = require('http');
const url = require('url');
// 创建服务器
const server = http.createServer();
// 监听request事件
server.on("request", (req, res) => {
    let { query } = url.parse(req.url, true);
    console.log(query);

})
// 启动
server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})