// å¼•å…¥ç¼–å†™å¥½çš„api
// const api = require('./api');
// å¼•å…¥æ–‡ä»¶æ¨¡å—
const express = require('express');
const fs = require('fs');
// å¼•å…¥å¤„ç†è·¯å¾„çš„æ¨¡å?
const path = require('path');
// å¼•å…¥å¤„ç†postæ•°æ®çš„æ¨¡å?
const bodyParser = require('body-parser');
// å¼•å…¥Express
const http = require('http');
const https = require('https');

const app = express();


app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public'));

//app.use(api);
// è®¿é—®é™æ€èµ„æºæ–‡ä»?è¿™é‡Œæ˜¯è®¿é—®æ‰€æœ‰distç›®å½•ä¸‹çš„é™æ€èµ„æºæ–‡ä»?
app.use(express.static(path.resolve(__dirname, 'public/pages')));

// ä¸»é¡µæŽ§åˆ¶ï¼Œä¸ç™»å½•å¯ç›´æŽ¥è®¿é—?
const router_home = require('./routers/index.js');
app.use('/', router_home);
// åšå®¢ç›¸å…³è·¯ç”±
const router_blog_manage = require('./routers/blog.js');
app.use('/api/blog', router_blog_manage);
//
const router_demo_manage = require('./routers/demo.js');
app.use('/api/demo', router_demo_manage);




// è®¾å®šæ•°æ®åº?
const mongoose = require('mongoose');

global.DbHandler = require('./mongodb/dbHandler.js');
global.db = mongoose.connect("mongodb://localhost:27017/appDB");
// å› ä¸ºæ˜¯å•é¡µåº”ç”?æ‰€æœ‰è¯·æ±‚éƒ½èµ?dist/index.html
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public/pages/404.html'), {
        title: 'No Found'
    })
});



// ç›‘å¬8088ç«¯å£
// app.listen(80);
var options = {
  ca: fs.readFileSync('key/ca_bundle.crt'),
  key: fs.readFileSync('key/private.key'),
  cert: fs.readFileSync('key/certificate.crt')
};


var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(80, function() {
    console.log('HTTP Server is running on: http://localhost:%s', 80);
});
httpsServer.listen(443, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', 443);
});




console.log('success listen');