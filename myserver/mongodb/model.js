var mongoose = require('mongoose');
// 这里定义数据库模型，也可以添加方法
module.exports = { 
    AppData:{
        name:{type:String,required:true},
        content:{type:String,required:true},
        src:{type:String},
        pics:{type:String},
        upUser:{type:String},
        upTime:{type:Date,default:Date.now},
        type:{type:String},
        count:{type:Number},
        logoname:{type:String}
    },
    Blogs:{
        // id:{type:String,required:true},
        content:{type:String,required:true},
        md:{type:String,required:true},
        title:{type:String,required:true},
        date:{type:Date,default:Date.now},
        type:{type:String,default:'Others'},
        click: {type: Number,default:0}
    },
    BlogClass:{
        title:{type:String,required:true},
        date:{type:Date,default:Date.now}
    },
    Demos:{
        // id:{type:String,required:true},
        content:{type:String,required:true},
        title:{type:String,required:true},
        date:{type:Date,default:Date.now},
    }

};