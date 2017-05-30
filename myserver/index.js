// 引入编写好的api
// const api = require('./api');
// 引入文件模块
const express = require('express');
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入Express

const app = express();
app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../mypro/dist')));

// 主页控制，不登录可直接访问
const router_home = require('./routers/index.js');
app.use('/', router_home);
// 博客相关路由
const router_blog_manage = require('./routers/blog.js');
app.use('/api/blog', router_blog_manage);
//
const router_demo_manage = require('./routers/demo.js');
app.use('/api/demo', router_demo_manage);




// 设定数据库
const mongoose = require('mongoose');

global.DbHandler = require('./mongodb/dbHandler.js');
global.db = mongoose.connect("mongodb://localhost:27017/appDB");
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public/pages/404.html'), {
        title: 'No Found'
    })
});
// 监听8088端口
app.listen(10000);
console.log('success listen…………');