
// 导入
const express = require("express");
// 创建web服务
const app = express();
// 监听
app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/html5", (req, res) => {
    res.send("2003")
})
app.post("/post",(req,res)=>{
    res.send("post")
    
})


// 启动服务
app.listen(
    8080, () => { console.log("server is running at http://127.0.0.1:8080")}
)

