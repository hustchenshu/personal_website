var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	// console.log(path.resolve(__dirname, '../mypro/dist/index.html'))
 //    const html = fs.readFileSync(path.resolve(__dirname, '../mypro/dist/index.html'), 'utf-8');
 //    res.send(html);
    res.sendFile(path.resolve(__dirname, '../mypro/dist/index.html'), {
        title: 'No Found'
    })
});

module.exports = router;

