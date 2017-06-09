<template>
  <div class="container">
    <div class="newblog">
      <div class="toobar">
        <h1 class="lastblog">最新博文</h1>
        <div class="more">
            <router-link to='/blog/All'>查看更多</router-link>
        </div>
      </div>
      <hr class="split">
      <section class="webmodal">      
        <div class="items" v-for="(blog, index) in blogs" >
          <div class="bgbr"></div>
          <div class="item">
            <h2 class="blogtitle"><router-link :to='"/alongBlog/"+blog._id'>{{blog.title}}</router-link></h2>
            <div class="date">
              <p>{{formedData(blog.date)}}</p>
              <!-- <router-link :to:'"/alongBlog/"+blog.id'>chakn</router-link> -->
            </div>
            <hr>
            <div class="readall">
                <router-link :to='"/alongBlog/"+blog._id'><img src="../../assets/readall.png" alt="阅读全文"></router-link>
            </div>
          </div>
          <div style="clear:both;"></div>
        </div>
      </section>
    </div>
    <!-- <hr class="split"> -->
    <div class="newdemo">
      <div class="toobar">
        <h1 class="lastdemo">最新Demo</h1>
        <div class="more">
            <router-link to='/demo'>查看更多</router-link>
        </div>
      </div>
    <hr>
      <div class="demo" v-for="demo in demos">
        <div class="header"><h2>{{demo.title}}</h2></div>
        <div cladss="demo_frame" v-html="demo.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
var dateFormat = require('dateformat')
export default {
  data () {
    return {
      blogs: [],
      demos: []
    }
  },
  created () {
    this.fetchNewBlog('All')
    this.fetchNewDemo()
  },
  methods: {
    formedData (date) {
      return dateFormat(date, 'yyyy-mm-dd')
    },
    fetchNewBlog: function (type) {
      // this.type = type
      var self = this
      var url = '/api/blog/getBlogs/' + type + '?limit=3'
      fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        // console.log('parsed json', json)
        self.blogs = json
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    },
    fetchNewDemo: function () {
      var self = this
      var url = '/api/demo/getDemos' + '?limit=3'
      fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        self.demos = json
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.lastdemo:before{
	content: url('../../assets/demo.png')
}
.lastblog:before{
	content: url('../../assets/blog.png')
}
hr.split{
  height: 3px;
  box-shadow: 2px 2px 2px rgb(88, 126, 156);
  border-radius: 2px;
}
a{
  text-decoration: none;
  color: black;
}
h1{
  text-indent: 40px;
  color:#302A2A;
  font: bold 32px Verdana, Geneva, sans-serif;
  font-weight: bold;
  text-align: left;
  text-shadow: 2px 2px 2px rgb(88, 126, 156);
}
.toobar{
  position: relative;
  h1{
    // display: inline;
    // text-indent: 2em;
  }
  .more{
    display: inline;
    position: absolute;
    right: 10px;
    bottom: 2px;
    a{
      color:#111111;
      font-weight: bold;
  text-align: left;
  text-shadow: 2px 2px 2px rgb(88, 126, 156);
    }
  }
}
.newdemo{
  margin-top: 40px;
}
.container{
  
  width: 100%;
  .webmodal{
    padding-bottom: 20px; 
    // height: 300px;
    min-height: 300px;
    // display: flex; 
    overflow: hidden;
    .items{
      position: relative;

      padding: 20px 0 20px 0;
      border-radius: 30px;
      h2,p{
        text-indent: 2em;
        padding-top: 2em;
      }
      .date{
        position: absolute;
        top:10px;
        right: 20px;
      }
      .readall{
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      @media screen and(max-width:480px) {
        .date{
            display: none;
        }
      }
      width: 98%;
      margin: 0 auto;
      height: 100%;
      // border: solid 1px red;
      .bg{
        width: 100%;
        height: 140px;       
      }    
      .item{
      	      // border: solid 1px;
        border-radius: 30px;
        width: 100%;
        height: 160px;
        position: absolute;
        .blogtitle{
        	a{
        		padding-left: 25px;
        	}
        }
        .blogtitle:before{
			content: url('../../assets/BlogTitle.png')
        }
        .date{
        	p:before{
        		content: url('../../assets/blog-time.png')
        	}
        }
      }  
    }
    .bgbr{
      float: left;
      border-radius: 30px;
      width: 100%;
      height: 200px;
      -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
      -webkit-background-size: cover;
      -moz-background-size: cover;
          background-size: cover;
    }
    .item:hover{
      box-shadow: 0 0 18px rgba(11,1,32,3); 
    }
  }
}
</style>
