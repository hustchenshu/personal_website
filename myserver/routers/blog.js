var express = require('express');
var router = express.Router();
var fs =require('fs')
const path = require('path');
var dateFormat = require('dateformat');
// var jwt = require('jsonwebtoken');
var jwtToken = require('../jwtauth.js')('hustchenshu')
const manager = require('../manager.js')
var mongoose = require('mongoose');

var multer  = require('multer')
// var upload = multer({ dest: 'upload/' })
// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let path = 'public/upload/blog'
      // console.log(path)
      // if(req.body.check === 'hustchenshu')
        cb(null, path);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        let sup = file.originalname.split('.')[1]
        let orname = file.originalname.split('.')[0]
        let type = req.body.type?req.body.type:'Others'
        let date = req.body.date?req.body.date:dateFormat(new Date(),'yyyy-mm-dd')

        cb(null, type + '~' + orname + '@' + date + '.' +sup);  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

router.get('/test',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    console.dir('blog test get in')
  res.send('blog test get in');
});

router.post('/addBlog',upload.single('md'), (req,res) => {
  let check = req.body.check
  debugger
  if(check==='hustchenshu'){
    res.redirect('/');
    debugger
  }
  res.redirect('/');
})


router.get('/getBlogs/:type',(req,res) => {
  var Blogs = global.DbHandler.getModel('Blogs'); 
  let condition = req.params.type==='All'?{}:{type:req.params.type}

  const limit = req.query.limit === undefined? 100 : 3 ;
    // console.log(req.params)
  Blogs.find(condition,'title type date').populate('typeid').sort([['date', -1]]).limit(limit).exec((err,doc)=>{
    if(err){
      console.log(err)
    }else{
      // console.log(doc)
      res.json(doc)
    }
  });
});

router.get('/getBlogContent/:id',(req,res) => {
  var Blogs = global.DbHandler.getModel('Blogs'); 
  // let condition = req.params.type==='all'?{}:{type:req.params.type}
  Blogs.findById(req.params.id,function(err,doc){
    if(err){
      console.log(err)
    }else{
      // console.log(doc.content)
      res.json(doc)
    }
  });
});


router.post('/login',(req,res) => {
  let {username, password} = req.body  
  if(manager.username === username && manager.password === password){

    var token = jwtToken.createToken(manager,'1h')
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
  }else{
    res.json({
        success: false,
        message: 'err'
    });
  }
});

router.post('/insert', (req, res) => {
  let token = req.get('x-access-token')
  if (!token) {
    res.json({
        success: false,
        message: 'no token'
    });
  } 
  let m = jwtToken.checkToken(manager, token)
  if(m){
    var Blogs = global.DbHandler.getModel('Blogs'); 
    let newBlog = req.body;
    // console.log(newBlog._id)
    // console.log(!newBlog._id)
    // console.log(newBlog._id===undefined)
    if(!newBlog._id){
      newBlog._id = new mongoose.mongo.ObjectID();
    }
    Blogs.findByIdAndUpdate(newBlog._id,{$set:newBlog},
      {
        upsert:true,
        new: true
      },
    //Blogs.create(newBlog,
      function(err,doc){ 
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
      var Blogs = global.DbHandler.getModel('Blogs'); 
      let blogid = req.query.id
      // console.log('id:',blogid)
      Blogs.findByIdAndRemove(blogid, function(err, doc){ 
          if (err) {
            res.json({
                success: false,
                message: err
            });
          } else {
            // console.log(doc)
            res.json({
                success: true,
                message: blogid
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