var express = require('express');
var router = express.Router();
const path = require('path');
// router.get('/', function (req, res) {
//     res.sendFile(path.resolve(__dirname, '../mypro/dist/index.html'), {
//         title: 'skdjfls'
//     })
// });

router.get('/admin', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/pages/admin.html'), {
        title: '后台管理'
    })
});


module.exports = router;

