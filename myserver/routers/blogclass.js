var express = require('express');
var router = express.Router();
var fs =require('fs')
const path = require('path');
var dateFormat = require('dateformat');
// var jwt = require('jsonwebtoken');
var jwtToken = require('../jwtauth.js')('hustchenshu')
const manager = require('../manager.js')
var mongoose = require('mongoose');


router.get('/getClass',(req,res) => {
  var Blogclass = global.DbHandler.getModel('BlogClass'); 
  Blogclass.find().sort([['date', -1]]).exec((err,doc)=>{
    if(err){
      console.log(err)
    }else{
      // console.log(doc)
      res.json(doc)
    }
  });
});


router.get('/del', (req, res) => {
  let token = req.get('x-access-token')
  // console.log('oooo',token)
  if (!token||token==='null') {
    // console.log('dd')
    res.json({
        success: false,
        message: 'no token'
    });
  } else {
    let m = jwtToken.checkToken(manager, token)
    if(m){
      var Blogclass = global.DbHandler.getModel('BlogClass'); 
      var Blogs = global.DbHandler.getModel('Blogs');
      let blogid = req.query.id
      // console.log('id:',blogid)
      Blogs.count({type:blogid},function(err,count){
        if (err) {
            res.json({
                success: false,
                message: err
            });
          } else {
            // console.log(count)
            if(count<1){
              Blogclass.findByIdAndRemove(blogid, function(err, doc){ 
                  if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                  } else {
                    // console.log(doc)
                    res.json({
                        success: true,
                        message: doc._id
                    });
                  }
                }
              ); 
            }else{
              res.json({
                  success: false,
                  message: 'notallow'
              });
            }
          }
      })

	    // res.json({
	    //     success: true,
	    //     message: blogid
	    // });   
    }else{
      res.json({
          success: false,
          message: 'token invalid'
      });
    }
  }   
})

router.post('/addClass', (req, res) => {
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
    var BlogClass = global.DbHandler.getModel('BlogClass'); 
    let newclass =req.body;
    if(!newclass._id){
      newclass._id = new mongoose.mongo.ObjectID();
    }
    // console.log(newclass)
    // BlogClass.create(newclass,function(err,doc){ 
    BlogClass.findByIdAndUpdate(newclass._id,
      {
        $set:{
          title:newclass.title
        }
      },{
        upsert:true,
        new: true
      },function(err,doc){
        if (err) {
          res.json({
              success: false,
              message: err
          });
          console.log(err)
        } else {
          res.json({
              success: true,
              message: 'token valid'
          });
          // console.log(doc)
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

module.exports = router;