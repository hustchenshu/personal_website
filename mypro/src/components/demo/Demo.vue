<template>
  <div class="container">
   <div class="manage">
<!--       <router-link to="/addDemo" >添加  
      </router-link> -->
      <a href="/admin/#/addDemo">添加Demo</a>
    </div>
    <div v-if="demos.length>0">    
      <div class="demo" v-for="demo in demos">
        <div class="header"><h1>{{demo.title}}</h1></div>
        <div cladss="demo_frame" v-html="demo.content"></div>
      </div>
    </div>
    <div v-else class="nocontent">
      <div>
        <img src="../../assets/nocontent.png" alt="">
        <h1>这里还没有开垦哦！！</h1>
      </div>
    </div>
  </div>
</template>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
<script>
export default {
  data () {
    return {
      demos: []
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var self = this
      var url = '/api/demo/getDemos'
      fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        self.demos = json
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
    // getData: function () {
    //   this.demos.push({
    //     title: 'ddd',
    //     content: '<iframe height="265" scrolling="no" title="grxYbj" src="//codepen.io/hustchen/embed/preview/grxYbj/?height=265&theme-id=dark&default-tab=result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="https://codepen.io/hustchen/pen/grxYbj/">grxYbj</a> by hustchen (<a href="https://codepen.io/hustchen">@hustchen</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>'
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width:414px){
  .manage{
    display: none;
  }
}
.manage{
  margin:20px 0 30px 0px;
  padding:10px;
  float: right;
  // border-radius: 10px;
  // border: solid 1px gray;
  a{
    text-decoration: none;
    font-weight: bold;
    font-size: 26px;
  }
  a:before{
    content:url('../../assets/add.png')
  }
}
.demo{
  clear: both;
  padding-bottom: 30px;
}
.container{
  height: 100%;
  min-height: 400px;
}
.demo_frame{
  border-radius: 30px;
}
.nocontent{
  padding: 20px;
  div{
    img{
      margin: 0 auto;
    }
    h1{
      text-align: center;
    }
    padding: 50px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
