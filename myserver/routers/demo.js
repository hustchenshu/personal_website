var express = require('express');
var router = express.Router();
var jwtToken = require('../jwtauth.js')('hustchenshu')
const manager = require('../manager.js')

router.get('/test',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
   console.dir(' demo test get in')
  res.send('demo test get in');
});

router.post('/insert', (req, res) => {
  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  // console.log(req.body);
  let token = req.get('x-access-token')
  if (!token) {
    res.json({
        success: false,
        message: 'no token'
    });
  } 
  let m = jwtToken.checkToken(manager, token)
  if(m){
    var Demos = global.DbHandler.getModel('Demos'); 
    let newDemo =req.body;
    // newBlog.id = uuidV1()
    // console.log(newDemo)
    Demos.create(newDemo,function(err,doc){ 
        if (err) {
          res.json({
              success: false,
              message: err
          });
        } else {
          res.json({
              success: true,
              message: 'token valid'
          });
        }
      }
    );    
  }else{
    res.json({
        success: false,
        message: 'token invalid'
    });
  }
     
})

router.get('/getDemos',(req,res) => {
  var Demos = global.DbHandler.getModel('Demos'); 
  const limit = req.query.limit === undefined? 100 : 3 ;
  Demos.find().sort([['date', -1]]).limit(limit).exec((err,doc)=>{
    if(err){
      console.log(err)
    }else{
      // console.log(doc)
      res.json(doc)
    }
  });
})

router.get('/del', (req, res) => {
  let token = req.get('x-access-token')
  if (!token||token==='null') {
    res.json({
        success: false,
        message: 'no token'
    });
  } else {
    let m = jwtToken.checkToken(manager, token)
    if(m){
      var Demos = global.DbHandler.getModel('Demos'); 
      let demoid = req.query.id
      // console.log('id:',demoid)
      Demos.findByIdAndRemove(demoid, function(err, doc){ 
          if (err) {
            res.json({
                success: false,
                message: err
            });
          } else {
            // console.log(doc)
            res.json({
                success: true,
                message: demoid
            });
          }
        }
      );    
    }else{
      res.json({
          success: false,
          message: 'token invalid'
      });
    }
  }   
})
module.exports = router;
